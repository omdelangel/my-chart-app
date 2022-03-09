//import { Utils } from 'node_modules/util';
//import { Utils } from 'src/assets/js/util.js';
import { Component, OnInit } from '@angular/core';

import { Chart, registerables} from 'node_modules/chart.js';
//import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor() {
    Chart.register(...registerables);
   }

  ngOnInit(): void {
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'];  //Utils.months({count: 7});
    //const labels = Utils.months({count: 8});
    const myChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40, 62],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }],
      }
  });

}

}
