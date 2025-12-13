import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Search(){
    const [keyword,setKeyword] = useState("")
    const navigate = useNavigate();

    function searchHandler(){
        navigate("/search?keyword="+keyword)
    }

    return <div className="flex">
                <input
                    type="text"
                    id="search_field"
                    onBlur={searchHandler}
                    onChange={(e)=> setKeyword(e.target.value)} //1 o //2 op //3 opp //4 oppo keyword=oppo
                    className="flex-grow h-10 px-4 border rounded-l outline-none bg-white"
                    placeholder="Enter Product Name ..."
                />
                <button
                    id="search_btn"
                    className="bg-[#febd69] text-black px-4 rounded-r cursor-pointer"
                    onClick={searchHandler}
                >
                    <i className="fa fa-search"></i>
                </button>
            </div>
}
