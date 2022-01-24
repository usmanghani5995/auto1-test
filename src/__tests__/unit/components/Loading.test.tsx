import { render, screen } from '@testing-library/react'
import Loading from '../../../components/Loading';

describe("Loading", () => {
  it('should display loading progressbar', () => {
    render(
      <Loading />
    );
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});


