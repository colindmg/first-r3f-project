import { Canvas, useFrame } from "@react-three/fiber";
import PropTypes from "prop-types";
import { useRef } from "react";
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
  return (
    <mesh position={props.position}>
      <sphereGeometry args={props.size} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

Sphere.propTypes = {
  position: PropTypes.array,
  size: PropTypes.array,
  color: PropTypes.string,
};

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />

      {/* <Cube position={[0, 0, 0]} color={"red"} size={[1, 1, 1]} /> */}
      <Sphere position={[0, 0, 0]} color={"red"} args={[1, 30, 30]} />

      {/* <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"red"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"yellow"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"blue"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"green"} size={[1, 1, 1]} />
      </group> */}
    </Canvas>
  );
};

export default App;
