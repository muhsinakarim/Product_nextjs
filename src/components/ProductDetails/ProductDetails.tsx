import { useEffect, useState ,FunctionComponent} from "react";
import { ProductType } from "../../types/ProductType";


const ProductDetails:FunctionComponent<ProductType> = () =>{
    const [details,setDetails]=useState<Array<ProductType>>()
    const[isLoading,setIsLoading]=useState<boolean>(false)
    useEffect(()=>{
        setIsLoading(true)
        const send = async()=>{
            const response=await fetch('http://localhost:3000/product/details');
            const responseData=await response.json();
            console.log(responseData)
            setDetails(responseData)
            setIsLoading(false)
        }
        send();
    },[])

    return(
        <div>
            {!isLoading && details && details.map((element:ProductType)=>{
                return (
                    <div className="relative w-[90%] mx-auto p-5 bg-white rounded-md box-border flex-col mb-5 mx-20 w-full">
                    <h2 className="mb-2 text-black font-bold font-xl">Product No: {element.prodId}</h2>
                    <p className="mb-2 font-normal text-gray">Product Name: {element.productName}</p>
                    <p className="mb-2  font-normal text-gray">Product Description: {element.productDescription}</p>
                    <p className="mb-3 font-normal text-gray">Product Price: {element.productPrice}</p> 
                    <a href="#" className="absolute bottom-2 right-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center bg-yellow-300 rounded-md p-5">✏️</a> 
                    </div>
                )
            })}
         
          
        </div>
    );
}

export default ProductDetails