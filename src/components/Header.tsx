import { FunctionComponent } from "react";

const Header: FunctionComponent=()=>{
    return(
        <div className='bg-yellow-300 h-[10%]  p-5  md:p-5 '>
            <span className="text-white font-bold text-xl  md:text-gray-700 "> <a href="http://localhost:3002/" >Bunchofcoconutcomics</a></span><span/>
        </div> 
    );
}
export default Header;