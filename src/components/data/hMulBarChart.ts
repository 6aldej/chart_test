const hMulBarChart = {
  xAxis: {
    title: {
      text: "",
    },
  },
  series: [
    {
      name: "Высокая нагрузка",
      pointWidth: 25,
      color: "#d9424a",
      data: [
        {
          x: Date.UTC(2020, 0, 1, 4, 30, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 50, 0, 0),
          y: 0,
          color: "#d9424a",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 50, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 60, 0, 0),
          y: 0,
          color: "#d9424a",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 60, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 70, 0, 0),
          y: 0,
          color: "#d9424a",
        },
        {
          x: Date.UTC(2020, 0, 1, 5, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 10, 0, 0),
          y: 1,
          color: "#d9424a",
        },
        {
          x: Date.UTC(2020, 0, 1, 5, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 20, 0, 0),
          y: 1,
          color: "#d9424a",
        },
        {
          x: Date.UTC(2020, 0, 1, 5, 20, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 30, 0, 0),
          y: 1,
          color: "#d9424a",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 40, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 50, 0, 0),
          y: 2,
          color: "#d9424a",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 50, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 60, 0, 0),
          y: 2,
          color: "#d9424a",
        },
        {
          x: Date.UTC(2020, 0, 1, 5, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 20, 0, 0),
          y: 2,
          color: "#d9424a",
        },
      ],
    },
    {
      name: "Средняя нагрузка",
      pointWidth: 25,
      color: "#fbba57",
      data: [
        {
          x: Date.UTC(2020, 0, 1, 0, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 0, 10, 0, 0),
          y: 0,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 2, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 2, 10, 0, 0),
          y: 0,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 70, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 20, 0, 0),
          y: 0,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 5, 30, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 40, 0, 0),
          y: 0,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 0, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 0, 10, 0, 0),
          y: 1,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 0, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 0, 20, 0, 0),
          y: 1,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 0, 20, 0, 0),
          x2: Date.UTC(2020, 0, 1, 0, 30, 0, 0),
          y: 1,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 0, 30, 0, 0),
          x2: Date.UTC(2020, 0, 1, 0, 40, 0, 0),
          y: 1,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 2, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 2, 10, 0, 0),
          y: 1,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 5, 30, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 40, 0, 0),
          y: 1,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 20, 0, 0),
          y: 2,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 20, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 30, 0, 0),
          y: 2,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 30, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 40, 0, 0),
          y: 2,
          color: "#fbba57",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 60, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 70, 0, 0),
          y: 2,
          color: "#fbba57",
        },
      ],
    },
    {
      name: "Нет нагрузки",
      pointWidth: 25,
      color: "#c4c4c4",
      data: [
        {
          x: Date.UTC(2020, 0, 1, 0, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 1, 10, 0, 0),
          y: 0,
          color: "#c4c4c4",
        },
        {
          x: Date.UTC(2020, 0, 1, 1, 20, 0, 0),
          x2: Date.UTC(2020, 0, 1, 1, 30, 0, 0),
          y: 0,
          color: "#c4c4c4",
        },
        {
          x: Date.UTC(2020, 0, 1, 1, 40, 0, 0),
          x2: Date.UTC(2020, 0, 1, 2, 0, 0, 0),
          y: 0,
          color: "#c4c4c4",
        },
        {
          x: Date.UTC(2020, 0, 1, 2, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 3, 0, 0, 0),
          y: 0,
          color: "#c4c4c4",
        },
        {
          x: Date.UTC(2020, 0, 1, 3, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 0, 0, 0),
          y: 0,
          color: "#c4c4c4",
        },
        {
          x: Date.UTC(2020, 0, 1, 0, 40, 0, 0),
          x2: Date.UTC(2020, 0, 1, 2, 0, 0, 0),
          y: 1,
          color: "#c4c4c4",
        },
        {
          x: Date.UTC(2020, 0, 1, 2, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 0, 0, 0),
          y: 1,
          color: "#c4c4c4",
        },
        {
          x: Date.UTC(2020, 0, 1, 0, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 0, 0, 0),
          y: 2,
          color: "#c4c4c4",
        },
        {
          x: Date.UTC(2020, 0, 1, 5, 20, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 40, 0, 0),
          y: 2,
          color: "#c4c4c4",
        },
      ],
    },
    {
      name: "Нет данных",
      pointWidth: 25,
      color: "black",
      data: [
        {
          x: Date.UTC(2020, 0, 1, 1, 10, 0, 0),
          x2: Date.UTC(2020, 0, 1, 1, 20, 0, 0),
          y: 0,
          color: "black",
        },
        {
          x: Date.UTC(2020, 0, 1, 1, 30, 0, 0),
          x2: Date.UTC(2020, 0, 1, 1, 40, 0, 0),
          y: 0,
          color: "black",
        },
        {
          x: Date.UTC(2020, 0, 1, 3, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 3, 10, 0, 0),
          y: 0,
          color: "black",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 30, 0, 0),
          y: 0,
          color: "black",
        },
        {
          x: Date.UTC(2020, 0, 1, 5, 20, 0, 0),
          x2: Date.UTC(2020, 0, 1, 5, 30, 0, 0),
          y: 0,
          color: "black",
        },
        {
          x: Date.UTC(2020, 0, 1, 4, 0, 0, 0),
          x2: Date.UTC(2020, 0, 1, 4, 10, 0, 0),
          y: 2,
          color: "black",
        },
      ],
    },
  ],
};

export default hMulBarChart;
