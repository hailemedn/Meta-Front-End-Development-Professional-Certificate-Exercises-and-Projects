require('@testing-library/dom');
import { fireEvent, render, screen } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';

describe("Feedback Form", () => {
  test("submission is diabled if score is lower than 5 and there is no feedback", () => {
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit}/>);
  
    const rangeInput = screen.getByLabelText(/score:/);
    fireEvent.change(rangeInput, { target: {value: "4"}});
  
    const submitButton = screen.getByRole("Button")
    fireEvent.click(submitButton);
  
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled");
  
  
  });
});
