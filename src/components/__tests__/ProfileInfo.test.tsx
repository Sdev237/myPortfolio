import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileInfo from '../Accueil';
import '@testing-library/jest-dom'; 
import '@testing-library/jest-dom/extend-expect'; 

test('renders ProfileInfo component', () => {
  render(<ProfileInfo />);
  const linkElement = screen.getByText(/Jedeon Sap/i);
  expect(linkElement).toBeInTheDocument();
}); 