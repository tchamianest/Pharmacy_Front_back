function Cardseacrh(props) {
  return (
    <div className="w-[80%] shadow-md max-h-[300px] bg-gray-200 p-5 rounded-sm ">
      <div className="flex gap-5">
        <div className="w-[20%]">
          <img src={props.image} alt="image" />
        </div>
        <div className="flex-1 ">
          <p className="font-bold text-2xl mb-3">{props.title}</p>
          <p className="text-xs">{props.description}</p>
          <div className="flex mt-5 gap-3">
            {props.location && (
              <p className="font-bold text-primary">Location :</p>
            )}
            <p>{props.location}</p>
          </div>

          {props.location && (
            <div className="flex justify-end mt-5 gap-3 left">
              <a
                href={`/product?id=${props.id}`}
                className="text-center bg-blue-400 text-white font-bold p-1 rounded-full hover:bg-primary"
              >
                {" "}
                View Location
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cardseacrh;
