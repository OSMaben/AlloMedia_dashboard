// src/components/OrderStatus.jsx
import { useEffect, useState } from "react";
import axios from "axios";

const OrderStatus = ({ orderId }) => {
    const [status, setStatus] = useState("pending");
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrderStatus = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/v1/client/track/${orderId}`);
                setStatus(response.data.status); // Set the order status
            } catch (err) {
                setError(err.response ? err.response.data.error : "Error fetching order status"); // Handle errors
            }
        };

        fetchOrderStatus();
    }, [orderId]);

    if (error) {
        return <div>Error: {error}</div>; // Display error message if any
    }

    return <div>Order Status: {status}</div>; // Display order status
};

export default OrderStatus;
