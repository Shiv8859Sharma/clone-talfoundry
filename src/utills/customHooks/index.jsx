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

    useEffect(() => {
        const handleConnectionChange = (e) => {
            console.log(e.type, "e");
            if(e.type === 'online'){
                navigate(-1);
            }else{
                navigate('/network-error');
            }
        };

        window.addEventListener('online', handleConnectionChange);
        window.addEventListener('offline', handleConnectionChange);


        return () => {
            window.removeEventListener('online', handleConnectionChange);
            window.removeEventListener('offline', handleConnectionChange);

        };
    }, [navigate]);
    
    return isConnected;
};

export default useNetworkStatus;
