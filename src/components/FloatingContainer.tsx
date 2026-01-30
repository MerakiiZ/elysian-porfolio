import { useRef } from 'react';
import { useFrame, type RootState } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Group } from 'three';

// Import your existing component
import FeaturedArtworks from './FeaturedArt.tsx'; // Adjust path if necessary

// Define the type for the component's props
interface FloatingContainerProps {
  position: [number, number, number];
  rotation?: [number, number, number];
}

export function FloatingContainer({ position, rotation = [0, 0, 0] }: FloatingContainerProps) {
  // Specify the type for the ref. It will hold a THREE.Group.
  // Using `null!` tells TypeScript that this ref will be assigned a value.
  const groupRef = useRef<Group>(null!);

  // Add types for the useFrame callback arguments
  useFrame((state: RootState, delta: number) => {
    const elapsedTime = state.clock.getElapsedTime();
    
    // The ref's `current` property is now correctly typed as a Group
    // groupRef.current.position.y = position[1] + Math.sin(elapsedTime * 0.7) * 0.15;
    // groupRef.current.rotation.y += 0.002;
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation}>
      <Html 
        transform 
        center
        scale={2}
      >
        <div style={{ width: '1200px', height: '400px' }}>
          <FeaturedArtworks />
        </div>
      </Html>
    </group>
  );
}