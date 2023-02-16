import './App.css'

import React from 'react';
import {Canvas} from "../canvas/Canvas";

export const App = () => {
    return (
        <div className="app-component" data-testid="app-component">
            <Canvas/>
        </div>
    );
};
