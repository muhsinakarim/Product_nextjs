import{ render } from "@testing-library/react";
import ProductDetails from "./ProductDetails";
import {ProductType} from "../../types/ProductType";

describe("Product Details component tests", ()=> {
    it("should render the UI correctly",() => {
        const mockDetails:ProductType = {
            prodId:1,
            productName:"Simpson",
            productDescription:"Toy",
            productPrice:200,
        
        };
        expect(render(<ProductDetails{...mockDetails}/>).asFragment()).toMatchSnapshot();

    });
});