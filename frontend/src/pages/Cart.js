import { Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";

export default function Cart({cartItems , setCartItems}) {

   function increaseQty(item){
        if (item.product.stock == item.qty){
            return;
        }
        const updatedItems = cartItems.map((i)=>{
            if(i.product._id == item.product._id){
                i.qty++;
            }
            return i;
        })
        setCartItems(updatedItems)
    }

   function decreaseQty(item){
        if(item.qty > 1){
           const updatedItems = cartItems.map((i)=>{
            if(i.product._id == item.product._id){
                i.qty--;
            }
            return i;
          })
          setCartItems(updatedItems)
        }
    }
    
    function removeItem(item){
      const updatedItems = cartItems.filter((i)=>{
            if(i.product._id !== item.product._id){
                return true;
            }
        })
        setCartItems(updatedItems)  
    }

    return     <div className="w-full flex justify-center mt-20">
                    <div className="w-[92%] md:w-[86%] lg:w-[78%] max-w-screen-xl mt-10">

                        <h2 className="text-3xl font-semibold text-center mb-10">
                            Your Cart: <span className="font-bold">{cartItems.length} items</span>
                        </h2>

                        <div className="flex flex-col lg:flex-row items-start gap-8">

                        <div className="w-full lg:w-2/3">
                            {cartItems.map((item)=> 
                                (<Fragment>
                                    <hr className="border-t border-gray-200 mb-6" />

                                    <div className="flex flex-wrap  justify-center object-cover gap-4 pb-8">

                                    <div className="flex-shrink-0 pl-2">
                                        <img
                                        src={item.product.images[0].image}
                                        alt={item.product.name}
                                        className="h-[100px] w-[70px] object-contain rounded-sm"
                                        />
                                    </div>

                                    <div className="flex-1 text-center min-w-[200px]">
                                        <Link to={'/product/'+item.product._id}><p className="mx-auto text-gray-700 leading-6 hover:underline" style={{ maxWidth: 420 }}>
                                           {item.product.name}
                                        </p></Link>
                                    </div>

                                    <div className="w-full sm:w-36 text-center">
                                        <p className="text-xl font-semibold text-[#f59e0b]">
                                            { new Intl.NumberFormat("en-IN", {
                                                style: "currency",
                                                currency: "INR"
                                                }).format(item.product.price * 89.96)
                                            }
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">

                                        <div className="flex items-center gap-3 ">
                                        <button
                                            aria-label="decrease"
                                            className="flex items-center justify-center h-8 w-8 rounded-md bg-red-500 text-white shadow-sm cursor-pointer"
                                            onClick={()=>decreaseQty(item)}

                                        >
                                            -
                                        </button>

                                        <input
                                            readOnly
                                            value={item.qty}
                                            className="w-12 h-8 text-center border rounded-md"
                                        />

                                        <button
                                            aria-label="increase"
                                            className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white shadow-sm cursor-pointer"
                                            onClick={()=>increaseQty(item)}
                                        >
                                            +
                                        </button>
                                        </div>

                                        <button
                                            aria-label="delete"
                                            className="h-8 w-8 rounded-md bg-red-500 text-white flex items-center justify-center shadow-sm cursor-pointer"
                                            onClick={()=>removeItem(item)}
                                        >
                                            <i className="fa fa-trash" />
                                        </button>

                                    </div>
                                    </div>
                                    
                                    <hr className="border-t border-gray-200 mt-4" />
                                </Fragment>)
                            )}
                        </div>

                        <aside className="w-full lg:w-1/3 flex justify-center lg:justify-end lg:ml-30" >
                            <div className="w-full max-w-md border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
                            <h3 className="text-2xl font-semibold text-center mb-4">Order Summary</h3>

                            <div className="border-t border-gray-100 mb-4" />

                            <div className="flex justify-between py-2">
                                <span className="text-gray-700">Subtotal:</span>
                                <span className="font-semibold">1 (Units)</span>
                            </div>

                            <div className="flex justify-between py-2">
                                <span className="text-gray-700">Est. total:</span>
                                <span className="font-semibold">$245.67</span>
                            </div>

                            <div className="border-t border-gray-100 my-4" />

                            <button
                                id="checkout_btn"
                                className="w-full bg-[#f59e0b] hover:bg-[#f3a33b] text-white py-3 rounded-full text-lg shadow cursor-pointer"
                            >
                                Place Order
                            </button>
                            </div>
                        </aside>
                        </div>

                    </div>
               </div>

}