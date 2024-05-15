/* eslint-disable react/no-unknown-property */

import { useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
import { useRef } from "react";

const Cube = (props) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2;
  });

  return (
    <mesh ref={ref} position={props.position}>
      <boxGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

Cube.propTypes = {
  position: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

export default Cube;
