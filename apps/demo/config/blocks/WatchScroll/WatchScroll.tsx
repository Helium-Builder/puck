"use client";
import React, { RefObject } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getContainerScrollPercent(
  ref: RefObject<HTMLDivElement>,
  obj: { belowZero?: boolean } = {}
) {
  let size = ref.current?.getBoundingClientRect?.();
  let height = size?.height || 1;
  let offset = ref.current?.offsetTop || 1;
  window.addEventListener("resize", () => {
    size = ref.current?.getBoundingClientRect?.();
    height = size?.height || 1;
    offset = ref.current?.offsetTop || 1;
  });

  return () => {
    const scrollY = window.scrollY;
    const insideScrolled = scrollY - offset;
    let percentage = 0;
    //has not started
    if (insideScrolled < 0) {
      if (obj.belowZero) {
        percentage = insideScrolled / (height - window.innerHeight);
      } else {
        percentage = 0;
      }
    } else if (insideScrolled > 0 && insideScrolled - height < 0) {
      percentage = insideScrolled / (height - window.innerHeight);
    } else {
      percentage = 1;
    }
    return percentage;
  };
}

const scrollVid6 = [
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_031.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_032.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_033.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_034.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_035.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_036.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_037.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_038.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_039.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_040.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_041.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_042.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_043.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_044.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_045.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_046.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_047.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_048.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_049.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_050.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_051.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_052.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
  "https://cdn.shopify.com/s/files/1/0795/9858/4101/files/image_053.jpg?v=1716273499&width=600",
];

export function WatchScroll() {
  return (
    <div className="bg-black text-white flex text-center items-center flex-col md:justify-center px-8 py-24 md:py-36">
      <h1
        className="text-5xl md:text-8xl
            leading-tight font-medium md:leading-snug"
      >
        Arm Yourself <br />
        With Charm
      </h1>
      <p
        className=" md:w-1/3 mt-8
            md:text-lg leading-loose"
      >
        The watch's Seamless titanium body is where sporty meets business
        casual, with clear-cut lines and contours that summon new sensations,
        and speak to your sense of style.{" "}
      </p>
    </div>
  );
}
interface WatchScrollProps {
  sections: Section[];
  videoImages: string[];
  direction?: "up" | "down";
  classes: string;
  faded?: boolean;
  noTitle?: boolean;
  imgStyles?: string;
  fullSize?: boolean;
  containerStyles?: React.CSSProperties;
  containerClasses?: string;
}

export interface Section {
  text: string;
  title: string;
}

interface ElementRef<T> {
  current: T | null;
}

export const dummyProps: WatchScrollProps = {
  sections: new Array(4).fill({
    text: " with precision-cut edges and corners that work all the angles. ECG button, for anytime heart health monitoring.",
    title: "Seamless titanium body",
  }),
  videoImages: scrollVid6,
  direction: "up",
};

export function WatchTitle({ sections }: { sections: Section[] }) {
  const textRefs = React.useRef<HTMLDivElement[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const getPercentage = getContainerScrollPercent(containerRef);
    const handleScroll = () => {
      const minScale = 3;
      window.requestAnimationFrame(() => {
        const percent = getPercentage();
        if (percent <= 0)
          textRefs.current.forEach((ref) => {
            if (!ref || !ref.style) return;
            ref.style.scale = minScale.toString();
          });
        if (percent <= 0 || percent > 1.5) return;
        const currPercent = Math.min(1, percent / 0.4);
        textRefs.current.forEach((ref) => {
          if (!ref || !ref.style) return;
          ref.style.scale = Math.max(
            Math.min(10 / ((currPercent || 0.01) * 20) / 0.5, minScale),
            1
          ).toString();
          ref.style.opacity = currPercent.toString();
        });
        if (!containerRef || !containerRef.current) return;
        if (percent <= 0.9) containerRef.current.style.opacity = "1";
        if (percent > 0.9) containerRef.current.style.opacity = "0";
      });
    };
    window.addEventListener("scroll", handleScroll);

    textRefs.current.forEach((ref) => {
      if (!ref) return;
      ref.style.opacity = "0.5";
    });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textRefs, containerRef]);
  return (
    <div style={{ height: "20dvh", marginTop: "0", background: "black" }}>
      <div
        ref={containerRef}
        className="absolute  w-full  relative transition duration-300  "
        style={{
          height: "150dvh",
          background: "black",
          zIndex: 2,
          top: "0",
        }}
      >
        <div
          className={cn(
            " flex h-[100dvh] sticky top-0 flex-col  items-center justify-center  overflow-hidden"
          )}
        >
          <TextComponents
            sections={[{ title: sections[0]?.title, text: "" }]}
            textRefs={textRefs}
            direction={"up"}
            textStyle={{ width: "100%" }}
            rootStyle={{ margin: "auto" }}
            titleStyle={"md:scale-150"}
          />
        </div>
      </div>
    </div>
  );
}

export function WatchScrollAnimation({
  videoImages,
  sections = dummyProps.sections,
  direction = "up",
  classes,
  faded,
  noTitle = false,
  fullSize = false,
  imgStyles = "",
  containerStyles = {},
  containerClasses = "",
}: WatchScrollProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const preloadRef = React.useRef(false);
  const imageRef = React.useRef<HTMLImageElement[]>([]);
  const getFrame = (index: number) => videoImages[index];
  const frameCount = videoImages.length;
  const textRefs = React.useRef<HTMLDivElement[]>([]);

  const preloadImages = () => {
    if (preloadRef.current) return;
    setTimeout(() => {
      if (frameCount > 1)
        for (let i = 0; i < frameCount; i++) {
          let img = {};
          img = new Image();
          img.src = getFrame(i);
        }
    }, 1000);
    preloadRef.current = true;
  };
  const updateImage = (index: number) => {
    if (imageRef.current.length > 0) {
      if (frameCount !== 1)
        imageRef.current.map((ref) => {
          if (ref !== null)
            ref.setAttribute("src", getFrame(index > 0 ? index : 0) as string);
        });
    }
  };

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const getPercentage = getContainerScrollPercent(containerRef, {
      belowZero: true,
    });
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const percent = getPercentage();
        if (percent > -1) {
          preloadImages();
        }
        if (percent < 0 && percent > 1) return;
        const frameIndex = Math.min(
          frameCount - 1,
          Math.ceil(percent * frameCount - 1)
        );
        updateImage(frameIndex);
        animateText(textRefs, percent);
      });
    };
    window.addEventListener("scroll", handleScroll);
    const percent = getPercentage();
    if (percent > -1) {
      preloadImages();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textRefs, containerRef]);

  return (
    <div>
      {!noTitle && <WatchTitle sections={sections} />}
      <div
        ref={containerRef}
        className="relative bg-black "
        style={{
          height: sections.length * 80 + 100 + "vh",
        }}
      >
        <div
          className={cn(
            " flex h-[100dvh] sticky top-0 flex-col md:flex-row md:items-center justify-center md:justify-between pb-20 overflow-hidden pt-8",
            {
              "flex-col-reverse": direction === "down",
              "md:flex-row-reverse": direction == "up",
            },
            containerClasses
          )}
          style={containerStyles}
        >
          {fullSize && (
            <div
              style={{ minHeight: "50vh" }}
              className={cn("md:w-[60%] md:flex relative md:hidden", {})}
            ></div>
          )}
          <div
            style={{ minHeight: "45vh" }}
            className={cn("md:w-[60%] md:flex ", {
              "md:justify-end": direction === "up",
              "absolute md:relative inset-0 my-auto flex items-center ":
                fullSize,
              relative: !fullSize,
            })}
          >
            {faded && (
              <>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black "></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black "></div>
              </>
            )}
            <img
              src={videoImages[0]}
              width={500}
              height={500}
              alt="test"
              ref={(ref) => ref && imageRef.current.push(ref)}
              className={cn(
                "md:w-full md:h-[100dvh] ml-auto object-contain",
                classes,
                imgStyles
              )}
              loading="lazy"
            />
          </div>
          <div className="md:w-[40%] flex justify-center  relative">
            <TextComponents
              sections={noTitle ? sections : sections.slice(1)}
              textRefs={textRefs}
              direction={direction}
              textStyle={direction === "down" ? {} : undefined}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function animateText(
  refs: ElementRef<HTMLDivElement[]>,
  percentage: number
) {
  if (!refs.current) return;
  const percent = percentage * 100;
  const len = refs.current.length;
  const percentagePerSection = 100 / len;
  if (percent <= 100) {
    refs.current.forEach((ref, index, arr) => {
      const isActive =
        percent >= index * percentagePerSection &&
        percent <= (index + 1) * percentagePerSection;
      const isPrevActive = isActive && index > 0;
      const prev = isPrevActive ? arr[index - 1] : undefined;
      const currentPercent = (percent - percentagePerSection * index) * len;
      let animationPercentage = 0;
      if (currentPercent > 40) {
        animationPercentage = 100;
      } else {
        animationPercentage = (currentPercent / 40) * 100;
      }
      if (isActive) {
        if (animationPercentage >= 50) {
          const activePercentage = (animationPercentage - 50) * 2;
          if (!ref || !ref.style) return;
          ref.style.opacity = (activePercentage / 100).toString();
          ref.style.transform = `translateY(${50 - activePercentage / 2}px)`;
        } else {
          if (!ref || !ref.style) return;
          ref.style.opacity = "0";
          ref.style.transform = `translateY(-50px)`;
        }
      }
      if (isPrevActive && prev) {
        if (animationPercentage <= 50) {
          const activePercentage = animationPercentage * 2;
          prev.style.opacity = (1 - activePercentage / 100).toString();
          prev.style.transform = `translateY(-${activePercentage / 2}px)`;
        } else {
          prev.style.opacity = "0";
          prev.style.transform = `translateY(-50px)`;
        }
      } else if (index > 0) {
        ref.style.opacity = "0";
        ref.style.transform = `translateY(50px)`;
      }
    });
  }
}

export const TextComponents = ({
  sections,
  textRefs,
  rootStyle = { minHeight: "30dvh" },
  textStyle = { top: "50%" },
  direction,
  titleStyle,
}: {
  sections: Section[];
  textRefs: ElementRef<HTMLDivElement[]>;
  rootStyle?: React.CSSProperties;
  textStyle?: React.CSSProperties;
  titleStyle?: string;
  direction?: any;
}) => {
  return (
    <div
      className="text-white flex-col relative w-full max-w-lg"
      style={rootStyle}
    >
      {sections.map((item, i) => {
        return (
          <div
            key={i}
            ref={(ref) => ref && textRefs.current && textRefs.current.push(ref)}
            className="text-center text-lg md:text-2xl absolute  px-6"
            style={{
              opacity: i > 0 ? 0 : 1,
              transform: i > 0 ? "translateY(100px)" : "translateY(0px)",
              ...textStyle,
              willChange: "transform, opacity",
            }}
          >
            {item.title && (
              <h2
                className={cn("font-semibold text-heading ", titleStyle)}
                dangerouslySetInnerHTML={{
                  __html: item.title,
                }}
              ></h2>
            )}
            {item.text && (
              <div
                className={"max-w-lg mx-auto text-md md:text-xl"}
                dangerouslySetInnerHTML={{
                  __html: item.text,
                }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export function animateText2(
  refs: ElementRef<HTMLDivElement[]>,
  percentage: number
) {
  if (!refs.current) return;
  refs.current.forEach((ref, i, list) => {
    if (ref === null) return;
    if (percentage > i / list.length) ref.setAttribute("style", `opacity:1;`);
    else ref.setAttribute("style", `opacity:0.1;`);
  });
}
export function ScrollTextAnimation({
  section,
  containerRef,
  len,
  i,
}: {
  section: Section;
  containerRef: any;
  len: number;
  i: number;
}) {
  const textRefs = React.useRef<HTMLDivElement[]>([]);
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const getPercentage = getContainerScrollPercent(containerRef);
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        const percent = getPercentage();
        if (percent < 0 && percent > 1) return;
        const curr = (percent - (1 / len) * i) * len;
        const currPercent = curr < 0.4 ? curr / 0.4 : 1;
        animateText2(textRefs, currPercent);
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [textRefs]);

  return (
    <div
      className="relative "
      style={{
        height: "150dvh",
      }}
    >
      <div className="sticky top-0 h-[100dvh] flex items-center justify-end ">
        <div
          className=" flex justify-end  max-w-[50vw] md:max-w-[50vw] w-full mr-2"
          style={{
            color: "var(--text-color)",
          }}
        >
          <div className=" w-full overflow-visible max-w-[400px] ">
            <TextComponent2
              textRefs={textRefs}
              text={section.text}
              title={section.title}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TextComponent2({
  text,
  title,
  textRefs,
}: {
  text: string;
  title: string;
  textRefs: ElementRef<HTMLDivElement[]>;
}) {
  return (
    <div
      className=" p-4  h-fit shadow-card md:shadow-none"
      style={{
        background: "var(--card-color)",
      }}
    >
      <h2 className="text-lg md:text-2xl line">{title}</h2>
      <div className="flex flex-wrap gap-1  ">
        {text.split(" ").map((item, i) => {
          return (
            <span
              key={i}
              ref={(ref) =>
                ref &&
                textRefs.current?.[i] &&
                (textRefs.current[i] = ref as HTMLDivElement)
              }
              className={cn(
                " transition-opacity duration-500 h-contain opacity-10 inner-span"
                //textStyles?.inActive
              )}
              dangerouslySetInnerHTML={{ __html: item }}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
