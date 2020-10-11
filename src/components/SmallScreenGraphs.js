import React from "react";
import { Line } from "react-chartjs-2";
import styled from "styled-components";

const SmallScreenGraphs = ({ pressure, temperature, volume }) => (
  <Container>
    <Graph>
      <Line
        data={{
          datasets: [
            {
              label: pressure.label,
              borderColor: pressure.graphColor,
              data: pressure.readings,
            },
          ],
        }}
      />
    </Graph>

    <Graph>
      <Line
        data={{
          datasets: [
            {
              label: temperature.label,
              borderColor: temperature.graphColor,
              data: temperature.readings,
            },
          ],
        }}
      />
    </Graph>

    <Graph>
      <Line
        data={{
          datasets: [
            {
              label: volume.label,
              borderColor: volume.graphColor,
              data: volume.readings,
            },
          ],
        }}
      />
    </Graph>
  </Container>
);

const Container = styled.div`
  margin-top: 10px;
`;

const Graph = styled.div`
  padding: 5px;
`;

export default SmallScreenGraphs;
