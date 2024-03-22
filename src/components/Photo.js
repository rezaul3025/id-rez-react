import React from "react";
import { useState } from "react";

import StarIcon from "./StarIcon";

const Photo = (props) => {
    let data = props.data;
    const [refresh, setRefresh] = useState(0)

    const saveItem = (item) => {
        let savedItems = getItems();
        if (savedItems === null) {
            savedItems = [];
            savedItems.push(item);
        } else {
            savedItems.push(item);
        }

        localStorage.setItem("saved_photos", JSON.stringify(savedItems));
    };

    const removeItem = (id) => {
        let savedItems = getItems();
        let itemsAfterRemoved = savedItems.filter((item) => item.id !== id);
        localStorage.setItem("saved_photos", JSON.stringify(itemsAfterRemoved));
    };

    const itemHandlar = (item, isItemExist) => {
        if (isItemExist) {
            removeItem(item.id);
        } else {
            saveItem(item);
        }

        setRefresh(refresh+1);
    };

    const getItems = () => {
        return JSON.parse(localStorage.getItem("saved_photos"));
    };

    const checkItemExist = (id) => {
        let savedItems = getItems();

        if (savedItems === null) {
            return false;
        }

        let foundItems = savedItems.filter(function (entry) {
            return entry.id === id;
        });

        return foundItems !== null && foundItems.length === 1;
    };

    return (
        <figure className="max-w-lg" key={data.id}>
            <img
                className="h-auto max-w-full rounded-lg"
                src={data.image}
                alt={data.name}
            />
            <figcaption className="mt-2 text-sm  text-gray-500 dark:text-gray-400">
                {data.name}
                <a
                    title="Save"
                    role="button"
                    onClick={() => itemHandlar(data, checkItemExist(data.id))}
                >
                    {checkItemExist(data.id) && <StarIcon fill_color="text-blue-900" />}
                    {!checkItemExist(data.id) && <StarIcon fill_color="text-slate-300" />}
                </a>
            </figcaption>
        </figure>
    );
};

export default Photo;
