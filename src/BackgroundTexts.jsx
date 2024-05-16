/* eslint-disable react/no-unknown-property */
import { useGSAP } from "@gsap/react";
import { Text, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const BackgroundTexts = () => {
  const bigTitle = useRef();
  const leftText = useRef();
  const leftTextMaterial = useRef();
  const rightText = useRef();
  const rightTextMaterial = useRef();
  const tl = useRef();
  const scroll = useScroll();

  useFrame(() => {
    if (bigTitle.current && leftText.current && rightText.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useGSAP(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });

    tl.current
      .to(
        leftText.current.position,
        {
          x: -8,
        },
        1.5
      )
      .to(
        rightText.current.position,
        {
          x: 8,
        },
        1.5
      )
      .to(
        bigTitle.current.position,
        {
          z: -8,
        },
        2.5
      )
      .to(
        bigTitle.current.position,
        {
          y: 5,
          duration: 5,
        },
        5
      )
      .to(
        leftTextMaterial.current,
        {
          opacity: 0,
          duration: 5,
        },
        5
      )
      .to(
        rightTextMaterial.current,
        {
          opacity: 0,
          duration: 5,
        },
        5
      )
      .to(
        bigTitle.current.rotation,
        {
          x: 0,
        },
        10
      );

    tl.current;

    tl.current;
  });

  return (
    <>
      <Text ref={leftText} fontSize={0.25} position={[-4.9, 2, -3]}>
        MADE BY
        <meshStandardMaterial
          ref={leftTextMaterial}
          attach="material"
          opacity={1}
        />
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
        <meshStandardMaterial
          ref={rightTextMaterial}
          attach="material"
          opacity={1}
        />
      </Text>
    </>
  );
};

export default BackgroundTexts;
