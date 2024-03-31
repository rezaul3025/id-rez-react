import React, { Fragment, useState } from "react";
import Photo from "./Photo";

import GridHeader from "./GridHeader";

const PhotoGrid = (props) => {
  const [gridColumnsClass, setGridColumnsClass] = useState(
    "grid-cols-2 md:grid-cols-8",
  );

  const gridColumsSizeClasses = {
    5: "grid-cols-2 md:grid-cols-5",
    8: "grid-cols-2 md:grid-cols-8",
    10: "grid-cols-2 md:grid-cols-10",
  };

  const changeGridColumns = (value) => {
    setGridColumnsClass(gridColumsSizeClasses[value]);
  };

  return (
    <Fragment>
      {(props.results != null || props.results.length !== 0) && (
        <GridHeader
          totalImage={props.results.length}
          changeGridColumnHandler={changeGridColumns}
        />
      )}
      <div
        id="imageGrid"
        className={"grid " + gridColumnsClass + " gap-4 w-full"}
      >
        {props.results.map((result) => (
          <Photo data={result} key={result.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default PhotoGrid;
