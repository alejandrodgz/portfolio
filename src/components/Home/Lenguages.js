  import React, { Component } from "react";
  import Chart from "react-apexcharts";



  class LenguageBar extends Component {
    constructor(props) {
      super(props);

      this.state = {
          
          options: {
              tooltip: {
                  enabled: false},
              grid: {
                  tooltip: {
                      enabled: false,},
                  show: false,
              },
              legend: { show: false},
              colors:['rgb(224, 224, 224))'],
              chart: {
                  tooltip: {
                      enabled: false},
                  offsetX:-30,
                  toolbar: {
                      show: false},
              foreColor: 'rgb(20, 20, 20)',
                type: 'bar',
                animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: {
                      enabled: true,
                      delay: 400
                  },
                  dynamicAnimation: {
                      enabled: true,
                      speed: 200
                  }
              }
              },
              plotOptions: {
                bar: {
                  borderRadius: 4,
                  horizontal: true,
                }
              },
              dataLabels: {
                enabled: false
              },
              yaxis: {
                  axisBorder: {show: false},
                  tooltip: {enabled: false},
                  labels: {
                      align: 'center',
                      style: {
                      fontSize: '0.8rem',
                      fontFamily:'DM_Sans'},
                      offsetX: 150,
                      offsetY: 4,
                      },
                  
              },
          xaxis: {
            categories: ["Reactjs", "Javascript", "Python", "NodeJs", "C#", "C", "SQL"],
            axisTicks: {
              show: false},
              tooltip: {
                  enabled: false,},
            labels: {
              show: false},
              axisBorder: {
                  show: false},
              crosshairs: {
                  show: false}
          }
        },
        series: [
          {
            name: "series-1",
            data: [95, 80, 80, 75, 60, 60, 70]
          }
        ]
      };
    }

    
    render() {
      return (
            <div className="mixed-chart">
              <h3 className="lenguages">Some of the lenguages and frameworks that I have learned since I started to Coding</h3>
              <Chart className="chart--f"
                options={this.state.options}
                series={this.state.series}
                type="bar"
                width="350"
              />
            </div>
      );
    }
  }

  export default LenguageBar;