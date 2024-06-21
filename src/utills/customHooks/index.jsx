import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useNetworkStatus = () => {
    const navigate = useNavigate();
    const [isConnected, setIsConnected] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => {
            setIsConnected(true);
        };

        const handleOffline = () => {
            setIsConnected(false);
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);
    let timerId = ''
    useEffect(() => {

        let type = ''
        const handleConnectionChange = (e) => {
            type = e.type
            if (e.type === 'online') {
                navigate('/');
            } else {
                navigate('/network-error');
            }
        };

        window.addEventListener('online', handleConnectionChange);
        window.addEventListener('offline', handleConnectionChange);
        
        clearTimeout(timerId);
        timerId =  setTimeout(() => {
            if (!type && (isConnected || navigator.onLine)) {
                navigate('/');
            }
        }, 1500)
       

        return () => {
            console.log("this is runnn return");
            window.removeEventListener('online', handleConnectionChange);
            window.removeEventListener('offline', handleConnectionChange);

        };
    }, [navigator.onLine]);
    return isConnected;
};

export default useNetworkStatus;
