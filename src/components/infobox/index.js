import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

const InfoBox = ({ title, cases, total }) => {
  return (
    <>
      <Card>
        <CardContent>
          {/*Title*/}
          <Typography color="textSecondary" className="infoBox__title">{title}</Typography>
          {/*Number of cases*/}
          <h1 className="infoBox__cases">{cases}</h1>
          {/*Total*/}
          <Typography color="textSecondary" className="infoBox__total">{total} Total</Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default InfoBox;

