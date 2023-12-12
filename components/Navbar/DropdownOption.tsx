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
            className=" p-1 flex justify-between items-center px-2 w-[150px]"
            onClick={() => {
                setSearchSetting(option);
            }}
        >
            {option.charAt(0).toUpperCase() + option.slice(1)}
            {searchSetting === option && <FaCheck className="text-green-600" />}
        </button>
    );
};

export default DropdownOption;
