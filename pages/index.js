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
            <ProductDetails/>
            <br></br>
        </div>
        <div className='w-2/4 mx-20 my-12  '>
          <ProductEntry/>
        </div>
       </div>
</div>
)
}