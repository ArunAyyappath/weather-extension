import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import "../css/layout.css";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

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

function DesignerComponent(props) {
  const classes = useStyles();
  //console.log(props.dataSwitch, "from");
  let dataDecider = props.dataSwitch[0];

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
class LayoutComponent extends Component {
  render() {
    return <DesignerComponent dataSwitch={this.props.dataShared} />;
  }
}

export default LayoutComponent;
