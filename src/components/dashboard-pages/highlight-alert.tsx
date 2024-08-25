import { HighlightCameraData } from "@/constants/highlight-camera";
import { cn } from "@/lib/utils";
import { Progress } from "../ui/progress";


export const HightCameraAlert = () => {
    return (
        <div className="w-full h-full flex flex-col items-start gap-3">
        <div>
          <h1 className="text-lg font-medium">Highlight Camera Alert</h1>
        </div>
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-2">
          {HighlightCameraData.map((data, index) => {
            return (
              <div
                key={index}
                className={cn(
                  "col-psan-1  rounded-lg h-full pt-5 pb-3 flex flex-col px-4 gap-2 bg-white shadow-sm border border-gray-100"
                )}
              >
                <div className="flex gap-3">
                  <div  className="size-12 bg-lightGray rounded-full" />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-0.5">
                      <p className="text-2xl font-semibold text-blue">
                        {data.currentCount}
                      </p>
                      <span className="text-[11px]">/</span>
                      <p className="text-[12px] font-semibold text-muted-foreground">
                        {data.totalCount}
                      </p>
                    </div>
                    <h1 className="text-[12px] font-medium text-black">
                      {data.title}
                    </h1>
                  </div>
                </div>
                <Progress value={data.currentCount} max={data.totalCount} />
              </div>
            );
          })}
        </div>
      </div>
    )
}
