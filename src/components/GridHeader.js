import React from "react";

const GridHeader = (props) => {
  return (
    <div id="imageGridHeader" className="pb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <span className="bg-slate-200 text-gray-600 text-sm font-medium me-2 px-2.5 py-2 rounded-full dark:bg-green-900 dark:text-green-300 inline-block align-middle">
          Total image(s) {props.totalImage}
        </span>
      </div>
      <div>
        <button
          type="button"
          onClick={() => props.changeGridColumnHandler(10)}
          className="bg-slate-200 text-gray-600 text-sm font-medium  p-1 text-center inline-flex items-center  dark:bg-blue-600 hover:bg-blue-200 float-right"
        >
          10
        </button>
        <button
          type="button"
          onClick={() => props.changeGridColumnHandler(8)}
          className="bg-slate-200 text-gray-600 text-sm font-medium p-1 text-center inline-flex items-center me-2 dark:bg-blue-600 hover:bg-blue-200 float-right"
        >
          8
        </button>
        <button
          type="button"
          onClick={() => props.changeGridColumnHandler(5)}
          className="bg-slate-200 text-gray-600 text-sm font-medium  p-1 text-center inline-flex items-center me-2 dark:bg-blue-600 hover:bg-blue-300 float-right"
        >
          5
        </button>
        <span className="text-gray-600 text-sm font-medium me-2 px-2.5 py-2 float-right">
          Select album column size:
        </span>
      </div>
    </div>
  );
};

export default GridHeader;
