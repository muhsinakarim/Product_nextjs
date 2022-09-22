import Head from "next/head";
import {FunctionComponent} from "react";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import ProductDetails from "../src/components/ProductDetails";

const DetailsPage: FunctionComponent= ()=>{
        return(
            <div className="flex flex-col min-h-screen  bg-gray-700">
                     <Header></Header>
                     <br></br>
                     <div className="mt=10">
                     <ProductDetails></ProductDetails>
                     <div className="w-full bottom-[0%] ">
                     <Footer/>
                     </div>
                     
                     </div>
                    
            </div>
        )
}

export default DetailsPage;