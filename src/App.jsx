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

      <div className="w-screen h-20 fixed flex items-center justify-start top-0 left-0 pointer-events-none text-white px-20">
        <img src="/icons/icon.svg" alt="Icon Logo" className="w-10" />
      </div>
    </>
  );
};

export default App;
