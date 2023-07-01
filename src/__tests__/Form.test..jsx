import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../Components/Form';
import React from 'react';

test('Error de introducir campos invalidos', () => {
  render(<Form />);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  fireEvent.click(submitButton);


  const errorMessage = screen.getByText(/por favor verifique su información nuevamente/i);
  expect(errorMessage).toBeInTheDocument();
});

test('Mensaje de confirmación', () => {
  render(<Form />);
  

  const nameInput = screen.getByPlaceholderText(/name/i);
  fireEvent.change(nameInput, { target: { value: 'Test Name' } });

  const emailInput = screen.getByPlaceholderText(/email/i);
  fireEvent.change(emailInput, { target: { value: 'test@test.com' } });


  const submitButton = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(submitButton);


  const successMessage = screen.getByText(/gracias/i);
  expect(successMessage).toBeInTheDocument();
});
