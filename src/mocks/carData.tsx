export const carData = {
  cars: (new Array(10)).fill(0).map((item, idx) => ({
    stockNumber: idx+1,
    manufacturerName: "",
    modelName: "",
    mileage: {
      number: 0,
      unit: "",
    },
    fuelType: "",
    color: "",
    pictureUrl: "",
  })),
  totalPageCount: 1,
  totalCarsCount: 10,
};