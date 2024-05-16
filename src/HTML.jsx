import { useGSAP } from "@gsap/react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const HTML = () => {
  const tl = useRef();
  const scroll = useScroll();
  const textContainer = useRef();
  const textRefs = useRef([]);
  const bottomButton = useRef();
  const logoRef = useRef();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useGSAP(() => {
    gsap.from(logoRef.current, {
      duration: 2,
      opacity: 0,
      y: -50,
      delay: 1.5,
    });

    gsap.from(textContainer.current, {
      duration: 3,
      opacity: 0,
      delay: 1,
    });

    // ANIMATIONS AU SCROLL
    tl.current = gsap.timeline();

    tl.current.to(
      textContainer.current,
      {
        duration: 1,
        y: window.innerHeight * 0.6,
      },
      0
    );

    textRefs.current.forEach((el, index) => {
      tl.current.to(
        el,
        {
          duration: 0.7,
          opacity: 0,
          x: 200,
        },
        index * 0.2
      );
    });

    tl.current.from(
      bottomButton.current,
      {
        duration: 0.15,
        opacity: 0,
      },
      1
    );
  });

  return <></>;
};

export default HTML;
