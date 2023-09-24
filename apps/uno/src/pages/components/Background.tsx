import { MutableRefObject, PropsWithChildren, ReactNode, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader, BackSide, Vector3, DoubleSide } from "three";
import { OrbitControls, Stats, Text, Sparkles } from "@react-three/drei";
const Background = ({
  children,
  currentTurn,
}: {
  children: ReactNode[];
  currentTurn: string;
}) => {
  let snugglyMode = false;
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={5.5} />
        <directionalLight
          position={[0, 3, 5]}
          rotation={[Math.PI / 1, 1, 1]}
          intensity={2}
          visible
        />
        <directionalLight
          castShadow
          intensity={2.5}
          position={[2.5, 4, 3]}
          shadow-mapSize={[1024, 1024]}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Table />
        <fog attach="fog" args={["#35424f", 5, 15]} />
        <Character
          position={[0, -0.25, 2]}
          color="#991b1b"
          currentTurn={currentTurn === "red" && true}
          playerName="Player 3"
        />
        <Character
          position={[1, -0.25, 3]}
          color="#1e40af"
          currentTurn={currentTurn === "blue" && true}
          rotation={-1 * Math.PI * 0.25}
          playerName="Player 4"
        />
        <Character
          position={[-1, -0.25, 3]}
          color="#14532d"
          currentTurn={currentTurn === "green" && true}
          rotation={Math.PI * 0.25}
          playerName="Player 2"
        />
        <Room />
        {snugglyMode && <Stats />}
        {snugglyMode && <OrbitControls />}
      </Canvas>
      <div className=" opacity-60 transition-opacity hover:opacity-100 flex bg-transparent absolute bottom-0 left-0 gap-5 z-10 overflow-auto w-screen px-5  py-5">
        {children as ReactNode}
      </div>
    </div>
  );
};

const Table = () => {
  const [colorMap, displacementMap, roughnessMap] = useLoader(TextureLoader, [
    "./textures/wood/wood_diff.jpg",
    "./textures/wood/wood_disp.png",
    "./textures/wood/wood_rough.jpg",
  ]);
  return (
    <mesh position={[0, -1, 4.5]} scale={[1, 1, 3]}>
      <boxGeometry />
      <meshStandardMaterial
        displacementScale={0.2}
        map={colorMap}
        displacementMap={displacementMap}
        roughnessMap={roughnessMap}
      />
    </mesh>
  );
};
const Character = ({
  position,
  color = "black",
  currentTurn,
  rotation = 0,
  playerName,
}: {
  position: number[];
  color?: string;
  currentTurn: boolean;
  rotation?: number;
  playerName: string;
}) => {
  const texture = useLoader(
    TextureLoader,
    "./textures/backcard-screenshot.png"
  );
  return (
    <>
      <group
        position={new Vector3().fromArray(position)}
        rotation-y={rotation}
        onClick={() => {
          console.log(`${playerName}: isTurn: ${currentTurn}`);
        }}
      >
        <mesh scale={[0.5, 1, 4]}>
          <planeGeometry />
          <meshStandardMaterial map={texture} side={DoubleSide} />
        </mesh>
        {currentTurn && <Sparkles />}
        <Text
          scale={[0.25, 0.25, 0.25]}
          position={[0, 0.65, 0]}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {playerName}
        </Text>
      </group>
    </>
  );
};

const Room = () => {
  return (
    <mesh scale={[15, 15, 15]}>
      <boxGeometry />
      <meshStandardMaterial color="#35424f" side={BackSide} />
    </mesh>
  );
};

export default Background;
