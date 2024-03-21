import React, { Fragment } from "react";
import Photo from "./Photo";

const PhotoGrid = (props) => {
    return (
        <Fragment>
            <div id="imageGridHeader" className="pb-4">
                <span className="bg-slate-200 text-gray-600 text-sm font-medium me-2 px-2.5 py-2 rounded-full dark:bg-green-900 dark:text-green-300">Total image(s) {props.results.length}</span>
            </div>
            <div id="imageGrid" className="grid grid-cols-2 md:grid-cols-8 gap-4 w-full">
                {props.results.map((result) => (
                    <Photo data={result} key={result.id}/>
                ))}
            </div>
        </Fragment>
    );
};

export default PhotoGrid;