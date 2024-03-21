import Navbar from "./Navbar";

import React from "react";
const Header = () => {

    return(
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-slate-100 text-center text-lg py-8 px-8 dark:bg-gray-900">
         <Navbar />
        </header>
    );
};

export default Header;