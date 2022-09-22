import Head from 'next/head'
import { useState ,FunctionComponent} from 'react';
import Header from '../components/Header';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import ProductEntry from '../components/ProductEntry';
import { useEffect } from 'react';
import Footer from '../components/Footer';


const Home:FunctionComponent=()=> { 
  return (
  <div className="flex flex-col min-h-screen  bg-gray-700">
      <Head>
        <title>Bunchofcoconutcomics</title>
        <link rel="icon" href="/favicon.ico" />
       </Head>
       <Header/> 
       <br></br>
       <br></br>
       <div >
          <div className='w-[90%] xl:mx-20 xl:my-12 sm:mx-20 sm:my-12  mx-auto md:items-center md:mx-20 md:my-12 '>
            <ProductEntry/>
          </div> 
          {/* <div className='w-2/4 my-4 md:w-5/6 sm:w-5/6 w-full 2xl:w-5/6'>
            <ProductDetails/>
            <br></br>
          </div> */}
          <div className='fixed w-full bottom-[0%]'>
          <Footer/>
          </div>
          
       </div>
  </div>
)
}
export default Home;