"use client";

import React, { FC } from "react";
import Heading from "@/components/Heading/Heading";
import CardCategory5 from "@/components/CardCategory5/CardCategory5";
import { nftsCatImgs } from "@/contains/fakeData";
import MySlider from "../MySlider";

export interface SectionSliderCategoriesProps {
  className?: string;
  heading?: string;
  subHeading?: string;
}

const ntfsCatNames = [
  "Foundress",
  "Adriana Pacheco",
];

const SectionSliderCategories: FC<SectionSliderCategoriesProps> = ({
  heading = "Team!",
  subHeading = "We win in technology.",
  className = "",
}) => {
  return (
    <div className={`nc-SectionSliderCategories ${className}`}>
      <MySlider
        itemPerRow={2}
        hideNextPrev
        renderSectionHeading={({
          onClickPrev,
          onClickNext,
          showNext,
          showPrev,
        }) => {
          return (
            <Heading
              hasNextPrev
              desc={subHeading}
              onClickPrev={onClickPrev}
              onClickNext={onClickNext}
              disableNext={!showNext}
              disablePrev={!showPrev}
            >
              {heading}
            </Heading>
          );
        }}
        data={[1, 1, 1, 1, 1, 1]}
        renderItem={(_, index) => {
          return (
            <CardCategory5
              key={index}
              index={index}
              featuredImage={nftsCatImgs[index]}
              name={`${ntfsCatNames[index]}`}
            />
          );
        }}
      />
    </div>
  );
};

export default SectionSliderCategories;
