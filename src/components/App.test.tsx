import React from 'react';
import {render, screen} from '@testing-library/react';
import {App} from './App';

describe("components/App", () => {
    test('renders successfully', () => {
        render(<App/>);
        expect(screen.getByTestId("app-component")).toBeInTheDocument();
    });
});
