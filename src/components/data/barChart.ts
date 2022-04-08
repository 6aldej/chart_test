const barChart = {
  yAxis: {
    title: {
      text: "",
    },
  },
  series: [
    {
      name: "Интервал меньше 8 сек. или больше 21 сек.",
      color: "#db5665",
      data: [
        27, 31, 32, 36, 25, 25, 36, 34, 29, 35, 34, 36, 27, 26, 25, 33, 27, 25,
        31, 30, 25, 25, 34, 30, 31, 34, 34, 29, 36, 25, 34, 31, 34, 31, 26, 27,
        28, 34, 36, 33, 27, 33, 27, 34, 25, 28, 35, 36, 30, 35,
      ],
    },
    {
      name: "Нормальный интервал",
      color: "#c4c4c4",
      data: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        18,
        18,
        18,
        25,
        16,
        15,
        20,
        19,
        15,
        17,
        17,
        25,
        18,
        16,
        18,
        25,
        17,
        22,
        20,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        20,
        16,
        24,
        17,
        23,
        17,
        null,
        null,
        null,
        null,
        null,
        null,
        23,
      ],
    },
  ],
};

export default barChart;
