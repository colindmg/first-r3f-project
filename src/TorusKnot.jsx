/* eslint-disable react/no-unknown-property */
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import PropTypes from "prop-types";
import { useRef } from "react";

const TorusKnot = (props) => {
  const ref = useRef();
  const torusRef = useRef();

  // const { color, radius } = useControls({
  //   color: "#FFF",
  //   // radius: {
  //   //   value: 1.5,
  //   //   min: 1,
  //   //   max: 10,
  //   //   step: 0.5,
  //   // },
  // });

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta * 0.6;
    // ref.current.rotation.y += delta * 0.6;
    ref.current.rotation.z += delta * 0.6;
    // ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 1.5;
  });

  const { viewport } = useThree();

  // const materialProps = useControls({
  //   thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
  //   roughness: { value: 0, min: 0, max: 1, step: 0.1 },
  //   transmission: { value: 1, min: 0, max: 1, step: 0.1 },
  //   ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
  //   chromaticAberration: { value: 0.75, min: 0, max: 1 },
  //   backside: { value: true },
  // });

  const materialProps = {
    thickness: 0.2,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.75,
    backside: true,
  };

  return (
    <>
      <mesh ref={ref} position={props.position} scale={viewport.width / 16}>
        <torusKnotGeometry ref={torusRef} args={[1.5, 0.2, 70, 10, 6, 14]} />
        {/* <meshStandardMaterial color={props.color} /> */}
        {/* <MeshWobbleMaterial
        attach="material-0"
        factor={5}
        speed={2}
        color={color}
      /> */}
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </>
  );
};

TorusKnot.propTypes = {
  position: PropTypes.array,
  size: PropTypes.array,
};

export default TorusKnot;
