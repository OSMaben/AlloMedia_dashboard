// src/pages/Order.jsx
import React from "react";
import OrderStatus from "../components/OrderStatus";

const Order = () => {
    const orderId = "YOUR_ORDER_ID_HERE"; // Replace this with the actual order ID you want to track

    return (
        <div>
            <h1>Track Your Order</h1>
            <OrderStatus orderId={orderId} />
        </div>
    );
};

export default Order;
