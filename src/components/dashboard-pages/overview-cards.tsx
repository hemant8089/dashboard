import { OverViewcards } from "@/constants/overview-cards";
import { DateRangePicker } from "../date-time-picker/date-time-picker";
import { cn } from "@/lib/utils";

import SalaryRangeChart from "../ui/SalaryRange";
import { Component } from "../ui/newChart";


export const OverviewCard = () => {

  const chartData = [
    // { browser: "safari", visitors: '100', fill: "blue" },
    [{ name: "safari", visitors: '50', fill: "#C2185B" }],
    [{ name: "safari", visitors: '50', fill: "#4CAF50" }],
    [{ name: "Product Managers", visitors: '16', fill: "#F44336" }],

  ];
  const color = ["#C2185B",'#4CAF50','#F44336'];
    return (
        <div className="flex flex-col gap-2">
          <div className="w-full h-full flex items-center justify-between">
            <div>
              <h1 className="text-[1.5rem] font-bold text-gray-800"> Employee Overview</h1>
            </div>
            <div>
              <DateRangePicker />
            </div>
          </div>
          <div className="w-full h-full  grid md:grid-cols-4 grid-cols-1 gap-4">
            {OverViewcards.map((card, index) => {
              return (
                <div
                  key={index}
                  className={cn(
                    "col-span-1 shadow-lg max-h-[15rem] overflow-hidden   rounded-lg  flex px-2 md:px-4 py-2 md:py-2 items-center justify-center gap-2 md:gap-",
                  )}
                >
                
                  <div className="flex w-[50%] flex-col gap-1">
                    <p className="text-sm md:text-3xl font-semibold text-gray-700">{card.count}</p>
                    <h1 className="text-[11px] md:text-[18px] font-medium text-gray-500">
                      {card.title}
                    </h1>
                    <p className="mt-[-1rem] text-gray-400">Increase since last quater</p>
                  </div>
                  <div className=" w-[50%]  mr-5">
                  <Component chartData={chartData[index]} color={color[index]} />
                  </div>
                 
                </div>
              );
            })}
            <div className="max-h-[15rem] shadow-lg rounded-md">
            <SalaryRangeChart></SalaryRangeChart>

            </div>
          </div>
        </div>
    )
}
