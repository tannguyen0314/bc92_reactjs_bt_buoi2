import { useState } from "react";

export default function Glass() {
const [glasses] = useState([
        { id: 1, color: "Brown", hex: "#A52A2A", imgUrl: "./images/v1.png" },
        { id: 2, color: "Flag", hex: "#002868", imgUrl: "./images/v2.png" },
        { id: 3, color: "Purple", hex: "#800080", imgUrl: "./images/v3.png" },
        { id: 4, color: "Red", hex: "#FF0000", imgUrl: "./images/v4.png" },
        { id: 5, color: "White", hex: "#FFFFFF", imgUrl: "./images/v5.png" },
        { id: 6, color: "W-Purple", hex: "#D8BFD8", imgUrl: "./images/v6.png" },
        { id: 7, color: "Orange", hex: "#FFA500", imgUrl: "./images/v7.png" },
        { id: 8, color: "Brown Alt", hex: "#8B4513", imgUrl: "./images/v8.png" },
        { id: 9, color: "Blue", hex: "#0000FF", imgUrl: "./images/v9.png" }
    ]);

    const [selectedImg, setSelectedImg] = useState("./images/v1.png");

    return (
        <div className="p-10 bg-gray-100 min-h-screen">
            <h1 className="text-center text-3xl font-bold mb-10">ỨNG DỤNG THỬ KÍNH</h1>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                

                <div className="relative flex justify-center items-start">

                    <div className="relative w-[200px]">
                        <img 
                            src="./images/model.jpg" 
                            alt="Model" 
                            className="w-full block"
                        />
                        
                        <img 
                            src={selectedImg} 
                            alt="Glasses Overlay" 
                            className="absolute transition-all duration-300 ease-in-out"
                            style={{
                                top: "35%", 
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "40%",
                                zIndex:10,
                            }}
                        />


                        <div className="absolute bottom-0 left-0 right-0 bg-orange-400/70 p-4 text-white">
                            <h3 className="font-bold">Kính Thử</h3>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md flex flex-wrap gap-4 h-fit">
                    {glasses.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setSelectedImg(item.imgUrl)}
                            className="w-24 h-12 border rounded hover:border-blue-500 transition-all overflow-hidden flex items-center justify-center bg-gray-50"
                        >
                            <img src={item.imgUrl} alt={item.color} className="w-20" />
                        </button>
                    ))}
                </div>

            </div>
        </div>
    );
}