import Lottie from "lottie-react";
import logoAnimation from "@/assets/anim.json";

export const AnimJsonLogo = () => {
  return (
    <div className="-ml-5 md:-ml-4">
      <Lottie
        animationData={logoAnimation}
        loop={true}
        autoplay={true}
        style={{ width: "100px", height: "100px" }}
      />
    </div>
  );
};
