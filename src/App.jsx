/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Scene from "./Scene";

const App = () => {
  return (
    <>
      <Canvas>
        <Scene />
      </Canvas>

      <div className="w-full h-full fixed top-5 left-16 pointer-events-none ">
        <img src="/icons/icon.svg" alt="Icon Logo" className="w-10" />
      </div>
    </>
  );
};

export default App;
