import { useGSAP } from "@gsap/react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

// DIV DES IMAGES

const HtmlElements = () => {
  const tl = useRef();
  const scroll = useScroll();

  const imagesData = [
    {
      ref: useRef(),
      src: "/img/03.webp",
      alt: "Scroll Image",
      top: "260vh",
      left: "6vw",
      width: "250px",
      author: "@1toxine",
    },
    {
      ref: useRef(),
      src: "/img/02.webp",
      alt: "Scroll Image",
      top: "245vh",
      left: "24vw",
      width: "190px",
      author: "@mecatommy",
    },
    {
      ref: useRef(),
      src: "/img/05.webp",
      alt: "Scroll Image",
      top: "265vh",
      left: "38vw",
      width: "200px",
      author: "@alesdzn",
    },
    {
      ref: useRef(),
      src: "/img/01.webp",
      alt: "Scroll Image",
      top: "250vh",
      left: "52.5vw",
      width: "180px",
      author: "@madebyajit",
    },
    {
      ref: useRef(),
      src: "/img/06.webp",
      alt: "Scroll Image",
      top: "245vh",
      right: "21.5vw",
      width: "190px",
      author: "@jeyytm",
    },
    {
      ref: useRef(),
      src: "/img/04.webp",
      alt: "Scroll Image",
      top: "261vh",
      right: "6.5vw",
      width: "210px",
      author: "@teocomyn",
    },
  ];

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useGSAP(() => {
    tl.current = gsap.timeline();

    imagesData.forEach((image, index) => {
      // Apparition des images à la moitié de la timeline
      tl.current.fromTo(
        image.ref.current,
        { opacity: 0, top: "130vh" },
        {
          opacity: 1,
          duration: 3,
          top: "210vh",
          ease: "power1.out",
          delay: index * 0.3 + 1.5 + 3,
        },
        "70%"
      );
    });
  }, []);

  return (
    <>
      {imagesData.map((image, index) => (
        <div
          key={index}
          ref={image.ref}
          className="absolute bg-white p-1 rounded-sm h-fit w-fit"
          style={{ top: image.top, left: image.left, right: image.right }}
        >
          <img
            className={`w-[${image.width}]`}
            src={image.src}
            alt={image.alt}
          />
          <p className="absolute -bottom-[100%] left-0 text-white text-sm">
            {image.author}
          </p>
        </div>
      ))}
    </>
  );
};

export default HtmlElements;
