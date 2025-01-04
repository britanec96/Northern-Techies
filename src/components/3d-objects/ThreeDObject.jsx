import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


const ReactLogo = () => {
    const { scene } = useGLTF('/3d models/scene.gltf');


  return <primitive object={scene} scale={0.5} />;
};

const App = () => (
  <Canvas className="absolute -bottom-20 right-0 w-full">
    <ambientLight intensity={0.3} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <ReactLogo />
    <OrbitControls enableZoom={false} />
  </Canvas>
);

export default App;
