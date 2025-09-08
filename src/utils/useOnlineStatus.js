import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleOnline = () => setStatus(true);
  const handleOffline = () => setStatus(false);

  useEffect(() => {
    window.addEventListener("online", () => handleOnline());
    window.addEventListener("offline", () => handleOffline());

    return () => {
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
    }
  }, []);

  return status;
};

export default useOnlineStatus;
