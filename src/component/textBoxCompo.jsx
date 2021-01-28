import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import LayoutComponent from "./layoutComponent";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles({
  root: {
    padding: "2px 4px",
    display: "flex",
    height: 38,
    alignItems: "center",
    backgroundColor: "#ffffffc7"
  },
  input: {
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  design: {
    padding: 25
  },
  svgColor: {
    color: "#000"
  }
});

const CircularProgressCompo = () => (<CircularProgress disableShrink />);

const CustomizedInputSet = () => {
  const classes = useStyles();
  let [txt, setTxt] = useState(""),
    [data, setData] = useState([]),
    [render, isRender] = useState(false),
    [error, isError] = useState(false),
    shouldChange = false;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      function showPosition(position) {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        const initialCall = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2d01ecc3fec0482d38b88b031e79f400`;
        fetch(initialCall)
          .then(res => res.json())
          .then(response => {
            if (response.cod !== "400") {
              setDataCheck(response);
            }
          });
      }
    }
  }, [shouldChange]);

  async function handleCall() {
    if (txt !== "") {
      const dataSet = await `https://api.openweathermap.org/data/2.5/weather?q=${txt}&appid=2d01ecc3fec0482d38b88b031e79f400`;
      fetch(dataSet)
        .then(response => response.json())
        .then(res => {
          if (res.cod !== "400") {
            setDataCheck(res);
          }
        });
    }
  }

  const setDataCheck = (weatherDetail) => {
    if (weatherDetail.cod !== "404") {
      let dataCombined = [
        {
          temp: weatherDetail.main.temp - 273.15,
          tempMax: weatherDetail.main.temp_max - 273.15,
          tempMin: weatherDetail.main.temp_min - 273.15,
          pressure: weatherDetail.main.pressure,
          country: weatherDetail.sys.country,
          humidity: weatherDetail.main.humidity,
          weather: weatherDetail.weather[0].main,
          cloudDescription: weatherDetail.weather[0].description,
          city: weatherDetail.name,
          visibility: `${weatherDetail.visibility}`.split("")[0],
          lon: weatherDetail.coord.lon,
          lat: weatherDetail.coord.lat,
          windSpeed: weatherDetail.wind.speed,
          windDeg: weatherDetail.wind.deg,
          ...(weatherDetail.sys && {
            sunrise: weatherDetail.sys.sunrise ? weatherDetail.sys.sunrise : null,
            sunset: weatherDetail.sys.sunset ? weatherDetail.sys.sunset : null
          })
        }
      ];

      setData((data = dataCombined));
      isRender((render = true));
    } else {
      isError((error = true));
      isRender((render = false));
      setData((data = []));
    }
  }

  return (
    <>
      <div className={classes.design}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="City"
            inputProps={{ "aria-label": "search weather" }}
            onChange={ev => setTxt((txt = ev.currentTarget.value))}
          />
          <IconButton
            className={classes.iconButton}
            aria-label="search"
            onClick={handleCall}
          >
            <SearchIcon className={classes.svgColor} />
          </IconButton>
        </Paper>
      </div>
      {render ? (
        <LayoutComponent dataShared={data} />
      ) : error ? (
        <p>City not found ..!</p>
      ) : (
            <CircularProgressCompo />
          )}
    </>
  );
}

export default CustomizedInputSet;
