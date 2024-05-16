import { useGSAP } from "@gsap/react";
import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const BackgroundTexts = () => {
  const bigTitle = useRef();
  const leftText = useRef();
  const rightText = useRef();
  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (bigTitle.current && leftText.current && rightText.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useGSAP(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      bigTitle.current.position,
      {
        duration: 2,
        z: -8,
      },
      1
    );

    tl.current.to(
      leftText.current.position,
      {
        duration: 2,
        x: -8,
        ease: "power1.out",
      },
      0.5
    );

    tl.current.to(
      rightText.current.position,
      {
        duration: 2,
        x: 8,
        ease: "power1.out",
      },
      0.5
    );
  });

  return (
    <>
      <Text ref={leftText} fontSize={0.25} position={[-4.9, 2, -3]}>
        MADE BY
      </Text>
      <Text
        ref={bigTitle}
        fontSize={4}
        font="/fonts/Rosamila-Regular.ttf"
        fontStyle="italic"
        position={[0, 0, -5]}
      >
        Creatives
      </Text>
      <Text ref={rightText} fontSize={0.25} position={[5.4, -1.6, -3]}>
        WORLDWIDE
      </Text>
    </>
  );
};

export default BackgroundTexts;
