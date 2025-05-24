
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Box } from "@react-three/drei";
import { Mesh } from "three";

const AnimatedCube = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Box ref={meshRef} args={[2, 2, 2]} position={[0, 0, 0]}>
      <meshStandardMaterial 
        color="#00d4ff" 
        emissive="#001122"
        roughness={0.1}
        metalness={0.8}
      />
    </Box>
  );
};

export default AnimatedCube;
