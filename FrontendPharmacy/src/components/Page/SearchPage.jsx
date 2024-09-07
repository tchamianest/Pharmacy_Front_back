import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";
import { useLocation } from "react-router-dom";
import Cardseacrh from "../cardFront/Cardseacrh";
import { reverseGeocode } from "../../utils/ApiReverse";
import { getlocation } from "../../utils/locationFunction";
import axios from "axios";
import help from "../../assets/help.jpg";
import MapSectionsSearch from "./SearchByMap";

function SearchPage() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const name = query.get("name");

  const [location, setlocation] = useState(" ");
  const [data, setData] = useState([]);

  useEffect(() => {
    const checkLocation = async () => {
      const location = await getlocation();
      const data = location.split(" ");
      const Lat = Number(data[1].slice(0, -1));
      const Long = Number(data[3]);

      const locationName = await reverseGeocode(Lat, Long);
      setlocation(locationName);
    };
    checkLocation();
  }, []);
  useEffect(() => {
    const Fetch = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/search?name=${name}&locationName= ${location}`
      );
      setData(result.data || []);
    };
    Fetch();
  }, [name, location]);
  const divStyle = {
    backgroundImage: `url(${help})`,
  };
  return (
    <div>
      <div className="flex max-h-[100] fixed justify-center dark:bg-gray-800 items-center flex-col bg-white gap-8">
        <Navbar />
      </div>
      <div className="p-20  dark:bg-gray-800 bg-white ">
        <div className="p-5 bg-white   dark:bg-gray-800 flex gap-4   content-center">
          {/* left sections  */}

          <div
            style={divStyle}
            className="w-[20%] mt-[90px] h-[100vh] bg-cover bg-center  bg-no-repeat   bg-gray-300 rounded-sm"
          ></div>
          {/* the search section  */}
          <div className="w-[80%] mt-[90px]  flex flex-col gap-4 max-h-[95vh] overflow-auto">
            <div className="flex gap-5 bg-gray-100 w-[80%] h-[50px] shadow-lg rounded-sm items-center p-3">
              <p className="font-bold text-2xl">Search :</p>
              <h1 className="text-xl text-black/70 italic">{name}</h1>
            </div>

            {data.length > 0 ? (
              data.map((el) => (
                <>
                  <Cardseacrh
                    title={el.productName}
                    description={el.productDescription}
                    image={el.productPictures}
                    location={el.locationName}
                    id={el.id}
                  />
                </>
              ))
            ) : (
              <Cardseacrh
                title={`No Match Medical Match :  "${name}" `}
                description={`We couldn't find any medical matches ${name} for your search query. Please double-check your search terms for any spelling errors or try using different keywords. Here are some tips to improve your search:
Check for Typos: Ensure that all words are spelled correctly.
Use Different Keywords: Try using synonyms or related terms that might better describe what you're looking for.
Broaden Your Search: Sometimes using more general terms can help find a wider range of results.
If you're still having trouble finding what you need, feel free to contact our support team for assistance. We're here to help you!`}
                image="https://static.vecteezy.com/system/resources/thumbnails/012/042/292/small/warning-sign-icon-transparent-background-free-png.png"
              />
            )}
          </div>
        </div>
      </div>
      <MapSectionsSearch data={data} />

      <Footer />
    </div>
  );
}

export default SearchPage;
