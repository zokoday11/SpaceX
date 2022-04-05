import React from 'react';
import {render,screen} from '@testing-library/react'
import Card from './Card';

it(" renders without crashing" , () => {
    render(<Card/> );
    const button = screen.getByText(/Voir plus/i);
    expect(button).toBeDefined()

})