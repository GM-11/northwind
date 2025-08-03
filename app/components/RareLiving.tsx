import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Aeroplane from "@/components/icons/Aeroplane";
import Location from "@/components/icons/Location";
import Medical from "@/components/icons/Medical";
import Train from "@/components/icons/Train";
import { useSignUpStore } from "@/stores/useSignUpStore";
import { manropeFont } from "@/utils/fonts";
import React from "react";

const RareLiving = () => {
  const { status } = useSignUpStore();
  return (
    <div
      id="rare-living"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 5%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 2%)",
      }}
      className={`z-10 w-full p-[64px_24px] lg:p-[88px_40px] flex flex-col backdrop-blur-lg lg:absolute -bottom-5`}
    >
      <div className="font-boskaMedium  selection:bg-primary selection:text-secondary text-primary text-[68px] lg:text-[128px] leading-[130%] xl:text-[180px] ">
        Your Rare Living.
      </div>

      <div className="flex justify-center items-center lg:gap-40 w-full text-primary max-lg:flex-col mx-auto pb-10 mt-[36px]">
        <p
          className={`${manropeFont.className} text-[22px] lg:text-[30px] font-[400] lg:w-[50%]`}
        >
          North Wind Estates brings you a rare blend of elegance, comfort, and
          modern design in the heart of Greater Noida, Pi-I. Our flagship
          project, Northwind Sanctuary, features premium 3 BHK, 4 BHK, and 4.5
          BHK luxury apartments crafted for those who choose to Live Rare. With
          spacious layouts, green-certified architecture, and world-class
          amenities, every home offers a lifestyle of unmatched serenity and
          sophistication.
          <br className="max-lg:hidden" />
        </p>

        <div className="max-custom400:flex max-custom400:flex-col grid grid-rows-2 grid-cols-2 gap-[35px] w-full lg:w-[60%] items-center max-sm:justify-items-center mt-[32px] max-sm:mt-[48px]">
          <div
            className={`font-boskaMedium text-primary f-c-col text-[35px] rounded-[11.65px] outline-[1.46px] outline-border w-[100%] py-10 lg:py-20 text-center`}
          >
            4.5 acres
            <p className={`text-[16px] ${manropeFont.className}`}>
              TOTAL
              <br />
              LAND AREA
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[35px] rounded-[11.65px] outline-[1.46px] outline-border w-[100%] py-10 lg:py-20 text-center`}
          >
            185
            <p className={`text-[16px] ${manropeFont.className}`}>
              ULTRA
              <br />
              PREMIUM UNITS
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[35px] rounded-[11.65px] outline-[1.46px] outline-border w-[100%] py-10 lg:py-20 text-center`}
          >
            70%
            <p className={`text-[16px] ${manropeFont.className}`}>
              LANDSCAPE
              <br />
              GREENS
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[35px] rounded-[11.65px] outline-[1.46px] outline-border w-[100%] py-10 lg:py-20 text-center`}
          >
            IGBC
            <p className={`text-[16px] ${manropeFont.className}`}>
              PLATINUM
              <br />
              RATED
            </p>
          </div>
        </div>
      </div>

      <div className={`f-c-col gap-[36px] ${manropeFont.className}`}>
        <h1 className="max-lg:text-[25px] text-4xl text-primary text-center">
          Located in the heart of Greater Noida
        </h1>

        <div className="max-lg:grid grid-cols-2 justify-items-center lg:flex lg:justify-center lg:items-center gap-[24px] text-primary">
          <div className="f-c-col w-[262px] h-[204px]">
            <Location />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              pari chowk <br />
              (landmark)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              7 min
            </p>
          </div>

          <div className="f-c-col w-[262px] h-[204px]">
            <Train />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              gnida <br />
              (metro station)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              4 min
            </p>
          </div>

          <div className="f-c-col w-[262px] h-[204px]">
            <Aeroplane />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              jewar <br />
              (airport)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              30 min
            </p>
          </div>

          <div className="f-c-col w-[262px] h-[204px]">
            <Medical />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              fortis <br />
              (hospital)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              7 min
            </p>
          </div>
        </div>

        <div className="flex-col flex sm:flex-row justify-center items-center gap-5 mt-[36px] w-full">
          <PrimaryButton
            text="Download Brochure"
            onTap={() => {
              if (status) {
                const link = document.createElement("a");
                link.href = "/assets/certificates/Brochure.pdf";
                link.download = "Brochure.pdf";
                link.click();

                localStorage.setItem("download-brochure", "yes");
              } else {
                document
                  .getElementById("connect-with-us")
                  ?.scrollIntoView({ behavior: "smooth" });
                localStorage.setItem("download-brochure", "yes");
              }
            }}
            className={`p-[20px_40px] max-lg:w-[90%] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-primary/50 hover:text-secondary duration-200 bg-secondary/70 text-primary`}
          />
          <SecondaryButton
            text="View Location"
            onTap={() => {
              window.open(
                "https://www.google.com/maps/dir//Plot+No+-+GH+07,+Unitech+City,+Unitech+Horizon,+Pi+I+%26+II,+Greater+Noida,+Uttar+Pradesh+201310/@28.4805544,77.4641141,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8ce321148fa4e875:0x8fe4480253bf60c2!2m2!1d77.5465155!2d28.4805792?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
                "blank"
              );
            }}
            className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px]   hover:bg-amber-200/20 duration-200  lg:text-[24px]  ${
                       manropeFont.className
                     } 
                        bg-primary text-secondary
                      border-secondary`}
          />
        </div>
      </div>
    </div>
  );
};

export default RareLiving;
