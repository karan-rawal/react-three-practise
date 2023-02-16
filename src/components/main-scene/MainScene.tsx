import { useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Color, DirectionalLight } from "three";

export const MainScene = () => {
    const directionalLightRef = useRef<any>(null);

    useHelper(directionalLightRef, DirectionalLight);

    const {scene} = useThree();
    
    useEffect(() => {
        scene.background = new Color(0x000);
    }, [scene]);

    return (
        <>
            <mesh position={[0, 0, 0]}>
                <boxGeometry />
                <meshStandardMaterial color={0xff0000} />
            </mesh>
            <ambientLight color={new Color(0xffffff)} intensity={0.1} />
            <directionalLight ref={directionalLightRef} intensity={1} position={[-1, 1, 0]} />
        </>
    );
};