import Head from 'next/head'
import {FaFacebookF,FaInstagram,FaGoogle,FaRegEnvelope} from 'react-icons/fa';
import {MdLockOutline} from 'react-icons/md';
export default function Home() {
  return (
  <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-700">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <main className="flex flex-col items-center justify-center w-full flex-l px-20 text-center"> 
      <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
        <div className='w-3/5 p-5 bg-gray-50 rounded-l-2xl'>
          <div className='text-left font-bold'> 
            <span className='text-gray-700'>Bunchof</span><span className='text-yellow-400'>coconut</span><span className='text-gray-700'>comics</span>
          </div>
          <div className='p-8'>
            <h2 className='text-3xl font-bold text-gray-700 py-2'>Sign in to account</h2>
            <div className='border-2 w-10 border-gray-700 bg-gray-700 inline-block mb-2 '></div>
            <div className='flex justify-center'>
              <a href='#' className='shadow-sm border-1 border-gray-200 bg-white rounded-full p-3 mx-1 hover:bg-yellow-300'> 
                <FaFacebookF className='text-sm text-gray-700'/>
              </a>
              <a href='#' className='shadow-sm border-1 border-gray-200 bg-white rounded-full p-3 mx-1 hover:bg-yellow-300'> 
                <FaInstagram className='text-sm text-gray-700'/>
              </a>
              <a href='#' className='shadow-sm border-1 border-gray-200 bg-white rounded-full p-3 mx-1 hover:bg-yellow-300'> 
                <FaGoogle className='text-sm text-gray-700'/>
              </a>
              </div>
          </div>
          <p className='text-gray-700 mb-5'>or use your email account</p>
            <div className='flex flex-col items-center mb-2'>
              <div className='bg-gray-100 w-64 p-2 flex items-center rounded-sm  mb-3'>
              <FaRegEnvelope className='text-gray-700 mr-2'/>
              <input type="email" name='email' placeholder='Email'className='bg-gray-100 outline-none text-sm flex-l'
            />
              </div>
              <div className='bg-gray-100 w-64 p-2 flex items-center rounded-sm mb-4'>
                <MdLockOutline className='text-gray-700 mr-2'/>
                <input type="password" name='password' placeholder='Password'className='bg-gray-100 outline-none text-sm flex-l'/>
              </div>
            </div>
            <a href="a" className="border-2 hover:bg-white rounded-full px-12 py-2 inline-block hover:text-gray-700 font-semibold border-gray-700 bg-gray-700 text-yellow-300">Log In</a>
          {/* <p>Sign in section</p> */}
        </div> {/*sign in section*/}
        <div className='bg-yellow-300 rounded-r-xl px-12 py-36 w-2/5'>
          <h2 className='text-gray-700 text-3xl font-bold mb-2'>Hello Friend!</h2>
          <div className='border-2 bg-gray-700 border-gray-700 w-10 inline-block mb-2'></div>
          <p className='font-sans mb-10'>Fill up personal information and start journey with us</p>
          <p></p>
          <a href="a" className="border-2 hover:bg-white rounded-full px-12 py-2 inline-block hover:text-gray-700 font-semibold border-gray-700 bg-gray-700 text-yellow-300">Sign Up</a>
          {/* <p>Sign up section</p> */}
        </div>{/*sign up section*/}
      </div>
    </main>
  </div>
  )
}  
