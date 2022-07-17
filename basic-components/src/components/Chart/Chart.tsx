import React from "react";
import "./Chart.css";
import {ChartBar} from "./ChartBar";
import {DataPoints} from "../../utils/Interfaces";


export const Chart: React.FC<DataPoints> = ({dataPoints}) => {

    const dataPointValues = dataPoints.map(dataPoint => {
        return dataPoint.value
    });
    const maxValue = Math.max(...dataPointValues);

    return (<div className="chart">
        {dataPoints.map(dataPoint => <ChartBar id={dataPoint.id} key={dataPoint.id} value={dataPoint.value} maxValue={maxValue} label={dataPoint.label}/>)}
    </div>);
};
