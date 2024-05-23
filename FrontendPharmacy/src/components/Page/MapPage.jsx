import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";

const origin = { lat: -1.969733, lng: 30.061962 };
const destination = { lat: -1.95782, lng: 30.07398 };

function Routing({ start, end }) {
  const map = useMap();

  React.useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(start.lat, start.lng), L.latLng(end.lat, end.lng)],
      routeWhileDragging: true,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map, start, end]);

  return null;
}

function MapPage() {
  const originPosition = [origin.lat, origin.lng];
  const destinationPosition = [destination.lat, destination.lng];

  const createLabelIcon = (label) => {
    const html = `
      <div class="text-2xl text-blue-500 font-bold mb-10 text-center" >
        ${label}
      </div>
    `;
    return L.divIcon({
      className: "custom-div-icon",
      html: html,
      iconSize: [1, 1], // Set icon size to zero to only show the label
    });
  };
  return (
    <div className="flex justify-center items-center flex-col m-10 gap-8">
      <div>
        <h1>The map section</h1>
      </div>
      <div className="flex items-center justify-center content-center w-[70%] bg-gray-400 border min-h-[500px]">
        <MapContainer
          center={originPosition}
          zoom={13}
          style={{ height: "100vh", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={originPosition} icon={createLabelIcon("Seller ")}>
            <Popup>
              Origin: ({origin.lat}, {origin.lng})
            </Popup>
          </Marker>
          <Marker
            position={destinationPosition}
            icon={createLabelIcon("Buyer")}
          >
            <Popup>
              Destination: ({destination.lat}, {destination.lng})
            </Popup>
          </Marker>
          <Routing start={origin} end={destination} />
        </MapContainer>
      </div>
    </div>
  );
}

// function Routing({ position, destination }) {
//   React.useEffect(() => {
//     if (position && destination) {
//       const map = window.L.map("map");

//       window.L.Routing.control({
//         waypoints: [
//           window.L.latLng(position[0], position[1]),
//           window.L.latLng(destination[0], destination[1]),
//         ],
//         routeWhileDragging: true,
//       }).addTo(map);
//     }
//   }, [position, destination]);

//   return null;
// }

export default MapPage;
