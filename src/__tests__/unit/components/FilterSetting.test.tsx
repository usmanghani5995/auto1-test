import { render, screen } from '@testing-library/react'
import { Suspense } from 'react';
import FilterSetting from '../../../components/FilterSetting';
import Loading from '../../../components/Loading';

const mockedHandleFilter = jest.fn();
const mockedHandleColorChange = jest.fn();
const mockedHandleManufacturerChange = jest.fn();
const mockedHandleSortByChange = jest.fn();

describe("FilterSetting", () => {
  it('should display filter setting info', async () => {
    render(
      <Suspense fallback={< Loading />}>
        <FilterSetting
          colors={["white", "red"]}
          manufacturers={["Audi", "Tesla"]}
          handleFilter={mockedHandleFilter}
          color={''}
          handleColorChange={mockedHandleColorChange}
          manufacturer={''}
          handleManufacturerChange={mockedHandleManufacturerChange}
          sortBy={''}
          handleSortByChange={mockedHandleSortByChange}
          sort={''}
        />
      </Suspense>
      
    );
    expect(await screen.findAllByRole('button')).toBeTruthy();
    expect(await screen.findByText('Color')).toBeInTheDocument();
    expect(await screen.findByText('Manufacturer')).toBeInTheDocument();
    expect(await screen.findByText('All car colors')).toBeInTheDocument();
    expect(await screen.findByText('All manufacturers')).toBeInTheDocument();
    expect(await screen.findByText('Sort by')).toBeInTheDocument();
    expect(await screen.findByText('None')).toBeInTheDocument();
    expect(await screen.findByText('Filter')).toBeInTheDocument();
  });
});


