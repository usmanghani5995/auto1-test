import { render, screen } from '@testing-library/react'
import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import CarList from '../../../components/CarList';
import Loading from '../../../components/Loading';
import { carData } from '../../../mocks/carData';

describe("CarList", () => {
  it("should display list of Cars in the home page", async () => {
    render(
    <Suspense fallback={< Loading />}>
      <Router>
        <CarList loading={false} carsData={carData} />
      </Router>
    </Suspense>);
    expect((await screen.findAllByTestId("car-info")).length).toBe(10);
  });
});




