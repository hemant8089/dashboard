import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProfileData } from "@/constants/profiles-data";

import { Camera, Clock, Download, MessageSquareText } from "lucide-react";

export function ProfileCards() {
  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-2">
      {ProfileData.map((profile, index) => (
        <Card key={index} className="cols-span-1">
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
          <CardFooter className="flex flex-col md:flex-row gap-1 items-start md:items-center justify-between">
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
  );
}
