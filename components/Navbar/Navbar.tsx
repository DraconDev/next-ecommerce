type Props = {};

import { SiTurbosquid } from "react-icons/si";
import Basket from "../Basket";
import Login from "../Login";
import SearchField from "./SearchField";

const Navbar = (props: Props) => {
    return (
        <div className="fixed top-0 left-0 text-primary bg-secondary w-full p-2 md:text-3xl">
            <SiTurbosquid classnName="w-8 h-8" />
            <SearchField />
            <Login />
            <Basket />
        </div>
    );
};

export default Navbar;
