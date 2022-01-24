import axios from "axios";
import { lazy, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { carData } from "../mocks/carData";

const CarDetailComponent = lazy(() => import("../components/CarDetailComponent"));
const Loading = lazy(() => import("../components/Loading"));
const NotFoundComponent = lazy(() => import("../components/NotFound"));

const CarDetail = () => {
const [isAvailable, setIsAvailable] = useState(false);
  const [carDetail, setCarDetail] = useState(carData.cars[0]);
const [loading, setLoading] = useState(true);
const params = useParams();

async function getData() {
  await axios(`https://auto1-mock-server.herokuapp.com/api/cars/${params.id}`)
    .then((response) => {
      setCarDetail(response.data.car);
      setIsAvailable(true);
    })
    .catch((error) => {
      setIsAvailable(false);
      console.error("Error fetching data: ", error);
    })
    .finally(() => {
      setLoading(false);
    });
}

useEffect(() => {
  getData();
});
  return loading ? <Loading /> : isAvailable ? <CarDetailComponent modelName={carDetail?.modelName} manufacturerName={carDetail?.manufacturerName
} stockNumber={carDetail?.stockNumber} mileage={carDetail?.mileage} fuelType={carDetail?.fuelType} color={carDetail?.color} /> : <NotFoundComponent />;
};

export default CarDetail;
