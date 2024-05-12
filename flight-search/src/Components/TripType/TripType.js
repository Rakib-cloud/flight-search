import React from 'react';

const TripType = () => {
    return (
        <div className="m-10 flex justify-center items-center">
            <div className="flex justify-between border border-slate-900 rounded">
                <div className="w-35 flex items-center justify-center  px-5">
                    <p className="text-sm font-bold">Round Trip</p>
                </div>
                <div className="bg-blue-950  w-35 flex items-center justify-center  px-5">
                    <p className="text-sm text-white font-bold">One Way</p>
                </div>
                <div className="w-35 flex items-center justify-center  px-5">
                    <p className="text-sm font-bold">Multi City</p>
                </div>
            </div>
        </div>
    );
};

export default TripType;