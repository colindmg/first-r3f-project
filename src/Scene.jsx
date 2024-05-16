/* eslint-disable react/no-unknown-property */
import { Environment, Scroll, ScrollControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import BackgroundTexts from "./BackgroundTexts";
import HtmlElements from "./HtmlElements";
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

  // useFrame(({ mouse, camera }) => {
  //   camera.position.x = THREE.MathUtils.lerp(
  //     camera.position.x,
  //     mouse.x * 0.5,
  //     0.03
  //   );
  //   camera.position.y = THREE.MathUtils.lerp(
  //     camera.position.y,
  //     mouse.y * 0.8,
  //     0.01
  //   );
  //   camera.position.z = THREE.MathUtils.lerp(
  //     camera.position.z,
  //     Math.max(4, Math.abs(mouse.x * mouse.y * 8)),
  //     0.01
  //   );
  //   camera.rotation.y = THREE.MathUtils.lerp(
  //     camera.rotation.y,
  //     mouse.x * -Math.PI * 0.025,
  //     0.001
  //   );
  // });
  useFrame(({ mouse, camera }) => {
    // Calculer la nouvelle position x de la caméra en fonction de la position de la souris
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouse.x * 0.5, // Ajustez le facteur de multiplication selon vos besoins
      0.05 // Ajustez la vitesse de transition selon vos besoins
    );

    // Calculer la nouvelle position y de la caméra en fonction de la position de la souris
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mouse.y * 0.3, // Ajustez le facteur de multiplication selon vos besoins
      0.05 // Ajustez la vitesse de transition selon vos besoins
    );

    // Fixer la caméra pour qu'elle regarde toujours droit devant
    camera.lookAt(new THREE.Vector3(camera.position.x, camera.position.y, 0));
  });

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

      {/* TEXTES DE FOND */}
      {/* <Text fontSize={0.3} position={[-6.5, 2.4, -5]}>
        MADE BY
      </Text>
      <Text
        fontSize={4}
        font="/fonts/Rosamila-Regular.ttf"
        fontStyle="italic"
        position={[0, 0, -5]}
      >
        Creatives
      </Text>
      <Text fontSize={0.3} position={[6.8, -2, -5]}>
        WORLDWIDE
      </Text> */}

      <ScrollControls pages={3}>
        {/* TEXTES DE FOND */}
        <BackgroundTexts />
        {/* FORME EFFET GLASS */}
        {/* <TorusKnot position={[0, 0, 0]} size={[0.3, 500, 50]} /> */}

        <Scroll html>
          <HtmlElements />
        </Scroll>
      </ScrollControls>

      {/* <OrbitControls enableZoom={false} /> */}
    </>
  );
};

export default Scene;
