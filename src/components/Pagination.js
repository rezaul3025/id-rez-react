import React, { Fragment } from "react";

const Pagination = (props) => {

    return (
        props.data && props.data.info && <Fragment>
            <button className={(props.data.info.next == null ? "cursor-not-allowed" : "") + " block bg-slate-200 hover:bg-blue-500 text-black py-2 px-3 rounded-r float-right"} onClick={() => props.handleFetchLitOfPhotos(props.data.info.next)}>
                Next &gt;&gt;
            </button>
            <button className={(props.data.info.prev == null ? "cursor-not-allowed" : "") + " block bg-slate-200 hover:bg-blue-500 text-black py-2 px-3 rounded-l float-right"} onClick={() => props.handleFetchLitOfPhotos(props.data.info.prev)} >
                &lt;&lt; Prev
            </button>
        </Fragment>
    );
}

export default Pagination;