import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import hBarChart from "../data/hBarChart";

const HorBarChart: React.FC<{
  innerRef: any;
  title: string;
  legend: boolean;
  refs: { [key: string]: React.MutableRefObject<any> };
}> = ({ innerRef, title, legend, refs }) => {
  const options = {
    chart: {
      type: "bar",
      marginTop: 60,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: title,
      margin: 0,
      y: 35,
      style: {
        fontSize: "16px",
      },
    },
    legend: {
      enabled: legend,
      align: "center",
      verticalAlign: "top",
      floating: true,
      y: -10,
    },
    yAxis: {
      title: {
        text: "",
      },
      reversedStacks: false,
      visible: false,
    },
    xAxis: {
      gridLineWidth: 1,
      categories: hBarChart.xAxis.categories,
    },
    tooltip: {
      shared: true,
    },

    plotOptions: {
      bar: {
        stacking: "percent",
      },
      series: {
        events: {
          legendItemClick: (function (component: any) {
            return function (this: any) {
              if (
                refs.chart1 &&
                refs.chart1?.current &&
                refs.chart1?.current?.chart
              ) {
                const chart = refs.chart1?.current?.chart;
                const series = chart.get(this.options.id);

                if (series) {
                  if (this.visible) {
                    series.hide();
                  } else {
                    series.show();
                  }
                }
              }
              if (
                refs.chart2 &&
                refs.chart2?.current &&
                refs.chart2?.current?.chart
              ) {
                const chart = refs.chart2?.current?.chart;
                const series = chart.get(this.options.id);

                if (series) {
                  if (this.visible) {
                    series.hide();
                  } else {
                    series.show();
                  }
                }
              }
            };
          })(this),
        },
      },
    },

    series: hBarChart.series,
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: {
          height: 400,
          width: "33%",
        },
      }}
      ref={innerRef}
    />
  );
};

export default HorBarChart;
