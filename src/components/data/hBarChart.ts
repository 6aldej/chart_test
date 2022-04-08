const hBarChart = {
  xAxis: {
    title: {
      text: "",
    },
    categories: ["10 фев.", "11 фев.", "12 фев."],
  },
  series: [
    {
      name: "Рабочее время",
      color: "#c4c4c4",
      id: "workingHours",
      data: [80, 85, 40],
    },
    {
      name: "Нерабочее время",
      color: "#db5665",
      id: "nonWorkingHours",
      data: [20, 15, 60],
    },
  ],
};

export default hBarChart;
