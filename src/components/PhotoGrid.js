import React, { Fragment } from "react";
import Photo from "./Photo";
import { useState } from "react";

import GridHeader from "./GridHeader";

const PhotoGrid = (props) => {
  const [gridColumns, setGridColumns] = useState(8);

  const changeGridColumns = (value) => {
    setGridColumns(value);
  };

  return (
    <Fragment>
      <GridHeader
        totalImage={props.results.length}
        changeGridColumns={changeGridColumns}
      />
      <div
        id="imageGrid"
        className={
          "grid grid-cols-" +
          gridColumns +
          " md:grid-cols-" +
          gridColumns +
          " gap-4 w-full"
        }
      >
        {props.results.map((result) => (
          <Photo data={result} key={result.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default PhotoGrid;
