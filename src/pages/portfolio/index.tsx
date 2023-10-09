import Link from "next/link";
import parser from "html-react-parser";
import Slider from "react-slick";

import {
  getProjects,
  getRunningQueriesThunk,
  useGetProjectQuery,
} from "@/services/portfolio";
import { wrapper } from "@/lib/redux";
import Internal from "@/components/common/Internal";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export const getStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    store.dispatch(getProjects.initiate());
    const [projects] = await Promise.all(
      store.dispatch(getRunningQueriesThunk())
    );

    return {
      props: {
        projects: projects.data,
      },
      revalidate: 50,
    };
  }
);

export default function Portfolio({ projects }: any): JSX.Element {
  const [selectedID, setSelectedID] = useState<string | undefined>("");
  const [carouselChange, setCarouselChange] = useState<number>(0);
  const { data: project, isLoading } = useGetProjectQuery(selectedID);
  const customSlider = useRef<any>();
  const [sliderSettings, setSliderSettings] = useState({
    adaptiveHeight: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (current: any, next: any) => {
      setCarouselChange(current);
    },
  });

  const nextSlide = () => customSlider.current.slickNext();
  const previousSlide = () => customSlider.current.slickPrev();

  useEffect(() => {
    const element = document.getElementsByClassName("slick-current")[0];
    const ID = element.querySelector("img")?.dataset.projectid;
    setSelectedID(ID);
  }, [carouselChange]);
  return (
    <Internal>
      <div className="container mt-32 mb-12">
        {/*
          // @ts-ignore */}
        <Slider
          {...sliderSettings}
          ref={customSlider}
        >
          {projects.map(({ id, acm_fields }: any) => (
            <div
              className="md:px-2 outline-none"
              key={id}
            >
              <img
                alt={acm_fields?.featured_media?.alt_text}
                data-projectid={id}
                src={acm_fields.featuredProjectImage.source_url}
                className="block rounded-lg mx-auto"
              />
            </div>
          ))}
        </Slider>
        <div className="md:w-3/4 mt-6 md:mx-auto">
          {!isLoading ? (
            <>
              <div className="text-center mb-6">
                <Button
                  className=""
                  asChild
                >
                  <Link
                    href={project.acm_fields.projectLink}
                    target="_blank"
                  >
                    View Project
                  </Link>
                </Button>
              </div>
              <h1 className="flex flex-col md:flex-row md:items-center text-center md:text-left text-4xl md:text-[64px] text-primary md:mb-6 font-sans">
                <span className="leading-[4rem] font-bold">
                  {project?.acm_fields?.title}
                </span>
                <div className="inline-flex gap-4 items-center justify-center text-3xl mb-4 md:mb-0 text-foreground">
                  <FontAwesomeIcon
                    aria-label="Previous Slide"
                    title="Previous Slide"
                    onClick={previousSlide}
                    className="cusor-pointer p-4"
                    icon={faArrowLeft}
                  />
                  <FontAwesomeIcon
                    aria-label="Next Slide"
                    title="Next Slide"
                    onClick={nextSlide}
                    className="cusor-pointer p-4"
                    icon={faArrowRight}
                  />
                </div>
              </h1>
              <div>
                {!isLoading && project.acm_fields
                  ? parser(project?.acm_fields?.portfolioContent, {
                      trim: true,
                    })
                  : null}
              </div>
            </>
          ) : (
            <div className="text-center">
              <FontAwesomeIcon
                spin
                size="2xl"
                icon={faSpinner}
              />
            </div>
          )}
        </div>
      </div>
    </Internal>
  );
}
