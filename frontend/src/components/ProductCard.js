import {Link} from 'react-router-dom';

export default function ProductCard({product}){

    const rating = Number(product.ratings);
    const ratingWidth = (rating / 5) * 100 + "%";

    return <div className="border rounded p-4 shadow hover:shadow-lg">
                    <img
                        className="w-[220px] h-[260px] object-cover mx-auto"
                        src={product.images[0].image}
                        alt="product"
                    />

                    <div className="flex flex-col mt-3">
                                <h5 className="font-semibold mb-2">
                                    <Link to={'/product/'+product._id} className="hover:underline">{product.name}</Link>
                                </h5>

                                <div className="mt-auto">
                                        <div className="relative inline-block text-xl">

                                            <div className="text-gray-300">
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                                    <i className="fa-regular fa-star"></i>
                                            </div>

                                            <div
                                            className="absolute top-0 left-0 overflow-hidden text-yellow-400 whitespace-nowrap"
                                            style={{ width: ratingWidth }}
                                            >
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                            </div>

                                        </div>
                                </div>
                                <p className="text-lg font-semibold mt-2">
                                    { new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR"
                                        }).format(product.price * 89.96)
                                    }
                                </p> 

                                <Link to={'/product/'+product._id} className="mt-2 bg-orange-400 text-white text-center py-2 rounded" >View Details</Link>
                    </div>
           </div>

}