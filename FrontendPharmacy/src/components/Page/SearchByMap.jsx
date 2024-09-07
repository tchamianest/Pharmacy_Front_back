import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";
import axios from "axios";
function MapSectionsSearch({ data }) {
  let originPosition = [-1.969596, 30.061921];
  const [location, setLocation] = useState([]);

  const createLabelIcon = (label) => {
    const html = `
          <div class="text-[13px] whitespace-nowrap text-blue-900 font-bold  text-center " >
          ${label} Pharmacy
           <img src='/location.png' class="w-10 h-10"/>
          </div>
        `;
    return L.divIcon({
      className: "custom-div-icon",
      html: html,
      iconSize: [50, 50],
    });
  };

  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/api/users`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("HeaderToken"),
          },
        });

        setDataUser(result?.data?.Users);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    function parseLatLong(str) {
      const parts = str.split(",");
      const latPart = parts[0].split(":")[1].trim();
      const latitude = parseFloat(latPart);
      const longPart = parts[1].split(":")[1].trim();
      const longitude = parseFloat(longPart);
      return { latitude, longitude };
    }

    const newLocations = data?.map((el) => {
      const user = dataUser;
      const seller = user?.filter((user1) => user1.id == el?.sellerId);
      const locationData = parseLatLong(el?.location);
      return {
        name: el.locationName,
        locationData,
        Phone: el.phone,
        medicalID: el.id,
        MedicalName: el.productName,
        img: el.productPictures,
        user: seller[0],
      };
    });

    setLocation(newLocations);
  }, [data, dataUser]);
  return (
    <div className="w-full items-center flex-col justify-center flex bg-gray-600 pt-10">
      <div className="font-bold text-primary mb-10 text-2xl">
        Search With Map
      </div>
      <div className=" flex items-center z-30 justify-center content-center w-full mb-10 bg-gray-400 border h-full min-h-[200px]">
        <MapContainer
          center={originPosition}
          zoom={9}
          scrollWheelZoom={false}
          style={{ height: "70vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {location.map((loc, index) => (
            <Marker
              key={index}
              position={[loc.locationData.latitude, loc.locationData.longitude]}
              icon={createLabelIcon(loc.user.firstName)}
              draggable={false}
            >
              <Popup>
                <div className="flex flex-col ">
                  <div className="flex max-h-14  shadow-sm items-center justify-between px-3 mt-2">
                    <img
                      src={loc.user.profileImage}
                      alt="Medical Image"
                      className="h-8 w-8 bg-gray-400 rounded-full"
                    />
                    <div className="">
                      <p className="mt-0 mb-0 pt-0 pb-0 capitalize ">
                        {" "}
                        Seller: {loc.user.firstName},
                      </p>
                    </div>
                  </div>
                  <div className="flex max-h-24 bg-gray-100 rounded-lg border shadow-sm items-center justify-between px-3 mt-2">
                    <img
                      src={loc.img}
                      alt="Medical Image"
                      className="h-8 w-8 bg-gray-400 mr-3"
                    />
                    <div className="">
                      <p className="mt-0 mb-0 pt-0 pb-0 capitalize ">
                        {" "}
                        {loc.MedicalName}
                        <br /> {loc.Phone} {loc.name}
                      </p>
                    </div>
                  </div>
                  <a
                    className=" flex justify-center items-center"
                    href={`http://localhost:5173/product?id=${loc.medicalID}`}
                  >
                    <button className="px-3 py-1 bg-blue-500 cursor-pointer rounded-lg text-white mt-3 font-bold hover:bg-primary">
                      View Location
                    </button>
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

MapSectionsSearch.propTypes = {
  data: PropTypes.array.isRequired,
};

export default MapSectionsSearch;
