import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useMap } from "react-leaflet/hooks";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";

const origin = { lat: -1.969733, lng: 30.061962 };
let destination;
// let destination = { lat: -1.79782, lng: 30.07398 };

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
  const [medical, setMedical] = useState([]);

  useEffect(() => {
    const data1 = async () => {
      const desti = await medical.location;
      const data = desti.split(" ");
      destination = { lat: data[1], lng: data[3] };
      console.log(destination);
    };
    data1();
  }, []);
  // const data = desti.split(" ");
  // const lat = Number(data[1]);
  // const long = Number(data[3]);
  // console.log(lat, long);
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
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/product/${id}`,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: localStorage.getItem("HeaderToken"),
            },
          }
        );
        setMedical(result.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  console.log(medical);
  return (
    <>
      <div className="flex justify-center dark:bg-gray-800 items-center flex-col  gap-8">
        <Navbar />
        {/* Top product section  */}
        <div className="container w-[80%]  flex flex-col justify-center items-center pt-20">
          <div className="flex  gap-5">
            <div className="w-[50%]  overflow-hidden">
              <img
                src={medical.productPictures}
                alt="Product"
                className="object-cover w-[100%] max-h-[330px] "
              />
            </div>
            <div className="w-[55%] flex flex-col justify-between px-10">
              <div>
                <h1 className="font-bold text-3xl text-primary mb-10 ">
                  {" "}
                  {medical.productName}
                </h1>
                <p className="dark:text-white ">{medical.productDescription}</p>
                <div className="flex justify-between w-[90%] mt-10 dark:text-white">
                  <p className="font-bold">
                    available items :{" "}
                    <span className="text-primary font-semibold">Yes</span>{" "}
                  </p>
                  <p className="font-bold">
                    price :{" "}
                    <span className="text-primary font-semibold">
                      {medical.productPrice} Rwf
                    </span>
                  </p>
                </div>
              </div>
              <button className="w-[90%] duration-200 bg-primary/90 p-2 text-white font-bold rounded-sm hover:bg-primary/70">
                Whatsap Text
              </button>
            </div>
          </div>
          <div className="w-[100%] mt-10">
            <div className="flex gap-6 items-center">
              <h1 className="font-semibold text-primary text-1xl">
                Seller Name :
              </h1>
              <p className="dark:text-white text-1xl">Kalisa daniel</p>
            </div>
            <div className="flex gap-6 items-center">
              <h1 className="font-semibold text-primary text-1xl">
                Phone Number :
              </h1>
              <p className="dark:text-white text-1xl">+250-789-098-099</p>
            </div>
            <div className="flex gap-6 items-center">
              <h1 className="font-semibold text-primary text-1xl">Email :</h1>
              <p className="dark:text-white text-1xl">Test@gmail.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="dark:text-white font-bold text-2xl ">
            Medical Location on The Map :
          </h1>
          <div className="w-[100%] h-[2px] dark:bg-white bg-black mt-4">-</div>
        </div>
        <div className="flex items-center z-30 justify-center content-center w-[75%] mb-10 bg-gray-400 border h-full min-h-[200px]">
          <MapContainer
            center={originPosition}
            zoom={13}
            style={{ height: "70vh", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={originPosition} icon={createLabelIcon("Me ")}>
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
      <Footer />
    </>
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
