import React from "react";
import PhotoGrid from "../components/PhotoGrid";
import PhotoSearch from "../components/PhotoSearch";

import { useState, useEffect } from "react";

const MyFavourites = () => {
    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);
  
    useEffect(() => {
        let savedPhotos = JSON.parse(localStorage.getItem('saved_photos'));
        setData(savedPhotos);
        setResults(savedPhotos);
    }, []);

    const doSearchOnCurrentResults = (event) => {
        if (data != null) {
            let searchItems = data.filter(function (entry) { return entry.name.includes(event.target.value); });
            setResults(searchItems);
        }
    }

    return (
        <div className="relative mx-auto text-gray-600">
            <div className="grid grid-cols-1 md:grid-cols-2">
            <PhotoSearch handleSearch={doSearchOnCurrentResults} />
            </div>
            <div id="photos" className="pt-4">
                {data != null &&
                    <PhotoGrid results={results} />
                }
            </div>
        </div>
    );
};

export default MyFavourites;