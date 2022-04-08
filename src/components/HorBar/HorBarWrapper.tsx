import React from "react";
import HorBarChart from "./HorBarChart";

const HorBarWrapper: React.FC<{}> = ({}) => {
  const chart1 = React.useRef<any>(null);
  const chart2 = React.useRef<any>(null);
  const chart3 = React.useRef<any>(null);

  const refs = {
    chart1,
    chart2,
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <HorBarChart
        title="1 смена"
        legend={false}
        innerRef={chart1}
        refs={refs}
      />
      <HorBarChart title="2 смена" legend innerRef={chart3} refs={refs} />
      <HorBarChart
        title="3 смена"
        legend={false}
        innerRef={chart2}
        refs={refs}
      />
    </div>
  );
};

export default HorBarWrapper;
