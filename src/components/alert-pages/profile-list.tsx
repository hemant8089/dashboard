import { ProfileCards } from "./profile-card";

export const ProfileList = () => {
  return (
    <div className="w-full h-full flex gap-2 flex-col py-4">
      <h1 className="text-lg font-semibold pl-2">29-07-2024</h1>
      <ProfileCards />
    </div>
  );
};
