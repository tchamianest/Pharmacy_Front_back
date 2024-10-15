import { useEffect, useState } from "react";
import { ChangeEvent } from "react";

import { addDays, subDays } from "date-fns";
import { useRouter } from "next/router";
import { FieldValues, useForm } from "react-hook-form";

import { useToast } from "@context/RadixCustomContex";
import { useNoteUpdating } from "@hooks/useNoteUpdating";
import { useStorage } from "@hooks/useStorage";
import { notesStore } from "@store/notes";
import logger from "@utils/Logger";
import { trpc } from "@utils/trpc";
import { labels } from "@utils/constants";

export interface UpdateGeneralNote {
  attachementUrl: string;
  description: string;
  encounterId: string;
  serviceProviderId: string;
  lastUpdatedBy: string;
  noteType: any;
  comment: string;
  linkedCareplans?: number[];
}
export const useUpdateGeneralNote = (
  onSuccess: () => void,
  encounterId: string,
  description: string,
  noteType: { id: number; name: string },
  noteId: string,
  attachmentName?: string,
  linkedCareplans?: number[]
) => {
  const methods = useForm<FieldValues>({
    defaultValues: {
      description: description,
      encounterId: "",
      serviceProviderId: "",
      lastUpdatedBy: "",
      noteType: noteType.name,
      comment: "",
      linkedCareplans: linkedCareplans,
    },
  });

  const {
    register,
    control,
    setValue,
    trigger,
    getValues,
    handleSubmit: onSubmit,
    formState: { errors },
    reset: resetForm,
    resetField,
  } = methods;

  const { setRefetch } = notesStore();

  useEffect(() => {
    resetField("description", { defaultValue: description });
    setValue("linkedCareplans", linkedCareplans);
    trigger("linkedCareplans");
  }, [description, linkedCareplans]);

  useEffect(() => {
    resetField("noteType", { defaultValue: noteType.name });
  }, [noteType]);

  const { upload } = useStorage(`general-notes/${encounterId}`);
  const { setNoteUpdating } = useNoteUpdating();
  const {
    query: { id },
    pathname,
  } = useRouter();

  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [fileError, setFileError] = useState<string>();
  const [attachmentSrc, setAttachmentSrc] = useState<string | undefined>(
    attachmentName
  );
  const [attachment, setAttachment] = useState<File>();

  useEffect(() => {
    setAttachmentSrc(attachmentName);
  }, [attachmentName]);

  const maxSize = 10485760;
  const today = addDays(new Date(), 1);
  const sevenDaysAgo = subDays(today, 7);
  const { refetch } = trpc.generalNote.getGeneralNotes.useQuery(
    {
      id: id as string,
      currentEncounter: false,
      searchQuery: "",
      date: {
        startDate: sevenDaysAgo,
        endDate: today,
      },
    },
    {
      enabled: false,
    }
  );
  const { refetch: currentRecordsRefetch } =
    trpc.generalNote.getCurrentRecords.useQuery({
      id: id as string,
    });

  const { showToast } = useToast();

  const { mutate: updateGeneralNote, isPending: isUpdating } =
    trpc.generalNote.updateGeneralNoteAttachment.useMutation({
      onSuccess: (data) => {
        refetch();
        // setNoteUpdating();
        setAttachmentSrc(data?.attachmentUrl);
        console.info("successfully updated the attachment");
        uploadGeneralNotesAttachment(data?.Id);
        currentRecordsRefetch();
        reset()
         onSuccess();
      },
      onError: (error: any) => {
        console.log(error,"=============error")
        showToast({
          title: "Oops! Unable to update attachment.",
          description:
            "Please try again later or contact support, if the problem persists.",
          duration: 3000,
          side: "right",
          isNotSuccess: true,
          position: "top",
        });
        logger.error(error, {
          componentStack:
            "src: components > Notes > useUpdateGeneralNotes onsuccess",
        });
      },
    });

  const handleDelete = () => {
    setAttachmentSrc(undefined);
    setAttachment(undefined);
  };

  const uploadGeneralNotesAttachment = async (noteId: string) => {
    if (!attachment) {
      return;
    }

    setIsUploading(true);
    console.log(attachment, "---------checko attachements");
    // setNoteUpdating({ id: noteId, isUpdating: true });
    try {
      console.log("here first ========")
      const key = await upload(noteId, attachment);

      if (!key) {
        setIsUploading(false);
        return;
      }
console.log("here-==========")
      updateGeneralNote({
        id: noteId,
        attachment: [{ Name: attachment.name, Key: key }],
      });
      setIsUploading(false);
    } catch (error) {
      console.log(error,"------------error here ")
      logger.log("upload Error", error);
      setIsUploading(false);
    }
  };

  const { mutate, isPending: isAdding } =
    trpc.generalNote.updateGeneralNote.useMutation({
      onSuccess: (data) => {
        uploadGeneralNotesAttachment(data?.Id);
        setRefetch(true);
        reset();
        refetch();
        currentRecordsRefetch;

        onSuccess();
        showToast({
          title: "Success!",
          description: `The ${labels.serviceUser}'s daily records have been updated successfully.`,
          duration: 3000,
          side: "right",
          position: "top",
        });
      },
      onError: (error: any) => {
        showToast({
          title: "Oops! Failed to add patient.",
          description:
            "Please try again later or contact support, if the problem persists.",
          duration: 3000,
          side: "right",
          isNotSuccess: true,
          position: "top",
        });
        logger.error(error, {
          componentStack:
            "src: components > Notes > useUpdateGeneralNotes onsuccess",
        });
      },
    });

  const handleSubmit = onSubmit((data) => {
    console.log(data,"===========")
    mutate({
      description: data.description,
      id: noteId,
      comment: data.comment,
      linkedCareplans: data.linkedCareplans ?? [],
    });
  });

  const handleAttachmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file.size > maxSize) {
        setFileError("File/Image can't exceed 10MB");
        return;
      }
      setAttachment(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => {
        setAttachmentSrc(reader.result as string);
      };
    }
  };
  const handleDeleteAttachment = () => {
    setAttachment(undefined);
    setAttachmentSrc(undefined);
  };
  const reset = () => {
    resetForm();
    handleDeleteAttachment();
    setFileError(undefined);
  };

  return {
    register,
    control,
    handleSubmit,
    formState: { errors },
    isLoading: isAdding || isUpdating || isUploading,
    handleDeleteAttachment,
    attachmentSrc,
    attachment,
    setValue,
    handleAttachmentChange,
    reset,
    getValues,
    trigger,
    fileError,
    handleDelete,
    methods,
  };
};
