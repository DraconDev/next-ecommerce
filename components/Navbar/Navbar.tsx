type Props = {};

import { SiTurbosquid } from "react-icons/si";
import Basket from "../Basket";
import Login from "../Login";
import SearchField from "./SearchField";
import NavbarSecondRow from "./SecondRow/NavbarSecondRow";

const Navbar = (props: Props) => {
    return (
        <div className="fixed top-0 left-0 text-primary bg-secondary w-full md:text-3xl flex flex-col">
            <div className="flex justify-between p-2 ">
                <SiTurbosquid className="w-8 h-8" />
                <SearchField />
                <div className="flex gap-2">
                    <Login />
                    <Basket />
                </div>
            </div>
            <NavbarSecondRow />
        </div>
    );
};

export default Navbar;
