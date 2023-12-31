type Props = {};

import Link from "next/link";
import { SiTurbosquid } from "react-icons/si";
import Basket from "./Basket";
import Login from "./Login";
import SearchField from "./SearchField";
import NavbarSecondRow from "./SecondRow/NavbarSecondRow";

const Navbar = (props: Props) => {
    return (
        <div className="z-30 fixed top-0 left-0 text-primary bg-secondary w-full md:text-3xl flex flex-col justify-center items-center p">
            <div className="w-full flex   items-center max-w-6xl gap-2 justify-between p-1">
                <Link href={"/"}>
                    <SiTurbosquid className="w-12 h-12 spin" />
                </Link>
                <SearchField />
                <div className="flex gap-2 items-center">
                    <Login />
                    <Basket />
                </div>
            </div>
            <NavbarSecondRow />
        </div>
    );
};

export default Navbar;
