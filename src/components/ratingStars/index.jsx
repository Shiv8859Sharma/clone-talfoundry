import React from "react";

const RatingStars = ({ count = 0}) => {
    const getStarColor = (index) => {
        if (count >= index) {
            return "#108A00"; // Filled star color
        } else if (count > index - 1 && count < index) {
            return "#9ca3af"; // Partially filled star color
        } else {
            return "#9ca3af"; // Empty star color
        }
    };

    return (
        <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((num, index) => (
                <React.Fragment key={`rating-star-key-${index}`}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.87017 8C2.92517 7.755 2.82517 7.405 2.65017 7.23L1.43517 6.015C1.05517 5.635 0.905174 5.23 1.01517 4.88C1.13017 4.53 1.48517 4.29 2.01517 4.2L3.57517 3.94C3.80017 3.9 4.07517 3.7 4.18017 3.495L5.04017 1.77C5.29017 1.275 5.63017 1 6.00017 1C6.37017 1 6.71017 1.275 6.96017 1.77L7.82017 3.495C7.88517 3.625 8.02017 3.75 8.16517 3.835L2.78017 9.22C2.71017 9.29 2.59017 9.225 2.61017 9.125L2.87017 8Z" fill={getStarColor(index + 0.5)}></path>
                        <path d="M9.3499 7.22995C9.1699 7.40995 9.0699 7.75495 9.1299 7.99995L9.4749 9.50495C9.6199 10.1299 9.5299 10.5999 9.2199 10.8249C9.0949 10.9149 8.9449 10.9599 8.7699 10.9599C8.5149 10.9599 8.2149 10.8649 7.8849 10.6699L6.4199 9.79995C6.1899 9.66495 5.8099 9.66495 5.5799 9.79995L4.1149 10.6699C3.5599 10.9949 3.0849 11.0499 2.7799 10.8249C2.6649 10.7399 2.5799 10.6249 2.5249 10.4749L8.6049 4.39495C8.8349 4.16495 9.1599 4.05995 9.4749 4.11495L9.9799 4.19995C10.5099 4.28995 10.8649 4.52995 10.9799 4.87995C11.0899 5.22995 10.9399 5.63495 10.5599 6.01495L9.3499 7.22995Z" fill={getStarColor(index + 1)}></path>
                    </svg>
                </React.Fragment>
            ))}
        </div>
    );
};

export default RatingStars;