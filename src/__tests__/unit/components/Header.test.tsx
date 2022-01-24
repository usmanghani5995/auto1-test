import { render, screen } from '@testing-library/react'
import Header from '../../../components/Header';

describe("Header", () => {
  it('should display header info', () => {
    render(
      <Header />
    );
    expect(screen.getByAltText('Auto-1')).toBeInTheDocument();
    expect(screen.getByText('Purchase')).toBeInTheDocument();
    expect(screen.getByText('My Orders')).toBeInTheDocument();
    expect(screen.getByText('Sell')).toBeInTheDocument();
  });
});


