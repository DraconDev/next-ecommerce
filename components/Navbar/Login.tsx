"use client";
type Props = {};
import { signIn, signOut, useSession } from "next-auth/react";
import { VscAccount } from "react-icons/vsc";

const Login = (props: Props) => {
    const { data: session } = useSession();
    return (
        <div
            className={`flex items-center  text-lg p-1 ${
                session ? "text-accent" : "text-primary"
            }`}
        >
            <button onClick={() => (session ? signOut() : signIn())}>
                <VscAccount className="w-9 h-9" />
            </button>
        </div>
    );
};

export default Login;
