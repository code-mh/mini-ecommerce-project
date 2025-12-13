import { Fragment } from "react/jsx-runtime";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function Home(){

    const [products,setProducts] = useState([]);
    const [searchParams, setSearchParams]=useSearchParams();

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams) 
        .then(res=>res.json())
        .then(res=>setProducts(res.products))
    },[searchParams])

    return <Fragment>

        <h1 className="text-3xl font-bold text-center mt-7">
            Latest Products
        </h1>

        <section className="container mx-auto px-4 mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map(p=><ProductCard key={p.id} product={p}/>)}
            </div>
        </section>

    </Fragment>
}