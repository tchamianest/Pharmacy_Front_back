import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import PropTypes from "prop-types";

function MapSectionsSearch({ data }) {
  let originPosition = [-1.969596, 30.061921];
  console.log(data);
  const [location, setLocation] = useState([]);

  const createLabelIcon = (label) => {
    const html = `
          <div class="text-[10px] text-red-500 font-extralight  text-center" >
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

  useEffect(() => {
    function parseLatLong(str) {
      const parts = str.split(",");
      const latPart = parts[0].split(":")[1].trim();
      const latitude = parseFloat(latPart);
      const longPart = parts[1].split(":")[1].trim();
      const longitude = parseFloat(longPart);
      return { latitude, longitude };
    }

    const newLocations = data.map((el) => {
      const locationData = parseLatLong(el.location);
      return {
        name: el.locationName,
        locationData,
        Phone: el.phone,
        medicalID: el.id,
      };
    });

    setLocation(newLocations);
  }, [data]);
  console.log(data, "data comming ");
  return (
    <div className="w-full items-center flex-col justify-center flex bg-gray-600 pt-10">
      <div className="font-bold text-primary mb-10 text-2xl">
        Search With Map
      </div>
      <div className=" flex items-center z-30 justify-center content-center w-full mb-10 bg-gray-400 border h-full min-h-[200px]">
        <MapContainer
          center={originPosition}
          zoom={13}
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
              icon={createLabelIcon(loc.name)}
              draggable={false}
            >
              <Popup>
                <div className="flex flex-col gap2">
                  {loc.Phone} {loc.name}
                  <a
                    className=" flex justify-center items-center"
                    href={`http://localhost:5173/product?id=${loc.medicalID}`}
                  >
                    <button className="px-3 py-1 bg-blue-500 cursor-pointer rounded-2xl text-white mt-3 font-bold hover:bg-blue-700">
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
