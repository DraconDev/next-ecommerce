import CategoryList from "./CategoryList";
import Menu from "./Menu";

type Props = {};

const NavbarSecondRow = (props: Props) => {
    return (
        <div className="bg-tertiary w-full p-1  text-xl justify-center flex">
            <div className="max-w-6xl flex gap-2 w-full items-center">
                <Menu />
                <CategoryList />
            </div>
        </div>
    );
};

export default NavbarSecondRow;
