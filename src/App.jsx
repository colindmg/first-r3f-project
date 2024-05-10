/* eslint-disable react/no-unknown-property */
import {
  Environment,
  MeshTransmissionMaterial,
  OrbitControls,
  Text,
  useHelper,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { DirectionalLightHelper } from "three";
import "./App.css";

export const Cube = (props) => {
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

export const Sphere = (props) => {
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

export const Torus = (props) => {
  return (
    <mesh position={props.position}>
      <torusGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

Torus.propTypes = {
  position: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

export const TorusKnot = (props) => {
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
  const color = "#FFF";

  useFrame((state, delta) => {
    // ref.current.rotation.x += delta * 0.3;
    ref.current.rotation.y += delta * 0.5;
    // ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2;
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
      <Text fontSize={1.4} position={[0, 0, -2]}>
        Wobble doodle
      </Text>
      <mesh ref={ref} position={props.position} scale={viewport.width / 16}>
        <torusKnotGeometry ref={torusRef} args={[2, ...props.size]} />
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

export const Scene = () => {
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

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
