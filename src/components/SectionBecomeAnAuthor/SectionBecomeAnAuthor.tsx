import React, { FC } from "react";
import NcImage from "@/shared/NcImage/NcImage";
import rightImgDemo from "@/images/rightLargeImg.png";
import rightLargeImgDark from "@/images/rightLargeImgDark.png";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Logo from "@/shared/Logo/Logo";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";

export interface SectionBecomeAnAuthorProps {
  className?: string;
}

const SectionBecomeAnAuthor: FC<SectionBecomeAnAuthorProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionBecomeAnAuthor relative flex flex-col lg:flex-row items-center  ${className}`}
    >
      <div className="flex-shrink-0 mb-16 lg:mb-0 lg:mr-10 lg:w-2/5">
        {/* <Logo className="w-28" /> */}
        {/* <h2 className="font-normal text-3xl sm:text-4xl xl:text-6xl mt-6 sm:mt-10 !leading-[1.112] tracking-tight">
          Tocamos la materia <br /> 
          y la llenamos de <br />
          esencia de vida.
        </h2> */}
        {/* <span className="block mt-6 text-neutral-500 dark:text-neutral-400 ">
        Esta plataforma esta pensada como un prisma: capta energía 
        proveniente del dinero (transacciones ejecutadas a través del token) y 
        direcciona su resultado hacia diferentes propósitos de bienestar. Cada 
        una de estas acciones (transacciones) es una apuesta por la 
        consciencia y el despertar de luz de la humanidad. Cada uno de estos 
        flujos es el todo y la parte del propósito superior: servir a la intención 
        divina de tocar la materia y llenarla de esencia de vida.
        </span> */}
        {/* <div className="flex space-x-2 sm:space-x-5 mt-6 sm:mt-12">
          <ButtonPrimary href="/upload-item" className="">
            Create item
          </ButtonPrimary>
          <ButtonSecondary href="/search" className="">
            Discover more
          </ButtonSecondary>
        </div> */}
      </div>
      {/* <div className="flex-grow">
        <NcImage containerClassName="block dark:hidden" src={rightImgDemo} />
        <NcImage
          containerClassName="hidden dark:block"
          src={rightLargeImgDark}
        />
      </div> */}
    </div>
  );
};

export default SectionBecomeAnAuthor;
