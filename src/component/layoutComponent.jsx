import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import "../css/layout.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import moment from 'moment';

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#fff0"
  },
  dividerFullWidth: {
    margin: `5px 0 0 ${theme.spacing(2)}px`,
    color: "#007bff",
    textAlign: "left",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em"
  },
  dividerInset: {
    margin: `5px 0 0 ${theme.spacing(9)}px`
  },
  design: {
    color: "#fff",
    textTransform: "capitalize"
  }
}));

const DesignerComponent = (props) => {
  const classes = useStyles();
  let [dataDecider] = props.dataSwitch;
  const sunrise = moment(new Date(dataDecider.sunrise * 1000)).format('MMMM Do YYYY, h:mm:ss a');
  const sunset = moment(new Date(dataDecider.sunset * 1000)).format('MMMM Do YYYY, h:mm:ss a');

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemText
          className={classes.design}
          primary={`${dataDecider.weather} - ${dataDecider.cloudDescription}`}
          secondary={`Feels Like : ${Math.round(
            dataDecider.temp
          )}°C / min: ${Math.round(dataDecider.tempMin)}°C / max: ${Math.round(
            dataDecider.tempMax
          )}°C`}
        />
      </ListItem>

      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          {`${dataDecider.city} / ${dataDecider.country}`}
        </Typography>
      </li>
      <ListItem>
        <ListItemText
          className={classes.design}
          primary="Temperature"
          secondary={`${Math.round(dataDecider.temp)}°C`}
        />
        <ListItemText
          className={classes.design}
          primary="Humidity"
          secondary={`${dataDecider.humidity}%`}
        />
        <ListItemText
          className={classes.design}
          primary="Visibility"
          secondary={`${dataDecider.visibility} km`}
        />
      </ListItem>

      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption">

        </Typography>
      </li>
      <ListItem>
        <ListItemText
          className={classes.design}
          primary="Sunrise"
          secondary={`${sunrise}`}
        />
        <ListItemText
          className={classes.design}
          primary="Sunset"
          secondary={`${sunset}`}
        />
      </ListItem>

      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Wind
        </Typography>
      </li>
      <ListItem>
        <ListItemText
          className={classes.design}
          primary="Speed"
          secondary={`${dataDecider.windSpeed} km/h`}
        />
        <ListItemText
          className={classes.design}
          primary="Degree"
          secondary={`${dataDecider.windDeg}`}
        />
      </ListItem>
      <Divider component="li" />
      <li>
        <Typography
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Location
        </Typography>
      </li>
      <ListItem>
        <ListItemText
          className={classes.design}
          primary="Latitude"
          secondary={`${dataDecider.lat}`}
        />
        <ListItemText
          className={classes.design}
          primary="Longitude"
          secondary={`${dataDecider.lon}`}
        />
      </ListItem>
    </List>
  );
}

const LayoutComponent = (props) => (<DesignerComponent dataSwitch={props.dataShared} />)

export default LayoutComponent;
