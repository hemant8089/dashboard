import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Toggle = ({
  userStatus,
  onToggle,
}: {
  userStatus: boolean;
  onToggle?: (toggled: boolean) => void;
}) => {
  const [toggled, setToggled] = useState(userStatus);

  useEffect(() => {
    setToggled(userStatus);
  }, [userStatus]);

  const handleToggle = () => {
    const newState = !toggled;
    setToggled(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <button
      className={`relative h-6 w-12 cursor-pointer rounded-full duration-200`}
      onClick={handleToggle}
      style={{
        backgroundColor: toggled ? '#008615' : '#24252d50',
      }}
    >
      <span
        className={cn(
          `absolute left-0 top-0 rounded-full bg-white shadow-lg transition-all duration-200`,
          toggled ? 'translate-x-full transform' : 'translate-x-0 transform',
          toggled ? 'h-4 w-5' : 'h-3 w-3',
          toggled ? 'm-1' : 'm-1.5',
        )}
      />
    </button>
  );
};

export default Toggle;
