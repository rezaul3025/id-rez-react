import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"


const Navbar = () => {

    const [homeActive, setHomeActive] = useState(false);
    const [albumActive, setAlbumActive] = useState(false);
    const [myFavActive, setMyFavActive] = useState(false);
    const location = useLocation();



    const handleNav = (currentPath) => {
        switch (currentPath) {
            case '/':
                setHomePageActive();
                break;
            case '/album':
                setHomeActive(false);
                setAlbumActive(true);
                setMyFavActive(false);
                break;
            case '/my-fav':
                setHomeActive(false);
                setAlbumActive(false);
                setMyFavActive(true);
                break;
            default:
                setHomePageActive();
        }
    };

    const setHomePageActive = () => {
        setHomeActive(true);
        setAlbumActive(false);
        setMyFavActive(false);
    }

    useEffect(() => {
        const { pathname } = location;
        handleNav(pathname);
    }, []);

    return (
        <ul className="flex">
            <li className="mr-6">
                <Link className={(homeActive ? 'text-blue-700  font-bold' : '') + " hover:text-blue-800"} onClick={() => handleNav('/')} to="/" >HOME</Link>
            </li>
            <li className="mr-6">
                <Link className={(albumActive ? 'text-blue-700  font-bold' : '') + " hover:text-blue-800"} onClick={() => handleNav('/album')} to="/album">ALBUM</Link>
            </li>
            <li className="mr-6">
                <Link className={(myFavActive ? 'text-blue-700  font-bold' : '') + " hover:text-blue-800"} onClick={() => handleNav('/my-fav')} to="/my-fav">MY FAVOURITES</Link>
            </li>
        </ul>
    );
};

export default Navbar