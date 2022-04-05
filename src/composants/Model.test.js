import React from 'react';
import Model from './Model';
import {render,screen} from '@testing-library/react'

it(" renders without crashing" , () => {
    render(<Model/> );
    const h5 = screen.getByText(/ Mission ID/i);
    expect(h5).toBeDefined()

})