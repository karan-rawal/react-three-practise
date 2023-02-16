import { useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as React from 'react';
import { AxesHelper } from 'three';

export const AppOrbitControls = () => {
    const { camera, gl } = useThree();
    
    React.useEffect(() => {
        new OrbitControls(camera, gl.domElement);
    }, [camera, gl]);

    return (
        <></>
    )
};