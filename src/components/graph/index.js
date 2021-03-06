import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";
import PropTypes from "prop-types";


function Graph({ casesType = "cases", ...props }) {
    const [data, setData] = useState({});

    const options = {
        legend: {
            display: false,
        },
        elements: {
            point: {
                radius: 0,
            },
        },
        maintainAspectRatio: false,
        tooltips: {
            mode: "index",
            intersect: false,
            callbacks: {
                label: (tooltipItem, data) => {
                    return numeral(tooltipItem.value).format("+0,0");
                },
            },
        },
        scales: {
            xAxes: [
                {
                    type: "time",
                    time: {
                        parser: "MM/DD/YY",
                        tooltipFormat: "ll",
                    },
                },
            ],
            yAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        //include dollar sign in the ticks
                        callback: (value, index, values) => {
                            return numeral(value).format("0a");
                        },
                    },
                },
            ],
        },
    };

    const buildChartDat = (data, casesType) => {
        const chartData = [];
        let lastDataPoint;

        for (let date in data.cases) {
            if (lastDataPoint) {
                const newDataPoint = {
                    x: date,
                    y: data[casesType][date] - lastDataPoint,
                };
                chartData.push(newDataPoint);
            }
            lastDataPoint = data[casesType][date];
        };
        return chartData;
    }

    useEffect(() => {
        const fetchData = async () => {
            await fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
                .then(response => response.json())
                .then(data => {
                    const chartData = buildChartDat(data, casesType);
                    setData(chartData);
                });
        };
        fetchData();
    }, [casesType]);


    return (
        <div className={props.className} data-test="main">
            {data?.length > 0 && (
                <Line data-test="main__line" options={options} data={{
                    datasets: [
                        {
                            backgroundColor: "rgba(204,16,520,0.2)",
                            borderColor: "#CC1034",
                            data: data,
                        },
                    ],
                }} />
            )}
        </div>
    )
};

Graph.propType = {
    casesType: PropTypes.string
};

export default Graph;
