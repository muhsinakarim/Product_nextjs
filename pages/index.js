import Head from 'next/head'
import { useState } from 'react';
import {FaFacebookF,FaInstagram,FaGoogle,FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails';
import ProductEntry from '../components/ProductEntry';
import SubmitButton from '../components/SubmitButton';
import { useEffect } from 'react';
export default function Home() {



 const products=[//[products,setProducts]=useState(null);

//   useEffect(() => {

//     const sendRequest = async () => {
    
//       const response = await fetch("http://localhost:3000/product");

//       const responseData = await response.json();

//       console.log(responseData);
//       setProducts(responseData);
//       console.log(products)
      
//     };

//     sendRequest();

//   }, []);
  

  
  {
     prodId:1,
     productName:"Moss",
     productDescription:"Sticker",
     productPrice:299
   },
   {
    prodId:2,
    productName:"Lia",
    productDescription:"Sticker",
    productPrice:399
  
}
 ]
  
  return (
  <div className="flex flex-col min-h-screen  bg-gray-700">
      <Head>
        <title>Bunchofcoconutcomics</title>
        <link rel="icon" href="/favicon.ico" />
       </Head>
       <Header/> 
       <br></br>
       <br></br>
       <div className='flex flex-col lg:flex-row w-full'>
       <div className='w-2/4 my-4 md:w-5/6 sm:w-5/6 lg:w-full 2xl:w-5/6'>
       {/* <ProductDetails product={products[0]}/>
       <br></br>
       <ProductDetails product={products[1]}/>
       <br></br>
       <ProductDetails product={products[2]}/>
       <br></br>
       <ProductDetails product={products[3]}/> */}
      {products.map((product) =>  {

return(
 <ProductDetails

    key={product.prodId}

    id={product.prodId}

    name={product.productName}

  description={product.productDescription}

    price={product.productPrice}

    />
    


)

}
)
}
      <br></br>
      </div>
      <div className='w-2/4 mx-20 my-12  '>
        <ProductEntry/>
      </div>
      </div>
  
</div>
)
}