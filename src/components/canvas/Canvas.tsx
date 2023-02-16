import './Canvas.css'
import React, { useEffect, useRef } from 'react'
import {Canvas as FiberCanvas } from '@react-three/fiber';
import { AppOrbitControls } from '../controls/app-orbit-controls/AppOrbitControls';

export const Canvas = () => {
    const fiberCanvasRef = useRef<any>();

    useEffect(() => {
        if (fiberCanvasRef.current) {
            
        }
    }, [])

    return (
        <FiberCanvas ref={fiberCanvasRef} className={"canvas"}>
            <mesh>
                <AppOrbitControls />
                <ambientLight intensity={0.1} />
                <directionalLight intensity={1} position={[-1, 1, 0]} />
            </mesh>
        </FiberCanvas>
    );
};
