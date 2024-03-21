import React from "react";
import PhotoGrid from "../components/PhotoGrid";
import { useState, useEffect } from "react";

const MyFavourites = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('saved_photos')));
    }, []);

    return (
        <div className="relative mx-auto text-gray-600">
            <div id="photos" className="pt-4">

                {data != null &&
                    <PhotoGrid results={data}  />
                }
            </div>
        </div>
    );
};

export default MyFavourites;