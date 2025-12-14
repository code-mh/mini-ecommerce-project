import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProductDetail({cartItems,setCartItems}){

    const [product,setProduct]=useState(null);
    const [qty,setQty] = useState(1);
    const {id} =useParams();

    useEffect(()=>{
            fetch(process.env.REACT_APP_API_URL+'/products/'+id) 
            .then(res=>res.json())
            .then(res=>setProduct(res.products))
        },[])

    function addToCart(){
        const itemExist=cartItems.find((item)=> item.product._id == product._id);
        if(!itemExist){
           const newItems={product,qty};
           setCartItems((state)=> [...state,newItems]);
           toast.info("Cart Item added succesfully");
        }
    }

    function increaseQty(){
        if (product.stock == qty){
            return;
        }
        setQty((state) => state + 1);
    }

    function decreaseQty(){
        if(qty > 1){
            setQty((state) => state - 1);
        }
    }

    return  product && <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col lg:flex-row justify-around gap-10">

                    <div className="w-full lg:w-1/2 flex justify-center" id="product_image">
                        <img
                            src={product.images[0].image}
                            alt="product"
                            className="w-[500px] h-[500px] object-cover rounded-md"
                        />
                    </div>

                    <div className="w-full lg:w-1/2 mt-5">

                        <h3 className="text-2xl font-bold">
                            {product.name}
                        </h3>

                        <p id="product_id" className="text-gray-600 mt-1">
                            {product._id}
                        </p>

                        <hr className="my-4" />

                        <div className="relative text-yellow-400 text-xl rating-outer inline-block">
        
                            <div className="text-gray-300">
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>

                            <div className="absolute top-0 left-0 whitespace-nowrap overflow-hidden text-yellow-400 rating-inner" style={{ width: `${product.ratings/5*100}%` }}>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </div>
                        </div>

                        <hr className="my-4" />

                        <p id="product_price" className="text-3xl font-semibold text-gray-800">
                            { new Intl.NumberFormat("en-IN", {
                                style: "currency",
                                currency: "INR"
                                }).format(product.price * 89.96)
                            }
                        </p>

                        <div className="flex items-center justify-center gap-3 mt-3">
                            <button className="bg-red-500 text-white px-3 py-2 rounded minus cursor-pointer" onClick={decreaseQty}>-</button>

                            <input
                                type="number"
                                readOnly
                                value={qty}
                                className="w-16 text-center border rounded py-2"
                            />

                            <button className="bg-blue-600 text-white px-3 py-2 rounded plus cursor-pointer" onClick={increaseQty}>+</button>

                            <button
                                type="button"
                                id="cart_btn"
                                className="bg-orange-500 text-white px-5 py-2 rounded cursor-pointer disabled:bg-orange-300 disabled:cursor-not-allowed"
                                onClick={addToCart}
                                disabled={product.stock == 0}
                            >
                                Add to Cart
                            </button>
                        </div>

                        <hr className="my-4" />

                    
                        <p className="text-lg">
                            Status:{" "}
                            <span id="stock_status" className={`font-semibold ml-2 ${
      product.stock > 0 ? "text-green-600" : "text-red-600"
    }`}>
                                {product.stock > 0 ? "In Stock" : "Out of Stock"}
                            </span>
                        </p>

                        <hr className="my-4" />

                        <h4 className="text-xl font-semibold mt-2">Description:</h4>

                        <p className="text-gray-700 mt-1">
                            {product.description}
                        </p>

                        <hr className="my-4" />

                        <p id="product_seller" className="mb-3">
                            Sold by: <strong>{product.seller}</strong>
                        </p>

                    </div>

                </div>
        </div>


}