import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { GetdataService } from '../getdata.service'
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-test-chart',
  templateUrl: './test-chart.component.html',
  styleUrls: ['./test-chart.component.css']
})
export class TestChartComponent implements OnInit {
  LineChart: any;
  snapshotData = [];
  values = [];
  values1 = [];
  values2 = [];
  values3 = [];
  values4 = [];
  sedaruIds = [];
  chartColors = [];
  constructor(private dataService: GetdataService) {
    dataService.getStories().subscribe(
      data => {
        this.snapshotData = data as Array<any>;
        this.updateChart();
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      });
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  updateChart() {
    this.snapshotData.forEach(function (ele, i) {
      this.sedaruIds.push(ele.MeasurementType);
      this.values.push(ele.Value);
      this.values1.push(4);
      this.values2.push(-4);
      this.values3.push(2);
      this.values4.push(-2);
      this.chartColors.push(this.getRandomColor());
    }.bind(this));


    this.LineChart.update({
      duration: 100,
      easing: 'easeInExpo'
    });
  }

  ngOnInit() {
    this.LineChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        labels: this.sedaruIds,
        datasets: [{
          label: 'millrockbasin_west_flowrate_label',
          data: this.values,
          backgroundColor: this.chartColors
        },
        {
          type: 'line',
          fill: false,
          label: 'max value',
          data: this.values1,
          backgroundColor: "red",
          borderColor: "red",
          pointStyle: 'rectRot',
          pointRadius: .001,
          pointBorderColor: 'rgb(0, 0, 0)'
        },
        {
          type: 'line',
          fill: false,
          label: 'some value',
          data: this.values2,
          backgroundColor: "green",
          borderColor: "green",
          pointStyle: 'rectRot',
          pointRadius: .001,
          pointBorderColor: 'rgb(0, 0, 0)'
        },
        {
          type: 'line',
          fill: false,
          label: 'min value',
          data: this.values3,
          backgroundColor: "blue",
          borderColor: "blue",
          pointStyle: 'rectRot',
          pointRadius: .001,
          pointBorderColor: 'rgb(0, 0, 0)'
        },
        {
          type: 'line',
          fill: false,
          label: 'some value',
          data: this.values4,
          backgroundColor: "orange",
          borderColor: "orange",
          pointStyle: 'rectRot',
          pointRadius: .001,
          pointBorderColor: 'rgb(0, 0, 0)'
        }]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'millrockbasin_west_flowrate_label'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '(c) srt'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        }
      }
    });
  }
}
