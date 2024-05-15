/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./Scene";

const App = () => {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
};

export default App;
