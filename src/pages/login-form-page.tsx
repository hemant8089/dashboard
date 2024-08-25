import { LoginForm } from "@/components/forms/login-form";
import { AnimJsonLogo } from "@/components/shared/anim-json-logo";
import { MaxWrapper } from "@/components/shared/max-wrapper";
import { Link } from "react-router-dom";


export const LoginFormPage = () => {
  return (
    <MaxWrapper>
      <div className="w-full h-full flex">
        <div className="w-full  flex flex-col md:flex-row h-full md:h-screen gap-5 md:gap-0 pb-4 md:pb-0">
          <div className="w-full md:w-3/5 text-white relative p-2 border-[1.5px] shadow-lg border-black/20 h-[50vh] md:h-full">
            <video
              autoPlay
              muted
              loop
              className="w-full h-[100%] md:h-full object-cover aspect-video"
              src="/video.mp4"
            />

            <div className="absolute top-2 left-1 md:left-2 z-30 w-[98%] md:w-[98%] h-[95%] md:h-[97%] bg-white bg-opacity-5 backdrop-blur-sm" />
            <div className="absolute bottom-0 left-0 z-40 w-full items-start flex pb-5 md:pb-10 pl-6 md:pl-10">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold">Cipla</h1>
              </div>
            </div>
            <div className="absolute top-[25%] md:top-[36%] left-0 z-40 w-full items-start flex pl-6 md:pl-10">
              <div className="flex flex-col gap-3 md:gap-5">
                <Link
                  to="/"
                  className="w-[140px] md:w-[190px] h-[50px] md:h-[60px] bg-blur-sm border border-gray-300/20 rounded-xl md:rounded-2xl text-sm md:text-2xl bg-gray-700/30 flex items-center shadow-sm"
                >
                  <AnimJsonLogo />{" "}
                  <span className="-ml-5 md:-ml-4">AI Vision</span>
                </Link>
                <h1 className="text-3xl md:text-5xl font-normal leading-10 md:leading-[4.5rem] 2xl:w-[60%]">
                  Shaping the Future
                  <span className="text-muted-foreground pl-2">of</span>{" "}
                  Monitoring Solutions
                </h1>
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/5 h-full flex flex-col items-center justify-start md:justify-center pt-8 md:pt-0 px-5 md:px-16 2xl:px-24">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h1 className="text-2xl md:text-[30px] font-medium">Login</h1>
                <p className="text-muted-foreground text-center md:text-left text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  tenetur deleniti accusantium.
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </MaxWrapper>
  );
};
