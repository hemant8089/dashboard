


import { ContentLayout } from "@/components/layout/content-layout";
import AdminPanelLayout from "@/components/layout/sidebar-layout";
import { UsersTable } from "@/components/users/users-table";


export const UsersPage = () => {
  return (
    <AdminPanelLayout>
      <ContentLayout title="Users">
      <main className="w-full min-h-screen h-full flex flex-col gap-5 pr-4 mt-1 md:mt-2 mb-6 px-4 md:px-0">
        <UsersTable />
      </main>
    </ContentLayout>
    </AdminPanelLayout>
  );
};
