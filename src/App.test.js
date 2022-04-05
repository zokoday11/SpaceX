import React from 'react';
import {render,screen} from '@testing-library/react'
import App from './App';

it(" renders without crashing" , () => {
    render(<App/> );
    const h1 = screen.getByText(/Les lancements de Space X/i);
    expect(h1).toBeDefined()

})