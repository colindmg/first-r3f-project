import { Canvas } from "@react-three/fiber";
import PropTypes from "prop-types";
import "./App.css";

export const Cube = (props) => {
  return (
    <mesh position={props.position}>
      <boxGeometry />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

Cube.propTypes = {
  position: PropTypes.array,
};

const App = () => {
  return (
    <Canvas>
      <directionalLight position={[0, 0, 2]} />

      <Cube position={[1, 0, 0]} />
      <Cube position={[-1, 0, 0]} />
      <Cube position={[1, 2, 0]} />
      <Cube position={[-1, 2, 0]} />
    </Canvas>
  );
};

export default App;
