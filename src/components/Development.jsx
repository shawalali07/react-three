import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Enigma from './Enigma';

const Development = () => {
  return (
    <Canvas>
      <Stage environment='city' intensity={0.6}>
        <Enigma />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Development;
