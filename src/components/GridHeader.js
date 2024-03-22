import React, { useState } from "react";

const GridHeader = (props) => {
  return (
    <div id="imageGridHeader" className="pb-4">
      <span className="bg-slate-200 text-gray-600 text-sm font-medium me-2 px-2.5 py-2 rounded-full dark:bg-green-900 dark:text-green-300">
        Total image(s) {props.totalImage}
      </span>
      <span className="text-gray-600 text-sm font-medium me-2 px-2.5 py-2">
        Select album column size:
      </span>
      <button
        type="button"
        onClick={() => props.changeGridColumnHandler("5")}
        className="bg-slate-200 text-gray-600 text-sm font-medium  p-0.5 text-center inline-flex items-center me-2 dark:bg-blue-600 hover:bg-blue-300"
      >
        5
      </button>
      <button
        type="button"
        onClick={() => props.changeGridColumnHandler("8")}
        className="bg-slate-200 text-gray-600 text-sm font-medium p-1 text-center inline-flex items-center me-2 dark:bg-blue-600 hover:bg-blue-200"
      >
        8
      </button>
      <button
        type="button"
        onClick={() => props.changeGridColumnHandler("10")}
        className="bg-slate-200 text-gray-600 text-sm font-medium  p-1.5 text-center inline-flex items-center me-2 dark:bg-blue-600 hover:bg-blue-200"
      >
        10
      </button>
    </div>
  );
};

export default GridHeader;
