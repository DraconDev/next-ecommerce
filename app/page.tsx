import Products from "@/components/Products";

export default function Home() {
    return (
        <main className="flex w-full h-full  items-center justify-center  ">
            <div className="max-w-6xl w-full h-full ">
                <Intro />
                <Products />
            </div>
        </main>
    );
}
