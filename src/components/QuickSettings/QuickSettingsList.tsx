import { useEffect, useState } from "react";
import QuickSettingItem from "./QuickSettingItem";

function QuickSettingsList() {
  const [isNightLightOn, setIsNightLightOn] = useState(false);

  useEffect(() => {
    if (isNightLightOn) {
      document.body.style.filter =
        "sepia(100%) hue-rotate(-30deg) saturate(150%)";
    } else {
      document.body.style.filter = "none";
    }
  }, [isNightLightOn]);

  const handleToggle = () => {
    setIsNightLightOn((prevState) => !prevState);
  };

  return (
    <div className='flex flex-wrap items-center justify-between gap-3 select-none'>
      <QuickSettingItem
        double
        imageUrl='https://img.icons8.com/?size=100&id=rOGbeYsOX8gR&format=png&color=ffffff'
        title='Network'
      />
      <QuickSettingItem
        double
        imageUrl='https://img.icons8.com/?size=100&id=17120&format=png&color=ffffff'
        title='Bluetooth'
      />
      <QuickSettingItem
        imageUrl='https://img.icons8.com/?size=100&id=17485&format=png&color=ffffff'
        title='Airplane Mode'
      />
      <QuickSettingItem
        imageUrl='https://img.icons8.com/?size=100&id=xHPnpsbsS16O&format=png&color=ffffff'
        title='Battery Saver'
      />
      <QuickSettingItem
        active={isNightLightOn}
        onClick={handleToggle}
        imageUrl='https://img.icons8.com/?size=100&id=82718&format=png&color=ffffff'
        title='Night Light'
      />
      <QuickSettingItem
        imageUrl='https://img.icons8.com/?size=100&id=OCXqgxuKRsRU&format=png&color=ffffff'
        title='Accessibility'
      />
    </div>
  );
}

export default QuickSettingsList;
