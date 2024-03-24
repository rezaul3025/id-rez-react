import React,{ Suspense } from "react";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";
import PhotoSearch from "../components/PhotoSearch";
import PhotoGrid from "../components/PhotoGrid";

const Album = () => {

    const [data, setData] = useState(null);
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLitOfPhotos = async (url) => {
        if (url == null) {
            return;
        }

        try {
            const response = await fetch(
                url
            );
            if (!response.ok) {
                throw new Error(`HTTP error while fetching Lit Of Photos: Status ${response.status}`);
            }
            let postsData = await response.json();
            setData(postsData);
            setResults(postsData.results);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);

        } finally {
            setLoading(false);
        }
    };

    const doSearchOnCurrentResults = (event) => {
        if (data != null && data.results != null) {
            let searchItems = data.results.filter(function (entry) { return entry.name.includes(event.target.value); });
            setResults(searchItems);
        }
    }

    useEffect(() => {
        fetchLitOfPhotos(`https://rickandmortyapi.com/api/character`);
    }, []);

    return (
        <div className="relative mx-auto text-gray-600">
            <div id="searchAndPagination" className="inline-block mx-auto w-full py-1">

                <PhotoSearch handleSearch={doSearchOnCurrentResults} />

                <Pagination data={data} handleFetchLitOfPhotos={fetchLitOfPhotos} />
            </div>
            <div id="photos" className="pt-4">
                {loading &&
                    <p>Loading ...</p>
                }

                {error &&
                    <p>{error}</p>
                }

                { results != null && <Suspense fallback={<p>Loading photos ...</p>}>
                    <PhotoGrid results={results} />
                </Suspense>}
                   
                
            </div>
            <div id="paginationBottom" className="inline-block mx-auto w-full py-2">
                <Pagination data={data} handleFetchLitOfPhotos={fetchLitOfPhotos} />
            </div>

        </div>
    );
};

export default Album;