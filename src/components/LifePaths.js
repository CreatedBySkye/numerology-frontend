import LifePath from "./LifePath";
import { useState, useEffect } from "react";
import axios from "axios";

const LifePaths = () => {
  const [lifePaths, setLifePaths] = useState([]);
  const [error, setError] = useState(undefined);



  useEffect(() => {
    const fetchLifePaths = async () => {
      try {
        const { data } = await axios.get("https://numerology-app-server.herokuapp.com/numerology");
        setLifePaths(data);
        error && setError(undefined);
      } catch (err) {
        setError({
          status: err.response.status,
          errMsg: "Couldn't fetch life paths from db",
        });
      }
    };
    fetchLifePaths();
  }, [error]);

  if (lifePaths.length < 1) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Failed to fetch life paths</div>;
  }

let button = document.getElementById("lifepath")
button.style.opacity="0%"
let h1= document.getElementsByClassName("border-red-800 border-4 text-purple-800 absolute top-40 ml-80 left-96 w-1/4 overflow-y-auto h-2/4")
h1.className="opacity-0"
let body = document.querySelector("body")
body.style.overflow="auto"
body.style.backgroundImage = "url('https://i.ibb.co/6w3y3gn/freguesia-de-estrela-Rk49-UFo7uw8-unsplash-1.jpg')"

let img = document.getElementById("rock-img")
img.style.opacity="0%"
let img2 = document.getElementById("pattern")
img2.style.opacity="0%"
let h5 = document.querySelector("H5")
h5.style.opacity="0%"
  return (
    <div className=""> 
    
     

      <div>
 
      <div className="absolute top-40 z-0">
        {lifePaths.map((path, idx) => (
          <LifePath
            key={idx}
            pathNumber={path.pathNumber}
            title={path.title}
            description={path.description}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default LifePaths;
