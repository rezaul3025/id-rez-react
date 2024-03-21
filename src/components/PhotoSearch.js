import React from "react";

const PhotoSearch = (props) => {
    return(
        <input className="border-2 border-gray-300 bg-white h-10 w-600 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search" name="search" placeholder="Search by name" onChange={props.handleSearch} />
    );
};

export default PhotoSearch;