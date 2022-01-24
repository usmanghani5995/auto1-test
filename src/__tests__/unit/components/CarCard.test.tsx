import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarCard from '../../../components/CarCard';
import CarDetailComponent from '../../../components/CarDetailComponent';
import Loading from '../../../components/Loading';

describe("CarCard", () => {
  it('should display Car Details in the carCard show in the carList', () => {
    render(
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
      </Router>
    );
    expect(screen.getByText('Tesla Model S')).toBeInTheDocument();
    expect(screen.getByText("Stock # 10141 - 10077 km - Petrol - white")).toBeInTheDocument();
    expect(screen.getByAltText('car')).toBeInTheDocument();
    expect(screen.getByText('View details')).toBeInTheDocument();
  });

  it('should move to car detail page and show car details after clicking View details', () => {
    render(
      <Suspense fallback={< Loading />}>
      <Router>
        <Routes>
          <Route element={
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
          />} path="/" />
          <Route element={
            <CarDetailComponent
              stockNumber={10141}
              manufacturerName={'Tesla'}
              modelName={'Model S'}
              mileage={{
                number: 10077,
                unit: 'km'
              }}
              fuelType={'Petrol'}
              color={'white'}
            />
          } path="/:id" />

        </Routes>
      </Router>
      </Suspense>
    );
    expect(screen.getByText('View details')).toBeInTheDocument();
    const leftClick = { button: 0 }
    userEvent.click(screen.getByText("View details"), leftClick);
    expect(screen.getByText('Tesla Model S')).toBeInTheDocument();
    expect(screen.getByText('Save')).toBeInTheDocument();
    expect(screen.getByText("Stock # 10141 - 10077 km - Petrol - white")).toBeInTheDocument();
    expect(screen.getByText('This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.')).toBeInTheDocument();
    expect(screen.getByText('If you like this car, click the button and save it in your collection of favourite items.')).toBeInTheDocument();
  });
});


