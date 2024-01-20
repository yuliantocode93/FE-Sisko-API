import React, { useContext, useState } from "react";
import Delivery from "./dropdown/DropdownDelivery";
import axios from "axios";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const DeliveryCard = () => {
  const [orderData, setOrderData] = useState({
    order_json:
      '[{"product_id":25133,"product_name":"tas 1","product_img":"https://demo.sistemtoko.com/img/user/demo/product/kdkxol-mxnjcy-23-png-png.png","product_price":"100.000","product_qty":1,"product_weight":100,"product_stock":84}]',
    payment_method: "COD",
    shipping_method: "JNE",
    shipping_cost: 50000,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://demo.sistemtoko.com/public/demo/web_order", orderData, {
        headers: {
          "Content-Type": "application/json",
          "X-Requested-WithXML": "HttpRequest",
        },
      });

      console.log("Order submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { cart, total, clearCart } = useContext(CartContext);
  return (
    <div className="w-[80%] mt-10 bg-white  flex mx-auto rounded rounded-lg border border-pink-200 h-full mb-[20px]  hover:shadow-3xl px-7 pt-5">
      <div className="w-full h-full">
        <div className=" px-5 items-center flex  w-[100%] bg-gray-200 h-[30px] text-semibold">Pilih Pengiriman</div>
        <Delivery />
        <div className=" px-5 items-center flex my-5  w-[100%] bg-gray-200 h-[30px]">Detail Order</div>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="order_json" value={orderData.order_json} onChange={handleChange} />
          <input type="hidden" name="permalink" value={orderData.permalink} onChange={handleChange} />
          <input type="hidden" name="customer_email" value={orderData.customer_email} onChange={handleChange} />
          <div className="flex flex-col gap-y-2 h-[300px] overflow-y-auto overflow-x-hidden  border-b">
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} />;
            })}
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-col-2 xl-grid-cols-2 m-[20px] px-5 py-5">
            <div className="text-2xl text-semibold">Total : Rp. {total} </div>
            <div className=" flex justify-end ">
              {" "}
              <Link to="/invoice">
                <button type="submit" className="bg-primary  text-white rounded rounded-lg hover:bg-red-200 transition duration-300 px-5 py-2" onClick={clearCart}>
                  Submit Order
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeliveryCard;
