/* eslint-disable react/no-unknown-property */
import { useGSAP } from "@gsap/react";
import { MeshTransmissionMaterial, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import PropTypes from "prop-types";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

const TorusKnot = (props) => {
  const ref = useRef();
  const torusRef = useRef();
  const tl = useRef();
  const scroll = useScroll();

  const { viewport } = useThree();

  const materialProps = {
    thickness: 0.1,
    roughness: 0,
    transmission: 1,
    ior: 1.2,
    chromaticAberration: 0.7,
    backside: false,
  };

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta * 0.6;
    // ref.current.rotation.y += delta * 0.6;
    // ref.current.rotation.z += delta * 0.6;
    // ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 1.5;

    if (ref.current) {
      ref.current.rotation.z += delta * 0.6;

      tl.current.seek(scroll.offset * tl.current.duration());
    }
  });

  useGSAP(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      ref.current.position,
      {
        duration: 2,
        z: 5.3,
      },
      0
    );
  });

  return (
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
  );
};

TorusKnot.propTypes = {
  position: PropTypes.array,
  size: PropTypes.array,
};

export default TorusKnot;
