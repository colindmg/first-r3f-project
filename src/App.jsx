import { Canvas } from "@react-three/fiber";
import PropTypes from "prop-types";
import "./App.css";

export const Cube = (props) => {
  return (
    <mesh position={props.position}>
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

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />
      <ambientLight />

      <group position={[0, -1, 0]}>
        <Cube position={[1, 0, 0]} color={"red"} size={[1, 1, 1]} />
        <Cube position={[-1, 0, 0]} color={"yellow"} size={[1, 1, 1]} />
        <Cube position={[1, 2, 0]} color={"blue"} size={[1, 1, 1]} />
        <Cube position={[-1, 2, 0]} color={"green"} size={[1, 1, 1]} />
      </group>
    </Canvas>
  );
};

export default App;
