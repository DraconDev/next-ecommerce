import { FaCheck } from "react-icons/fa";

type DropdownOptionProps = {
    option: string;
    setSearchSetting: React.Dispatch<React.SetStateAction<string>>;
    searchSetting: string;
};

const DropdownOption = ({
    option,
    searchSetting,
    setSearchSetting,
}: DropdownOptionProps) => {
    return (
        <button
            className=" p-1 flex justify-between items-center px-2"
            onClick={() => {
                setSearchSetting("titles");
            }}
        >
            {option.charAt(0).toUpperCase() + option.slice(1)}
            {searchSetting === "titles" && <FaCheck />}
        </button>
    );
};

export default DropdownOption;
