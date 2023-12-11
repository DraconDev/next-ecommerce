"use client";

const CategoryButton = ({ category }: { category: string }) => {
    // const { data } = useSWR<ProductType[]>(
    //     `https://fakestoreapi.com/products/category/${category}`,
    //     () =>
    //         fetch("https://fakestoreapi.com/products")
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 console.log(data);
    //                 // Filter the data based on the category
    //                 const filteredData = data.filter(
    //                     (product: ProductType) => product.category === category
    //                 );
    //                 return filteredData;
    //             })
    // );

    return <button onClick={() => console.log("")}>{category}</button>;
};

export default CategoryButton;
