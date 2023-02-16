import './Canvas.css'
import React, { useEffect, useRef } from 'react'
import {Canvas as FiberCanvas } from '@react-three/fiber';

export const Canvas = () => {
    const fiberCanvasRef = useRef<any>();

    useEffect(() => {
        if (fiberCanvasRef.current) {
            
        }
    }, [])

    return (
        <FiberCanvas ref={fiberCanvasRef} className={"canvas"}>
            <mesh>
                <sphereGeometry />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={1} position={[-1, 1, 0]} />
                <meshStandardMaterial color={0xff0000} />
            </mesh>
        </FiberCanvas>
    );
};
