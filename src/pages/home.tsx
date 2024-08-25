import AdminPanelLayout from "@/components/layout/sidebar-layout";

import { ContentLayout } from "@/components/layout/content-layout";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/userSlice";
import { AppDispatch } from "@/redux/store";
import { Component } from "@/components/ui/newChart";

export const HomePage = () => {
  const cred={
    name:"hemant",
    email:"hemant@gmail.com",
    password:"hematn@9808"
  }
  // const userId: string = "9349274";
  // const { login } = useAuth();
  const dispatch = useDispatch<AppDispatch>();
  const clicked = () => {
    // dispatch(fetchUserById("kjhjhb"));
    dispatch(login(cred));

  };
  const userData = useSelector((state: any) => state.user)
  console.log("userData",userData);

 
  const chartData = [
    { browser: "safari", visitors: '100', fill: "blue" },
  ];
  
  // const color = "var(--color-safari)";
  
  return (

    <AdminPanelLayout>
      <ContentLayout title="Home">
        <main className="w-full  min-h-screen h-full flex flex-col gap-5 mt-1 md:mt-3 mb-3 md:mb-6">
          home


          {/* <RadialBarChartComponent /> */}
          {/* <Component></Component> */}
          <Component  chartData={chartData} color='blue' />


          <button
            onClick={() => 
            {
               clicked();
            // login(cred);
            
          }
            }
            className="w-[100px] py-4 rounded text-white bg-blue"
          >
            login
          </button>

          
         
        </main>
      </ContentLayout>
    </AdminPanelLayout>
  );
};
