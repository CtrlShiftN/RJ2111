import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // khoi chay component can test
  render(<App />);
  // tim 1 element tren man hinh
  const plusElement = screen.getByText("+1");
  // thu su kien
  fireEvent.click(plusElement);
  // tim kiem ket qua nen tra ve sau khi thuc hien su kien
  const result = screen.getByText("2");
  // kiem tra
  expect(result).toBeInTheDocument();
});
