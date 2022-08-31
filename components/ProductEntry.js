import SubmitButton from "./SubmitButton";

export default function ProductEntry(){
    return(
        <div className="h-5/6 bg-yellow-300 p-10 rounded-lg py-10  my-5">
            <h1 className="font-bold text-2xl text-center ">Enter new product</h1>
            <br></br>
            <br></br>
            <form action="/add-product-here" method="post">
                <div className="flex flex-col items-center">
                <div className="flex items-center flex-l mr-5">
                <label for="productName" className="font-semibold">Product Name : </label>
                <input type="text" className="rounded w-48 " id="productName" name="productName"/>
                </div>
               <br></br>
                <div className="flex items-center flex-l mr-5">
                <label for="productDescription" className="font-semibold">Description : </label>
                <input type="text" className="rounded text-black p-8 " id="productDescription" name="productDescription"/>
                </div>
                <br></br>
                <div className="flex items-center flex-l mr-5">
                <label for="productPrice" className="font-semibold">Price : </label>
                <input type="text" className="rounded w-48" id="productPrice" name="productPrice"/>
                </div>
                <br></br>
                <SubmitButton/>
                </div>
            </form>
        </div>
    )
}