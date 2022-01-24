import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CarCard from '../../../components/CarCard';
import Loading from '../../../components/Loading';
import Home from '../../../pages';
import NotFound from '../../../pages/notFound';

describe("NotFound", () => {
  it('should move to notfound page after visiting car id that does not exist', async () => {
    render(
      <Suspense fallback={< Loading />}>
        <Router>
          <CarCard
            stockNumber={10141}
            manufacturerName={'Tesla'}
            modelName={'Model S'}
            mileage={{
              number: 10077,
              unit: 'km'
            }}
            fuelType={'Petrol'}
            color={'white'}
            pictureUrl={'car.png'}
          />
          <NotFound />
        </Router>
      </Suspense>
    );
    expect(await screen.findByText('View details')).toBeInTheDocument();
    const leftClick = { button: 0 }
    userEvent.click(await screen.findByText("View details"), leftClick);
    expect(await screen.findByText('404 - Not Found')).toBeInTheDocument();
    expect(await screen.findByText('Sorry, the page you are looking for does not exist.')).toBeInTheDocument();
  });
  it('should move back to home page after clicking homepage link on the not found page', async () => {
    render(
      <Suspense fallback={< Loading />}>
        <Router>
          <Home/>
          <NotFound />
        </Router>
      </Suspense>
    );
    expect(await screen.findByText('homepage')).toBeInTheDocument();
    const leftClick = { button: 0 }
    userEvent.click(await screen.findByText("homepage"), leftClick);
    expect(await screen.findByTestId('home-wrapper')).toBeInTheDocument();
  });
});


