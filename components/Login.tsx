type Props = {};
import { CgProfile } from "react-icons/cg";

const Login = (props: Props) => {
    return (
        <div className="flex items-center  text-lg text-accent">
            <CgProfile className="w-9 h-9" />
        </div>
    );
};

export default Login;
