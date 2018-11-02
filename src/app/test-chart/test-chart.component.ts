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
        }]
      },
      options: {
 
        title: {
          display: true,
          text: 'millrockbasin_west_flowrate_label'
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}
