import { ContentLayout } from "@/components/layout/content-layout";
import { CameraTable } from "../components/camera/camera-table";
import AdminPanelLayout from "@/components/layout/sidebar-layout";

export const CameraListPage = () => {
  return (
    <AdminPanelLayout>
      <ContentLayout title="Cameras">
        <main className="w-full min-h-screen h-full flex flex-col gap-5 pr-4 mt-1 md:mt-2 px-4 md:px-0 mb-6">
          <CameraTable />
        </main>
      </ContentLayout>
    </AdminPanelLayout>
  );
};
