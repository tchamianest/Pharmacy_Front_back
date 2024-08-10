import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

function MapSections() {
  let originPosition = [-1.969596, 30.061921];
  const [data, setData] = useState([]);
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
    const fetchData = async () => {
      try {
        const result = await axios.get(`http://localhost:5000/api/users`, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: localStorage.getItem("HeaderToken"),
          },
        });
        setData(result.data.Users);
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

    const newLocations = data.map((el) => {
      const locationData = parseLatLong(el.whereYouLive);
      return { name: el.firstName, locationData, Phone: el.phone };
    });

    setLocation(newLocations);
  }, [data]);
  console.log(data);
  return (
    <div className="w-full items-center flex-col justify-center flex bg-gray-600 pt-10">
      <div className="font-bold text-primary mb-10 text-2xl">
        All Pharmacy Available
      </div>
      <div className=" flex items-center z-30 justify-center content-center w-full mb-10 bg-gray-400 border h-full min-h-[200px]">
        <MapContainer
          center={originPosition}
          zoom={13}
          style={{ height: "70vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {location.map((loc, index) => (
            <Marker
              key={index}
              position={[loc.locationData.latitude, loc.locationData.longitude]}
              icon={createLabelIcon(loc.name)}
              draggable={false}
            >
              <Popup>
                {loc.Phone} {loc.name}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default MapSections;
