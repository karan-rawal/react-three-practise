import './Canvas.css'
import {AxesHelperProps, Canvas as FiberCanvas } from '@react-three/fiber';
import { AppOrbitControls } from '../controls/app-orbit-controls/AppOrbitControls';
import {  Vector3 } from 'three';
import { appConfig } from '../../configs/config';
import { MainScene } from '../main-scene/MainScene';

export const Canvas = () => {
    const axes: AxesHelperProps = {
        scale: new Vector3(10, 10, 10),
    };

    return (
        <FiberCanvas className={"canvas"}>
            <MainScene />
            { appConfig.DEBUG &&<axesHelper {...axes} /> }
            { appConfig.DEBUG && <AppOrbitControls /> }
        </FiberCanvas>
    );
};
