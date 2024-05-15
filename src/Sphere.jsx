/* eslint-disable react/no-unknown-property */
import { useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
import { useRef, useState } from "react";

const Sphere = (props) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 0.5 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      ref={ref}
      position={props.position}
      onPointerEnter={(event) => {
        event.stopPropagation;
        setIsHovered(true);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
      onClick={() => {
        setIsClicked(!isClicked);
      }}
      scale={isClicked ? [1.5, 1.5, 1.5] : [1, 1, 1]}
    >
      <sphereGeometry args={props.size} />
      <meshStandardMaterial
        color={isHovered ? "orange" : props.color}
        wireframe
      />
    </mesh>
  );
};

Sphere.propTypes = {
  position: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

export default Sphere;
