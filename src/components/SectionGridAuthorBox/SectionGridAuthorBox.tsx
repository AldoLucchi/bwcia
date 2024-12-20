"use client";

import React, { FC, useState } from "react";
import CardAuthorBox from "@/components/CardAuthorBox/CardAuthorBox";
import CardAuthorBox2 from "@/components/CardAuthorBox2/CardAuthorBox2";
import CardAuthorBox3 from "@/components/CardAuthorBox3/CardAuthorBox3";
import CardAuthorBox4 from "@/components/CardAuthorBox4/CardAuthorBox4";
import Heading from "@/components/Heading/Heading";
import NavItem2 from "@/components/NavItem2";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";
import Nav from "@/shared/Nav/Nav";
import SortOrderFilter from "./SortOrderFilter";

export interface SectionGridAuthorBoxProps {
  className?: string;
  sectionStyle?: "style1" | "style2";
  gridClassName?: string;
  boxCard?: "box1" | "box2" | "box3" | "box4";
  data?: any[];
}

const SectionGridAuthorBox: FC<SectionGridAuthorBoxProps> = ({
  className = "",
  boxCard = "box1",
  sectionStyle = "style1",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  data = Array.from("11111111"),
}) => {
  const [tabActive, setTabActive] = useState("Popular");

  const renderCard = (index: number) => {
    switch (boxCard) {
      case "box1":
        return (
          <CardAuthorBox
            index={index < 3 ? index + 1 : undefined}
            key={index}
          />
        );
      case "box2":
        return <CardAuthorBox2 key={index} />;
      case "box3":
        return <CardAuthorBox3 key={index} />;
      case "box4":
        return (
          <CardAuthorBox4
            authorIndex={index < 3 ? index + 1 : undefined}
            key={index}
          />
        );

      default:
        return null;
    }
  };

  const renderHeading1 = () => {
    return (
      <div className="mb-12 lg:mb-16  flex justify-between flex-col sm:flex-row">
        <Heading
          rightPopoverText="Creators"
          rightPopoverOptions={[
            {
              name: "Creators",
              href: "#",
            },
            {
              name: "Buyers",
              href: "#",
            },
          ]}
          className="text-neutral-900 dark:text-neutral-50"
        >
          Popular
        </Heading>
        <div className="mt-4 sm:mt-0">
          <SortOrderFilter />
        </div>
      </div>
    );
  };

  const renderHeading2 = () => {
    return (
      <div>
        <Heading
          className="mb-12 lg:mb-14 text-neutral-900 dark:text-neutral-50"
          fontClass="text-3xl md:text-4xl 2xl:text-5xl font-semibold"
          isCenter
          desc=""
        >
          Team!
        </Heading>
      </div>
    );
  };

  return (
    <div className={`nc-SectionGridAuthorBox relative ${className}`}>
      {sectionStyle === "style1" ? renderHeading1() : renderHeading2()}
      <div className={`grid gap-4 md:gap-7 ${gridClassName}`}>
        {data.map((_, index) => renderCard(index))}
      </div>
      <div className="mt-16 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-5">
        <ButtonSecondary>Show me more </ButtonSecondary>
        <ButtonPrimary>Become a author</ButtonPrimary>
      </div>
    </div>
  );
};

export default SectionGridAuthorBox;
