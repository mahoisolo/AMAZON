import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import Order from './Order';
import "./order.css";
import { useStateValue } from './HomePage/Stateprovider';

function Orders() {
    const [{basket,user},dispatch]=useStateValue();
    const [Orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot((snapshot) => setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))))
        }
        else {
            setOrders([]);
        }
    }, [user]); 

    return (
        <div className='orders'>
            <h1>Your Orders</h1>
            <div className='orders__order'>
                {Orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    );
}

export default Orders;