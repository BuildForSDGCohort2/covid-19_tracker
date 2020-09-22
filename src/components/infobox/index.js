import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import "./index.css";

const InfoBox = ({ title, cases, total, ...props }) => {
  if (!title && !cases && !total) {
    return null;
  }

  return (
    <>
      <Card onClick={props.onClick} data-test="infoBoxcard" className={`infoBox ${props.active && "infoBox--selected"} ${props.isRed && "infoBox--red"}`}>
        <CardContent data-test="infoBox__cardcontent">
          <Typography color="textSecondary" className="infoBox__title" data-test="infoBox__title">{title}</Typography>
          <h2 className={`infoBox__cases ${!props.isRed && "infoBox__cases--green"}`} data-test="infoBox__cases">{cases}</h2>
          <Typography color="textSecondary" className="infoBox__total" data-test="infoBox__total">{total} Total</Typography>
        </CardContent>
      </Card>
    </>
  );
}

InfoBox.propTypes = {
  title: PropTypes.string,
  cases: PropTypes.number,
  total: PropTypes.number
};

export default InfoBox;
