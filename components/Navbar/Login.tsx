type Props = {};
import { VscAccount } from "react-icons/vsc";

const Login = (props: Props) => {
    return (
        <div className="flex items-center  text-lg p-1">
            <VscAccount className="w-9 h-9" />
        </div>
    );
};

export default Login;
