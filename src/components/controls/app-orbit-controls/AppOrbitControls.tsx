import { useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as React from 'react';

export const AppOrbitControls = () => {
    const { camera, gl, scene } = useThree();
    
    React.useEffect(() => {
        new OrbitControls(camera, gl.domElement);
    }, [camera, gl, scene]);

    return (
        <></>
    )
};