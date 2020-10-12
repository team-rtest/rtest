import React, { Component } from "react";
import Chart from "chart.js";
import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js";
//I used "yarn add chart.js chartjs-chart-box-and-violin-plot" to add the charts I need

let myChart

export default class GraphSpace extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  }

  componentDidUpdate() {
    this.buildChart();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    const { data, labels } = this.props;

    if (typeof myChart !== "undefined") myChart.destroy();

    myChart = new Chart(myChartRef, {
      type: "boxplot",
      data: {
        //Bring in data
        labels: labels,
        datasets: [
          {
            label: "Score",
            data: data,
            backgroundColor: "rgba(97, 115, 219, 0.5)",
            borderColor: "rgba(52, 63, 125, 0.75)"
          },
        ]
      },
      options: {
        //Customize chart options
      },
    });
  };

  render() {
    return (
        <canvas id="myChart" ref={this.chartRef} />
    );
  }
}