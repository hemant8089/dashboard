import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FeedbackProfileData } from "@/constants/profiles-data";
import {
  Camera,
  ChevronLeft,
  Clock,
  Download,
  MessageSquareText,
  Send,
} from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const FeedbackProfile = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-4 md:gap-2 py-2">
      {/* First Div */}
      {isHidden && (
        <div
          className="flex flex-col w-3/4 md:w-1/4 cursor-pointer"
          onClick={toggleVisibility}
        >
          <h1 className="text-lg font-semibold pl-2">29-07-2024</h1>
          <div className="w-full">
            {FeedbackProfileData.map((profile, index) => (
              <Card key={index} className="cols-span-3">
                <CardHeader>
                  <img
                    src={profile.img}
                    alt="profile"
                    className="object-cover w-80 pointer-events-none select-none rounded-lg"
                  />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <CardTitle className="text-[16px]">{profile.title}</CardTitle>
                  <div className="w-full flex items-center gap-5">
                    <p className="flex items-center text-sm">
                      <Camera className="mr-2 size-4 text-muted-foreground" />
                      {profile.camera}
                    </p>
                  </div>
                  <div className="w-full flex items-center gap-5">
                    <p className="flex items-center text-[12px]">
                      <Clock className="mr-2 size-4 text-muted-foreground" />
                      {profile.time}
                    </p>
                    <p className="flex items-center text-[12px] gap-2">
                      <MessageSquareText className="size-4 text-muted-foreground" />
                      Comments: <span>{profile.comments}</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-1 justify-between">
                  <Button variant="profile" size="sm" className="w-[120px]">
                    <Download className="mr-2 size-4" />
                    Download
                  </Button>
                  <Button variant="profile2" size="sm" className="w-[120px]">
                    <Download className="mr-2 size-4" />
                    Deploy
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Second Div */}
      {!isHidden && (
        <div className="flex flex-col w-full md:w-2/4">
          <h1 className="text-lg font-semibold pl-2 flex gap-2 items-center pb-2 cursor-pointer">
            <ChevronLeft
              className="size-6 bg-blue text-white rounded-sm"
              onClick={toggleVisibility}
            />
            29-07-2024
          </h1>
          <div className="w-full">
            {FeedbackProfileData.map((profile, index) => (
              <Card key={index} className="cols-span-3">
                <CardHeader>
                  <img
                    src={profile.img}
                    alt="profile"
                    className="object-cover w-90 pointer-events-none select-none rounded-lg"
                  />
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <CardTitle className="text-[16px]">{profile.title}</CardTitle>
                  <div className="w-full flex items-center gap-5">
                    <p className="flex items-center text-sm">
                      <Camera className="mr-2 size-4 text-muted-foreground" />
                      {profile.camera}
                    </p>
                  </div>
                  <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5">
                    <p className="flex items-center text-[12px]">
                      <Clock className="mr-2 size-4 text-muted-foreground" />
                      {profile.time}
                    </p>
                    <p className="flex items-center text-[12px] gap-2">
                      <MessageSquareText className="size-4 text-muted-foreground" />
                      Comments: <span>{profile.comments}</span>
                    </p>
                  </div>
                </CardContent>
                <CardFooter className="flex gap-1 justify-between">
                  <Button
                    variant="profile"
                    size="sm"
                    className="w-[100px] md:w-[120px]"
                  >
                    <Download className="mr-2 size-4" />
                    Download
                  </Button>
                  <Button
                    variant="profile2"
                    size="sm"
                    className="w-[100px] md:w-[120px]"
                  >
                    <Download className="mr-2 size-4" />
                    Deploy
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      )}
      {!isHidden && (
        <div className="flex flex-col w-full md:w-2/4">
          <h1 className="text-lg font-semibold pl-2 flex gap-2 items-center pb-2 cursor-pointer">
            Feedback
          </h1>
          <div className="w-full border h-[40vh] md:h-full rounded-xl border-lightGray flex items-center justify-center relative">
            <p className="text-muted-foreground text-sm">No Comments yet</p>
            <div className="w-[96%] rounded-lg absolute bottom-1 md:bottom-3 left-1 md:left-2 h-14 flex items-center gap-2">
              <Input
                type="text"
                placeholder="Type your feedback here"
                className="w-full"
              />
              <Button className="bg-green-600 h-[2.3rem] md:h-[3.3rem]">
                <Send className="size-5 shrink-0" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
