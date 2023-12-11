type Props = {};
import { FaSearch } from "react-icons/fa";

const SearchField = (props: Props) => {
    return (
        <div className="text-xl  w-full   border-2 border-accent rounded-xl flex grow">
            <input
                className=" grow rounded-lg rounded-r-none w-full p-1 px-2"
                placeholder="Search"
            ></input>
            <button className="p-1 px-2  rounded-l-none rounded-lg bg-accent">
                <FaSearch className="w-6 h-6 text-black" />
            </button>
        </div>
    );
};

export default SearchField;
