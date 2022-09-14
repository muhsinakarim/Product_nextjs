import { useState } from "react";
import SubmitButton from "./SubmitButton";
import Link from 'next/link';
import { FaWindows } from "react-icons/fa";
import { useRouter } from "next/router";

export default function ProductEntry(){
    const route=useRouter()
    const [value,setValue]=useState({
        productName:"",
        productDescription:"",
        productPrice:""
    })

    const submitHandler=async (event)=>{
        event.preventDefault()

        const response= await fetch("http://localhost:3000/product",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            productName:value.productName,
            productDescription:value.productDescription,
            productPrice:value.productPrice 
        })
        })
        route.reload(window.location.pathname)
    }


    const productNameHandler=(event)=>{
        setValue({...value,productName:event.target.value});
    }

    const productDescriptionHandler=(event)=>{
        setValue({...value,productDescription:event.target.value});
    }

    const productPriceHandler=(event)=>{
        setValue({...value,productPrice:event.target.value});
    }
    return(
        <div className="h-5/6 bg-yellow-300 p-10 rounded-lg">
            <h1 className="font-bold text-2xl text-center ">Enter new product</h1>
            <br></br>
            <br></br>
            <form action="/add-product-here" method="post">
                <div className="flex flex-col items-center">
                <div className="flex items-center flex-l mr-5">
                <label for="productName" className="mr-5 font-semibold">Product Name : </label>
                <input type="text" className="rounded w-64 " id="productName" name="productName" onChange={productNameHandler}/>
                </div>
               <br></br>
                <div className="flex items-center flex-l mr-5">
                <label for="productDescription" className="font-semibold mr-10">Description : </label>
                <input type="text" className="rounded text-black  w-64 " id="productDescription" name="productDescription" onChange={productDescriptionHandler}/>
                </div>
                <br></br>
                <div className="flex items-center flex-l mr-5">
                <label for="productPrice" className="font-semibold mr-20">Price : </label>
                <input type="text" className="rounded w-64" id="productPrice" name="productPrice" onChange={productPriceHandler}/>
                </div>
                <br></br>
                {/* <SubmitButton/> */}
                
                <button type="submit" className="bg-gray-700 p-2 rounded font-bold text-yellow-300 " onClick={submitHandler}>Submit</button>
                
                </div>
            </form>
        </div>
    )
}