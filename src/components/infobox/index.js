import React, { Component } from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

class InfoBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const { title, cases, total } = this.props;

    if (!title && !cases && !total) {
      return null;
    }

    return (
      <>
        <Card data-test="infoBoxcard">
          <CardContent data-test="infoBox__cardcontent">
            {/*Title*/}
            <Typography color="textSecondary" className="infoBox__title" data-test="infoBox__title">{title}</Typography>
            {/*Number of cases*/}
            <h1 className="infoBox__cases" data-test="infoBox__cases">{cases}</h1>
            {/*Total*/}
            <Typography color="textSecondary" className="infoBox__total" data-test="infoBox__total">{total} Total</Typography>
          </CardContent>
        </Card>
      </>
    );

  }

};

InfoBox.propTypes = {
  title: PropTypes.string,
  cases: PropTypes.number,
  total: PropTypes.number
};

export default InfoBox;
