import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className="shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="products mt-4">Order Page</div>
                    </div>
                    <div className="col-lg-3">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
