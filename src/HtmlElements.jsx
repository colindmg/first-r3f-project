import { useGSAP } from "@gsap/react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const HtmlElements = () => {
  const tl = useRef();
  const scroll = useScroll();
  const Image1 = useRef();
  const Image2 = useRef();
  const Image3 = useRef();
  const Image4 = useRef();
  const Image5 = useRef();
  const Image6 = useRef();

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useGSAP(() => {
    tl.current = gsap.timeline();

    // Animation timeline
    tl.current.fromTo(
      Image1.current,
      { top: "300vh" }, // Start from just below the viewport
      { top: "250vh", duration: 1 } // Move to the center of the viewport
    );

    tl.current.fromTo(
      Image2.current,
      { top: "310vh" }, // Start from just below the viewport
      { top: "260vh", duration: 1.2 } // Move to the center of the viewport
    );

    tl.current.fromTo(
      Image3.current,
      { top: "340vh" }, // Start from just below the viewport
      { top: "240vh", duration: 0.8 } // Move to the center of the viewport
    );

    tl.current.fromTo(
      Image4.current,
      { top: "350vh" }, // Start from just below the viewport
      { top: "280vh", duration: 1.4 } // Move to the center of the viewport
    );

    tl.current.fromTo(
      Image5.current,
      { top: "300vh" }, // Start from just below the viewport
      { top: "270vh", duration: 1.6 } // Move to the center of the viewport
    );

    tl.current.fromTo(
      Image6.current,
      { top: "350vh" }, // Start from just below the viewport
      { top: "235vh", duration: 1.8 } // Move to the center of the viewport
    );
  }, []);

  return (
    <>
      {/* IMAGE 1 */}
      <div
        ref={Image1}
        className="absolute bg-white p-1 rounded-sm h-fit w-fit"
        style={{
          top: "100vh",
          left: "43vw",
        }}
      >
        <img className="w-52" src="/img/01.webp" alt="Scroll Image" />
      </div>

      {/* IMAGE 2 */}
      <div
        ref={Image2}
        className="absolute bg-white p-1 rounded-sm h-fit w-fit"
        style={{
          top: "200vh",
          left: "26vw",
        }}
      >
        <img className="w-[200px]" src="/img/02.webp" alt="Scroll Image" />
      </div>

      {/* IMAGE 3 */}
      <div
        ref={Image3}
        className="absolute bg-white p-1 rounded-sm h-fit w-fit"
        style={{
          top: "300vh",
          left: "80vw",
        }}
      >
        <img className="w-[250px]" src="/img/03.webp" alt="Scroll Image" />
      </div>

      {/* IMAGE 4 */}
      <div
        ref={Image4}
        className="absolute bg-white p-1 rounded-sm h-fit w-fit"
        style={{
          top: "400vh",
          left: "4vw",
        }}
      >
        <img className="w-[210px]" src="/img/04.webp" alt="Scroll Image" />
      </div>

      {/* IMAGE 5 */}
      <div
        ref={Image5}
        className="absolute bg-white p-1 rounded-sm h-fit w-fit"
        style={{
          top: "300vh",
          left: "60vw",
        }}
      >
        <img className="w-[350px]" src="/img/05.webp" alt="Scroll Image" />
      </div>

      {/* IMAGE 6 */}
      <div
        ref={Image6}
        className="absolute bg-white p-1 rounded-sm h-fit w-fit"
        style={{
          top: "300vh",
          left: "5vw",
        }}
      >
        <img className="w-[280px]" src="/img/06.webp" alt="Scroll Image" />
      </div>
    </>
  );
};

export default HtmlElements;
