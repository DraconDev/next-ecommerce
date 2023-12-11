type Props = {};

import { SiTurbosquid } from "react-icons/si";
import SearchField from "./SearchField";

const Navbar = (props: Props) => {
    return (
        <div className="fixed top-0 left-0 text-primary bg-secondary w-full p-2 md:text-3xl">
            <div className="">
                <SiTurbosquid classnName="w-8 h-8" />
                <SearchField />
            </div>
        </div>
    );
};

export default Navbar;
