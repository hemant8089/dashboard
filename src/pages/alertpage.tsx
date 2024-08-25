import { FeedbackProfile } from "@/components/alert-pages/feedback-profile";
import { ProfileList } from "@/components/alert-pages/profile-list";
import { SelectAction } from "@/components/alert-pages/select-action";
import { SelectCamera } from "@/components/alert-pages/select-camera";
import { SelectComments } from "@/components/alert-pages/select-comments";
import { DateRangePicker } from "@/components/date-time-picker/date-time-picker";
import { ContentLayout } from "@/components/layout/content-layout";
import AdminPanelLayout from "@/components/layout/sidebar-layout";


export const AlertPage = () => {
  return (
    <AdminPanelLayout>
      <ContentLayout title="Alert">
        <main className="w-full min-h-screen h-full flex flex-col gap-5 mt-1 md:mt-3 mb-6">
          <div className="w-full h-full flex flex-col items-center justify-between gap-3 md:gap-5">
            <div className="w-full h-full items-center justify-between gap-5 hidden md:flex">
              <DateRangePicker />
              <SelectAction />
              <SelectCamera />
              <SelectComments />
            </div>
            <div className="w-full h-full flex flex-col items-center justify-between gap-2 md:gap-5 md:hidden">
              <div className="w-full flex items-center gap-5 justify-between">
                <DateRangePicker />
                <SelectAction />
              </div>
              <div className="w-full flex items-center justify-between">
                <SelectCamera />
                <SelectComments />
              </div>
            </div>
            <FeedbackProfile />
            <ProfileList />
          </div>
        </main>
      </ContentLayout>
    </AdminPanelLayout>
  );
};
