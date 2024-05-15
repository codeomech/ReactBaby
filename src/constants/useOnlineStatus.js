import { useEffect, useState } from "react";

// For writing a custom hooks you should know what is the input you want and what is your desired output from that hook
const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(false)
        })
        window.addEventListener('online', () => {
            setOnlineStatus(true)
        })
    },
        []);

    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;