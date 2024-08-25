import { DashboardAlertTable } from "../components/dashboard-pages/alerts-table";

// import { HightCameraAlert } from "../components/dashboard-pages/highlight-alert";
import { OverviewCard } from "../components/dashboard-pages/overview-cards";
import { ContentLayout } from "../components/layout/content-layout";
import AdminPanelLayout from "../components/layout/sidebar-layout";

export const Dashboard = () => {
  return (
    <AdminPanelLayout>
      <ContentLayout title="Dashboard">
        <main className="w-full min-h-screen h-full flex flex-col gap-5 mt-1 md:mt-3 mb-3 md:mb-6">
          <OverviewCard />
          <DashboardAlertTable />
          {/* <DashboardActionTable /> */}
        </main>
      </ContentLayout>
    </AdminPanelLayout>
  );
};
