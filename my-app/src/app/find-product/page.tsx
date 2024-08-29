"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FindProduct: React.FC = () => {
  const router = useRouter();
  const productName = "Amazon Echo Dot (5th Gen) | Smart speaker with Bigger sound, Motion Detection, Temperature Sensor, Alexa and Bluetooth | Black";
  const [quantity, setQuantity] = useState<number>(1);
  const pricePerUnit = 5499;
  const weight = "N/A";
  const [cartCount, setCartCount] = useState<number>(0);
  const [isMagnified, setIsMagnified] = useState<boolean>(false);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    alert(`${quantity} ${productName}(s) added to cart!`);
  };

  const handleBackToSearch = () => {
    router.push('/w-mart');
  };

  const toggleMagnify = () => {
    setIsMagnified(!isMagnified);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <header className="bg-blue-600 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">W-Mart</h1>
          <div className="flex items-center space-x-4">
            <input 
              type="text" 
              placeholder="Search for products..." 
              className="border rounded p-2"
            />
            <button onClick={handleBackToSearch} className="bg-white text-blue-600 px-4 py-2 rounded">
              Back
            </button>
            <button className="bg-white text-blue-600 px-4 py-2 rounded">
              Your Cart ({cartCount})
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4 flex-grow">
        <div className="flex flex-col md:flex-row items-start">
          <div className="md:w-1/4 p-4 border rounded bg-gray-100 mr-4">
            <h3 className="font-bold mb-2 text-red-600">Nearby Items</h3> {/* Nearby items text in red */}
            <ul className="list-disc list-inside text-gray-700">
              <li>Google Nest Mini</li>
              <li>Apple HomePod mini</li>
              <li>Amazon Echo Show 5</li>
              <li>Bose Home Speaker 300</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-start relative">
            <Image 
              src="/alexa.jpeg" 
              alt={productName} 
              width={isMagnified ? 800 : 400} 
              height={isMagnified ? 800 : 400} 
              className={`rounded-lg shadow-lg transition-transform duration-300 ${isMagnified ? 'scale-125' : ''}`} 
            />
            <div className="absolute top-2 right-2 flex space-x-2">
              <button 
                className="bg-gray-200 p-2 rounded-full" 
                onClick={toggleMagnify}
              >
                🔍
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                ❤️
              </button>
            </div>
          </div>
          <div className="md:w-1/4 md:pl-4 mt-6 md:mt-0 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-2 text-black">Amazon Alexa</h2> {/* Title changed to Amazon Alexa in black text */}
            <p className="text-sm text-gray-500 mb-4">{weight}</p>
            <div className="flex justify-center md:justify-start items-center mb-4">
              <span className="text-3xl font-bold text-black">₹{pricePerUnit.toLocaleString()}</span> {/* Price in black text */}
              <span className="ml-2 text-sm text-gray-500">Price when purchased online</span>
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="mr-2 text-black">Quantity:</label> {/* Quantity label in black text */}
              <input 
                type="number" 
                id="quantity" 
                value={quantity} 
                onChange={handleQuantityChange} 
                min="1" 
                className="border rounded p-2 w-16 text-center text-black"
              />
            </div>
            <button 
              onClick={handleAddToCart} 
              className="bg-blue-600 text-white px-6 py-2 rounded-full mb-4"
            >
              Add to cart
            </button>
            <div className="border-t border-gray-200 pt-4">
              <h3 className="font-bold mb-2 text-black">How do you want your item?</h3> {/* How do you want your item? in black text */}
              <div className="flex justify-center md:justify-start space-x-4">
                <div className="border rounded p-4 text-center">
                  <p className="font-bold text-gray-400">Shipping</p>
                  <p className="text-sm text-gray-400">Arrives Sep 6</p> {/* Shipping Arrives Sep 6 in grey */}
                  <p className="text-sm text-gray-400">Free</p>
                </div>
                <div className="border rounded p-4 text-center text-gray-400">
                  <p className="font-bold">Pickup</p>
                  <p className="text-sm">Not available</p>
                </div>
                <div className="border rounded p-4 text-center text-gray-400">
                  <p className="font-bold">Delivery</p>
                  <p className="text-sm">Not available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-gray-200 p-4 rounded-lg">
          <h3 className="text-xl font-bold mb-2 text-black">Product Description</h3> {/* Product Description in black text */}
          <p className="text-gray-700">
            Amazon Echo Dot (5th Gen) is a smart speaker with improved sound quality, motion detection, temperature sensor, and built-in Alexa. It is perfect for controlling your smart home devices, streaming music, and getting updates on the weather and news.
          </p>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2 text-black">Customer Reviews</h3> {/* Customer Reviews in black text */}
          <p className="text-gray-700">★★★★☆ (4.5/5 based on 500 reviews)</p>
          <p className="text-gray-700">Fantastic sound quality and super convenient for a smart home!</p>
        </div>
      </main>
    </div>
  );
};

export default FindProduct;