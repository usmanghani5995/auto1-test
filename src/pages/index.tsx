import { Box, createStyles, Grid, makeStyles } from "@material-ui/core";
import axios from "axios";
import { BaseSyntheticEvent, lazy, useEffect, useState } from "react";
import { carData } from "../mocks/carData";
import { Pagination } from "@material-ui/lab";
import { IHandleFilter } from "../types/components";
import { siteTheme } from "../utils/siteTheme";

const CarList = lazy(() => import("../components/CarList"));
const FilterSetting = lazy(() => import("../components/FilterSetting"));

const useStyles = makeStyles(() =>
  createStyles({
    homeWrapper: {
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      marginTop:"24px",
      marginLeft:"24px",
    },
    carListWrapper:{
      marginLeft: "24px"
    },
    pagination:{
      marginTop: siteTheme.margin.large
    }
  }));

const Home = ():JSX.Element => {

  const { homeWrapper, carListWrapper, pagination } = useStyles();

  //Car Data
  const [carsData, setCarData] = useState(carData);

  //Filter Options
  const [colorOptions, setColorOptions] = useState([""]);
  const [manufacturerOptions, setManufacturerOptions] = useState([""]);

  //Filter Values
  const [colorValue, setColorValue] = useState("");
  const [manufacturerValue, setManufacturerValue] = useState("");
  const [sortByValue, setSortByValue] = useState("");
  const [sortValue, setSortValue] = useState("");

  //Loading State
  const [loading, setLoading] = useState(true);

  //Pagination State
  const [page, setPage] = useState(1);

  //Functions for Handling Changing Filter Value
  const handleColorChange = (event: BaseSyntheticEvent) => {
    setColorValue(event.target.value);
  };
  const handleManufacturerChange = (event: BaseSyntheticEvent) => {
    setManufacturerValue(event.target.value);
  };
  const handleSortByChange = (event: BaseSyntheticEvent) => {
    setSortByValue(event.target.value);
    if (event.target.value === "") {
      setSortValue("");
    }
    if (event.target.value === "Mileage - Ascending") {
      setSortValue("asc");
    }
    if (event.target.value === "Mileage - Decending") {
      setSortValue("des");
    }
  };

  // Functions for Fetching Data

  // Initial Data fetching for cars and filter options
  const getData = () => {
      const carsData = axios.get("https://auto1-mock-server.herokuapp.com/api/cars");
      const colorsData = axios.get(
        "https://auto1-mock-server.herokuapp.com/api/colors"
      );
      const manufacturersData = axios.get(
        "https://auto1-mock-server.herokuapp.com/api/manufacturers"
      );
      axios.all([carsData, colorsData, manufacturersData]).then(
        axios.spread((...allData)=>{
          setCarData(allData[0].data);
          setColorOptions(allData[1].data.colors);
          const manufacturerOptions = allData[2].data.manufacturers.map(
            (manufacturer:Record<string, string>) => manufacturer.name);
          setManufacturerOptions(manufacturerOptions);
          setLoading(false);
        })
      ).catch(error=>{
      console.error("Error fetching data: ", error);
      setCarData(carData);
      setLoading(true);
    });        
  }

  // Function to fetch filtered results
  const handleFilter = (data: IHandleFilter): void => {
    setPage(1);
    setLoading(true);
    axios.get(`https://auto1-mock-server.herokuapp.com/api/cars`, data).then((response)=>{
      setCarData(response.data);
      setLoading(false);
    }).catch((error) => {
        console.error("Error fetching data: ", error);
        setCarData(carData);
        setLoading(true);
      });
  }

  // Function to handle pagination
  const handlePageChange = (event: BaseSyntheticEvent, value: number) => {
    setPage(value);
    const data = {
      params: {
        color: colorValue,
        manufacturer: manufacturerValue,
        sort: sortValue,
        page: value,
      },
    };
    setLoading(true);
    axios.get(
      `https://auto1-mock-server.herokuapp.com/api/cars`,
      data
    ).then((response) => {
      setCarData(response.data);
          setLoading(false);
        }
      ).catch((error) => {
        console.error("Error fetching data: ", error);
        setCarData(carData);
        setLoading(true);
      });
  };

  useEffect(()=>{
    getData();
  },[]);
  
  return (
    <Box className={homeWrapper} data-testid="home-wrapper">
      <Grid container>
        <Grid item md={3}>
          <FilterSetting
            colors={colorOptions}
            manufacturers={manufacturerOptions}
            handleFilter={handleFilter}
            color={colorValue}
            handleColorChange={handleColorChange}
            handleManufacturerChange={handleManufacturerChange}
            handleSortByChange={handleSortByChange}
            manufacturer={manufacturerValue}
            sort={sortValue}
            sortBy={sortByValue}
          />
        </Grid>
        <Grid item md={8} className={carListWrapper}>
          <CarList loading={loading} carsData={carsData} />
        </Grid>
      </Grid>
      <Pagination
        className={pagination}
        page={page}
        variant="outlined"
        showFirstButton
        showLastButton
        count={Math.ceil(carsData?.totalCarsCount / 10)}
        onChange={(event, value) => handlePageChange(event, value)}
        color="primary"
      />
    </Box>
  );
};

export default Home;
