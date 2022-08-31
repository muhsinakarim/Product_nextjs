// export default function ProductDetails()
const ProductDetails = (props) =>{
    return(
        <div className="relative mx-16  p-5 bg-white rounded-md box-border flex-col">
            <h2 className="mb-2 text-black font-bold font-xl">
Product No: {props.product.prodId}
            </h2>
            <p className="mb-2 font-normal text-gray">
                Product Name: {props.product.name}
            </p>
            <p className="mb-2 font-normal text-gray">
                Product Description: {props.product.description}
            </p>
            <p className="mb-3 font-normal text-gray">
                Product Price: {props.product.price}
            </p>
            <a href="#" className="absolute bottom-2 right-2 inline-flex items-center py-2 px-3 text-sm font-medium text-center bg-yellow-300 rounded-md p-5">
            ✏️
            </a>
        </div>
    );
}

export default ProductDetails