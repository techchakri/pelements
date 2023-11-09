import React from "react";
import Header from "./Header"

const Body = () => {
    return <div>
        <Header />
        <div className=" bg-gray-700 w-full">
            <div className="container mx-auto p-9">
                <div className="flex justify-center items-center w-full gap-28">
                <div className="text-white text-xl">Namaste React Let's Build React Apps</div>
                <img className="h-60"  src="https://i.pinimg.com/originals/50/8f/1f/508f1fc5c0106e025261a5596e3ba2ee.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="mt-16">
            <div className="container mx-auto">
                <div>
                <h1 className="font-semibold text-center text-3xl">Our Best Courses</h1>
                </div>
                <div>
                </div>
            </div>
        </div>
    </div>
}

export default Body;