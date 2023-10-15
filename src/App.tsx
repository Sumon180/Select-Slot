import { useState } from "react";
import { Check } from 'react-feather';

function App() {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  const timeSlots = Array.from({ length: 24 * 2 }, (_, index) => {
    const hours = Math.floor(index / 2);
    const minutes = (index % 2) * 30;
    const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}`;
    console.log(time);
    return time;
    
  });

  const handleTimeSlotClick = (time: string) => {
    setSelectedTimeSlot(time);
  };

  return (
    <>
      <div className="container mx-auto mt-8">
        <div>
          <h2>Select a Time Slot</h2>
          <div className="flex flex-wrap gap-5">
            {timeSlots.map((time, index) => (
               <button
               key={index}
               onClick={() => handleTimeSlotClick(time)}
               className={`${
                 selectedTimeSlot === time
                   ? 'bg-blue-500 text-white'
                   : 'bg-gray-200 hover:bg-gray-300'
               } px-4 py-2 rounded cursor-pointer relative`}
             >
               {selectedTimeSlot === time && (
                 <div className="absolute -top-4 left-1/2 text-black -translate-x-1/2">
                   <Check size={24} />
                 </div>
               )}
               {time}
             </button>
            ))}
          </div>
          <div>
            <p>Selected Time Slot: <span className="font-semibold text-xl">{selectedTimeSlot || "None"}</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
