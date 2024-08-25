

import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

  type RadialChartProps = {
   
    color: string
    chartData: any
  }
// export function Component({ chartData, color }) {
   export function Component({ color, chartData }: RadialChartProps) {
  return (
    <div className="mx-auto aspect-square max-h-[250px]">
      <RadialBarChart
        data={chartData}
        startAngle={0}
        width={200}
        height={200}
        endAngle={250}
        innerRadius={60}
        outerRadius={80}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          polarRadius={[86, 74]}
        />
        <RadialBar dataKey="visitors" background cornerRadius={10} fill={color} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-foreground text-3xl font-bold"
                    >
                      {chartData[0].visitors.toLocaleString()} %
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 24}
                      className="fill-muted-foreground"
                    >
                    
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </div>
  );
}




// "use client"

// import { TrendingUp } from "lucide-react"
// import {
//   Label,
//   PolarGrid,
//   PolarRadiusAxis,
//   RadialBar,
//   RadialBarChart,
// } from "recharts"


// const chartData = [
//   { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
// ]

// const chartConfig = {
//   visitors: {
//     label: "Visitors",
//   },
//   safari: {
//     label: "Safari",
//     color: "hsl(var(--chart-2))",
//   },
// }

// export function Component() {
//   return (
   
//           <RadialBarChart
//             data={chartData}
//             startAngle={0}
//             endAngle={250}
//             innerRadius={80}
//             outerRadius={110}
//           >
//             <PolarGrid
//               gridType="circle"
//               radialLines={false}
//               stroke="none"
//               className="first:fill-muted last:fill-background"
//               polarRadius={[86, 74]}
//             />
//             <RadialBar dataKey="visitors" background cornerRadius={10} />
//             <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//               <Label
//                 content={({ viewBox }) => {
//                   if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                     return (
//                       <text
//                         x={viewBox.cx}
//                         y={viewBox.cy}
//                         textAnchor="middle"
//                         dominantBaseline="middle"
//                       >
//                         <tspan
//                           x={viewBox.cx}
//                           y={viewBox.cy}
//                           className="fill-foreground text-4xl font-bold"
//                         >
//                           {chartData[0].visitors.toLocaleString()}
//                         </tspan>
//                         <tspan
//                           x={viewBox.cx}
//                           y={(viewBox.cy || 0) + 24}
//                           className="fill-muted-foreground"
//                         >
//                           Visitors
//                         </tspan>
//                       </text>
//                     )
//                   }
//                 }}
//               />
//             </PolarRadiusAxis>
//           </RadialBarChart>
      
      
//   )
// }






// import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

// const chartData = [
//   { browser: "safari", visitors: 100, fill: "var(--color-safari)" },
// ]

// export function Component() {
//   return (
//     <div className="mx-auto aspect-square max-h-[250px]">
//       <RadialBarChart
//         data={chartData}
//         startAngle={0}
//         width={200}
//         height={200}
//         endAngle={250}
//         innerRadius={80}
//         outerRadius={110}
//       >
//         <PolarGrid
//           gridType="circle"
//           radialLines={false}
//           stroke="none"
          
//           polarRadius={[86, 74]}
//         />
//         <RadialBar dataKey="visitors" background cornerRadius={10} />
//         <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
//           <Label
//             content={({ viewBox }) => {
//               if (viewBox && "cx" in viewBox && "cy" in viewBox) {
//                 return (
//                   <text
//                     x={viewBox.cx}
//                     y={viewBox.cy}
//                     textAnchor="middle"
//                     dominantBaseline="middle"
//                   >
//                     <tspan
//                       x={viewBox.cx}
//                       y={viewBox.cy}
                        
//                       className="fill-foreground text-4xl font-bold"
//                     >
//                       {chartData[0].visitors.toLocaleString()}
//                     </tspan>
//                     <tspan
//                       x={viewBox.cx}
//                       y={(viewBox.cy || 0) + 24}
//                       className="fill-muted-foreground"
//                     >
//                       Visitors
//                     </tspan>
//                   </text>
//                 )
//               }
//             }}
//           />
//         </PolarRadiusAxis>
//       </RadialBarChart>
//     </div>
//   )
// }

