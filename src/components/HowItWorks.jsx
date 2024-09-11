import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const HowItWorks = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-div">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pto Chip
            <br /> A monster win for gaming
          </h2>
          <p className="hiw-subtitle">
            It's here. The biggest redesign in Apple GPU history.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none "
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}>
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col gap-4">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhine chip that delivers{" "}
              <span className="text-white">
                the best graphics performance by far
              </span>
              .
            </p>

            <p className="hiw-text g_fadeIn">
              Mobile games{" "}
              <span className="text-white">
                will look and feel incredibly immersive
              </span>
              , eith incredible environmental detail and lifelike characters.
              And with industry-leading speed and efficiency, the A17 Pro
              responds and performs quickly.
            </p>
          </div>
          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
