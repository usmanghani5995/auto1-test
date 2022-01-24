import { render, screen } from '@testing-library/react';
import Footer from '../../../components/Footer';

describe("Footer", () => {
  it('should display footer info', () => {
    render(
      <Footer />
    );
    expect(screen.getByText('© AUTO1 Group 2022')).toBeInTheDocument();
  });
});


