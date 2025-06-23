import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

const RotatingSphere = () => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh ref={meshRef}>
            <Sphere args={[1, 64, 64]}>
                <meshStandardMaterial wireframe color="lightblue" />
            </Sphere>
        </mesh>
    );
};

const Globe = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-[200px] sm:h-full z-0">
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[2, 5, 2]} />
                <RotatingSphere />
            </Canvas>
        </div>
    );
};

export default Globe; 