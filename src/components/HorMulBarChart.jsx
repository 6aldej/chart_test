import Highcharts from "highcharts";
import xrange from "highcharts/modules/xrange";
import HighchartsReact from "highcharts-react-official";

import hMulBarChart from "./data/hMulBarChart";
import languageOptions from "../configs/chartsLanguageOptions";

Highcharts.setOptions({
  ...languageOptions,
});

xrange(Highcharts);

(function (H) {
  H.Legend.prototype.getAllItems = function () {
    var allItems = [];
    H.each(this.chart.series, function (series) {
      var seriesOptions = series && series.options;
      if (series.type === "xrange") {
        series.color = series.userOptions.color;
      }
      // Handle showInLegend. If the series is linked to another series,
      // defaults to false.
      if (
        series &&
        H.pick(
          seriesOptions.showInLegend,
          !H.defined(seriesOptions.linkedTo) ? undefined : false,
          true
        )
      ) {
        // Use points or series for the legend item depending on
        // legendType
        allItems = allItems.concat(
          series.legendItems ||
            (seriesOptions.legendType === "point" ? series.data : series)
        );
      }
    });

    H.fireEvent(this, "afterGetAllItems", { allItems: allItems });

    return allItems;
  };
})(Highcharts);

const HorMulBarChart = () => {
  const options = {
    chart: {
      type: "xrange",
    },
    title: {
      text: "График нагрузки кресел",
      margin: 0,
      style: {
        fontSize: "16px",
      },
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      type: "datetime",
      tickInterval: 1000 * 60,
    },
    legend: {
      enabled: true,
      align: "center",
      verticalAlign: "top",
    },
    yAxis: {
      title: {
        text: "",
      },
      categories: ["1", "2", "3"],
      reversed: true,
    },
    plotOptions: {
      series: {
        grouping: false,
      },
    },
    tooltip: {
      enabled: true,
    },
    series: hMulBarChart.series,
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      containerProps={{
        style: {
          height: 300,
          width: "100%",
        },
      }}
    />
  );
};

export default HorMulBarChart;
