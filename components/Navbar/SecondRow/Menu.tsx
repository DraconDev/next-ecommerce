type Props = {};
import { IoMenu } from "react-icons/io5";

const Menu = (props: Props) => {
    return (
        <div>
            <button className="flex items-center">
                <IoMenu className="w-8 h-8" />
            </button>
        </div>
    );
};

export default Menu;
