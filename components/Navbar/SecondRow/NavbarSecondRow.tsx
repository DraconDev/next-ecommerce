import CategoryList from "./CategoryList";
import Menu from "./Menu";

type Props = {};

const NavbarSecondRow = (props: Props) => {
    return (
        <div className="bg-tertiary w-full p-1 text-xl flex gap-2">
            <Menu />
            <CategoryList />
        </div>
    );
};

export default NavbarSecondRow;
