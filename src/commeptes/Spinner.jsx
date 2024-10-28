// components/Spinner.jsx
import React from 'react';

export const Spinner = ({ size = 'default' }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        default: 'w-6 h-6',
        lg: 'w-8 h-8'
    };

    return (
        <div className="flex justify-center">
            <div className={`${sizeClasses[size]} border-2 border-white border-t-transparent rounded-full animate-spin`}></div>
        </div>
    );
};

export default Spinner;