import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import barChart from "./data/barChart";

const BarChart = () => {
  const options = {
    chart: {
      type: "column",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "График интервалов между креслами за 25.02.22 и 24.02.22",
      margin: 0,
      style: {
        fontSize: "16px",
      },
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "top",
    },
    yAxis: {
      min: 1,
      max: 50,
      title: {
        text: "",
      },
      plotLines: [
        {
          dashStyle: "dash",
          color: "#8ec1f8",
          value: 25,
          width: 5,
          zIndex: 2,
        },
      ],
    },
    xAxis: {
      title: {
        text: "Пара кресел",
      },
      min: 1,
      max: 50,
      gridLineWidth: 1,
      tickInterval: 10,
    },
    tooltip: {
      shared: true,
    },
    plotOptions: {
      series: {
        pointStart: 1,
      },
    },
    series: barChart.series,
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: {
          height: "100%",
          width: "100%",
        },
      }}
    />
  );
};

export default BarChart;
