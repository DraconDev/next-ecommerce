type Props = {
    children: React.ReactNode;
};

const MainWrapper = ({ children }: Props) => {
    return (
        <div className="flex w-full h-full  items-center justify-center  ">
            <div className="max-w-6xl w-full h-full  text-black flex  items-center flex-col">
                {children}
            </div>
        </div>
    );
};

export default MainWrapper;
