import {render} from "@testing-library/react";
import Home from "../../pages/index";

describe("index page tests", () => {
    it("should render the UI correctly",() =>{
        expect(render(<Home />).asFragment()).toMatchSnapshot();
    });
});