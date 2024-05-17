
import  { useEffect, useState } from "react";

const TextTypewriter = ({ text, delay, infinite }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [returnText, setReturnText] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!returnText && currentIndex < text[textIndex].length) {
                setCurrentText(prevText => prevText + text[textIndex][currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            } else if (returnText && currentIndex > 0) {
                setCurrentText(prevText => prevText.slice(0, -1));
                setCurrentIndex(prevIndex => prevIndex - 1);
            } else if (infinite) {
                setTextIndex(prevIndex => (prevIndex + 1) % text.length);
                setReturnText(prevReturnText => !prevReturnText);
            }
        }, currentIndex < text[textIndex].length ? delay : delay * 4);

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite, returnText, text, textIndex]);

    return currentText;
};
export default TextTypewriter