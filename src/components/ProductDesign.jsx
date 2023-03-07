import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import Shoe from './Shoe';

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 100px;
  right: 50px;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment='city' intensity={0.6}>
          <Shoe />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

export default ProductDesign;
