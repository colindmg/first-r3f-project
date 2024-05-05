/* eslint-disable react/no-unknown-property */
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
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

  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta;
  //   ref.current.rotation.y += delta * 2;
  //   ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2;
  // });

  return (
    <mesh ref={ref} position={props.position}>
      <torusKnotGeometry args={props.size} />
      {/* <meshStandardMaterial color={props.color} /> */}
      <MeshWobbleMaterial factor={5} speed={2} />
    </mesh>
  );
};

TorusKnot.propTypes = {
  position: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 2, 2]} />
      <ambientLight />

      {/* <Cube position={[0, 0, 0]} color={"red"} size={[1, 1, 1]} /> */}
      {/* <Sphere position={[0, 0, 0]} color={"red"} args={[1, 30, 30]} /> */}
      {/* <Torus
        position={[2, 0, 0]}
        color={"lightblue"}
        size ={[0.5, 0.1, 30, 30]}
  /> */}
      <TorusKnot
        position={[0, 0, 0]}
        color={"lightgreen"}
        size={[1, 0.1, 1000, 50]}
      />

      {/* 4 CUBES DE COULEUR */}
      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"red"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"yellow"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"blue"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"green"} size={[1, 1, 1]} />
      </group> */}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default App;
