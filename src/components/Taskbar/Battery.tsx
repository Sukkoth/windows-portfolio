import { useEffect, useState } from "react";

function Battery() {
  const [charging, setCharging] = useState<boolean>(false);
  const [batteryLevel, setBatteryLevel] = useState<number>(100);

  useEffect(() => {
    navigator
      // @ts-expect-error //this is because most browsers do not support this
      .getBattery()
      // @ts-expect-error //this is because most browsers do not support this
      .then((battery) => {
        function updateAllBatteryInfo() {
          updateChargeInfo();
          updateLevelInfo();
        }

        updateAllBatteryInfo();

        battery.addEventListener("chargingchange", () => {
          updateChargeInfo();
        });

        function updateChargeInfo() {
          try {
            setCharging(battery.charging);
          } catch (error) {
            console.error("Error updating charging info:", error);
          }
        }

        battery.addEventListener("levelchange", () => {
          updateLevelInfo();
        });

        function updateLevelInfo() {
          try {
            setBatteryLevel(battery.level * 100);
          } catch (error) {
            console.error("Error updating battery level:", error);
          }
        }
      })
      .catch(() => {
        console.error("Error getting battery information");
      });
  }, []);

  return (
    <>
      <div
        className={`w-4 h-[11px] bg-stone-800 rounded-[2px] relative after:absolute after:content-[" "] after:top-[1.5px] after:h-[6px] after:w-[3px] after:bg-white after:rounded-r-sm border border-white after:border after:border-white after:border-l-0 after:-right-[3px] p-[1px]`}
      >
        {charging && (
          <span className='absolute -top-[6px] text-sm -left-[2px] bottom-10'>
            ⚡
          </span>
        )}
        <div
          style={{
            width: `${batteryLevel}%`,
          }}
          className={`h-full bg-white`}
        ></div>
      </div>
    </>
  );
}

export default Battery;
