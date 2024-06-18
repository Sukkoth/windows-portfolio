import { useEffect, useState } from "react";

function Network() {
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    const onlineCheck = () => {
      console.log("offline");
      setOnlineStatus(false);
    };

    const offlineCheck = () => {
      console.log("online");
      setOnlineStatus(true);
    };

    window.addEventListener("offline", offlineCheck);

    window.addEventListener("online", onlineCheck);

    return () => {
      window.removeEventListener("offline", offlineCheck);

      window.removeEventListener("online", onlineCheck);
    };
  }, []);

  return (
    <>
      <div
        className={`flex relative overflow-hidden before:absolute before:content-["🚫"] before:bottom-1 before:-right-1 before:text-sm  ${
          !onlineStatus ? "before:block" : "before:hidden"
        }`}
      >
        <img
          src='https://img.icons8.com/?size=100&id=16109&format=png&color=ffffff'
          alt=''
          className='size-5'
        />
        <img
          src='https://img.icons8.com/?size=100&id=aly31hIgVdwr&format=png&color=ffffff'
          alt=''
          className='size-5 ms-1'
        />
      </div>
    </>
  );
}

export default Network;
