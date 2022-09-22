import { FunctionComponent } from "react";

const Footer: FunctionComponent=()=>{
    return(
        
<footer className="p-4  bg-yellow-300 w-full bottom-[0%]  shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-700 sm:text-center dark:text-gray-400">© 2022 <a href="http://localhost:3002/" className="hover:underline">Bunchofcoconutcomics™</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-700 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

    )
}
export default Footer;