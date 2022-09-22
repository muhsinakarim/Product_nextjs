import { useState,FunctionComponent } from "react";
import Link from 'next/link';
import { FaWindows } from "react-icons/fa";
import { Router, useRouter } from "next/router";

const ProductEntry:FunctionComponent=()=>{
    //const route=useRouter()
    const [value,setValue]=useState({
        productName:"",
        productDescription:"",
        productPrice:""
    })

    const submitHandler=async (event: React.MouseEvent<HTMLButtonElement>):Promise<void>=>{
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
        //route.reload(window.location.pathname)
    }


    const productNameHandler=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue({...value,productName:event.target.value});
    }

    const productDescriptionHandler=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue({...value,productDescription:event.target.value});
    }

    const productPriceHandler=(event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue({...value,productPrice:event.target.value});
    }
    return(
        
            <form action="/add-product-here" method="post">
            <div className=" bg-yellow-300 rounded-lg w-full p-10">
                <h1 className="font-bold text-2xl text-center ">Enter new product</h1>
                <br></br>
                <br></br>
             <div className="flex flex-col items-center">
                <div className="flex items-center  mr-5">
                    <label htmlFor="productName" className=" font-semibold " >Product Name : </label>
                    <input type="text" className="rounded " id="productName" name="productName" onChange={productNameHandler} required/>
                </div>
                <br></br>
                <div className="flex items-center mr-5">
                    <label htmlFor="productDescription" className="font-semibold ">Description : </label>
                    <input type="text" className="rounded text-black  " id="productDescription" name="productDescription" onChange={productDescriptionHandler} required/>
                </div>
                <br></br>
                <div className="flex items-center mr-5">
                    <label htmlFor="productPrice" className="font-semibold ">Price : </label>
                    <input type="text" className="rounded " id="productPrice" name="productPrice" onChange={productPriceHandler} required/>
                </div>
                <br></br>
                {/* <SubmitButton/> */}
                <div className="flex gap-2">
                <button type="submit" className="bg-gray-700 p-2 rounded font-bold text-yellow-300" onClick={submitHandler}>Submit</button>
                <button type="button" className="bg-gray-700 p-2 rounded font-bold text-yellow-300"><Link href="/DetailsPage">Product details</Link></button>
                </div>
                
             </div>
            </div>
            </form>
       
    )
}
export default ProductEntry;