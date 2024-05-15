/* eslint-disable react/no-unknown-property */
import { Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import TorusKnot from "./TorusKnot";

const Scene = () => {
  const directionalLightRef = useRef();

  // const { lightColor, lightIntensity } = useControls({
  //   lightColor: "#ffffff",
  //   lightIntensity: {
  //     value: 0.5,
  //     min: 0,
  //     max: 5,
  //   },
  // });

  const lightColor = "#ffffff";
  const lightIntensity = 0.5;

  // useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight
        ref={directionalLightRef}
        position={[2, 1, 2]}
        color={lightColor}
        intensity={lightIntensity}
      />
      <ambientLight intensity={0.1} />
      <Environment preset="city" />

      {/* <Cube position={[0, 0, 0]} color={"red"} size={[1, 1, 1]} /> */}
      {/* <Sphere position={[0, 0, 0]} color={"red"} args={[1, 30, 30]} /> */}
      {/* <Torus
        position={[2, 0, 0]}
        color={"lightblue"}
        size ={[0.5, 0.1, 30, 30]}
  /> */}
      <TorusKnot position={[0, 0, 0]} size={[0.3, 500, 50]} />

      {/* 4 CUBES DE COULEUR */}
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"red"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"yellow"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"blue"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"green"} size={[1, 1, 1]} />
      </group> */}

      <OrbitControls enableZoom={false} />
    </>
  );
};

export default Scene;
