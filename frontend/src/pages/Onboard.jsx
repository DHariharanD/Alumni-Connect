import React from 'react';

const Onboard = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="flex justify-center mb-8">
                <img src="https://pesce.ac.in/img/pes%20logo%201.svg" alt="Logo" className="h-20" />
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to PESCE Alumni Portal</h1>
                <br />
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">New to the portal?</h2>
                    <h2 className="text-2xl font-semibold text-blue-500">
                        <a href="/register" className="hover:underline">Register</a>
                    </h2>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-2">Already have an account?</h2>
                    <h2 className="text-2xl font-semibold text-blue-500">
                        <a href="/login" className="hover:underline">Login</a>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Onboard;
