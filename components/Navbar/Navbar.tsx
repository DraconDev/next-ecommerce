type Props = {};

import { SiTurbosquid } from "react-icons/si";
import Basket from "./Basket";
import Login from "./Login";
import SearchField from "./SearchField";
import NavbarSecondRow from "./SecondRow/NavbarSecondRow";

const Navbar = (props: Props) => {
    return (
        <div className="z-20 fixed top-0 left-0 text-primary bg-secondary w-full md:text-3xl flex flex-col justify-center items-center">
            <div className="w-full flex p-1 px-3 items-center max-w-6xl gap-3">
                <SiTurbosquid className="w-12 h-12" />
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
