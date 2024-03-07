import React from "react";
import { Faq } from "@/common/ui/faq";
import { Hero } from "@/common/ui/hero";
import { SurveyForm } from "@/components/research-page/research-findings/survey-form";
import { AppointmentCta } from "@/components/test-page/appointment-cta";
import { MuslimCommunitySuicide } from "@/components/test-page/muslim-community-suicide";
import { SupportSuicide } from "@/components/test-page/support-suicide";
import { Testimonial } from "@/components/test-page/testimonial";
import { UniqueChallengesCards } from "@/components/test-page/unique-challenges-cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MMHIUCBerkeley } from "@/components/test-page/mmhi-uc-berkeley";
import { adminPath } from "@/utils/constants";

const Projects = async () => {
  try {
    const res = await fetch(`${adminPath}/projects?populate=deep`);
    return res.json();
  } catch (error) {
    console.log("err>>>>>>", error);
  }
};

export default async function Index({ params }) {
  const { slug } = params;
  const response = await fetch(`${adminPath}/projects/${slug}?populate=deep`);

  const slugdata = await response.json();
  const postdata = slugdata?.data?.attributes;
  const projectsData = await Projects();
  const showForm = postdata?.projectPages[6]?.ctaname === "Download";
  return (
    <>
      <Hero data={postdata?.projectPages[0]} />
      <MuslimCommunitySuicide data={postdata?.projectPages[1]} />
      <UniqueChallengesCards
        data={postdata?.projectPages[2]}
        projectsData={projectsData}
      />
      <SupportSuicide data={postdata?.projectPages[3]} />
      <AppointmentCta data={postdata?.projectPages[4]} />
      <Faq data={postdata?.projectPages[5]} />
      {showForm &&  <SurveyForm data={postdata?.projectPages[6]} />}
      <Testimonial data={postdata?.Testimonial} />
      <MMHIUCBerkeley data={postdata?.projectPages[7]} />
    </>
  );
}
