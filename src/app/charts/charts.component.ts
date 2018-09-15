import { Component, OnInit, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') public chartElement: ElementRef;
  private _chart: Highcharts.ChartObject;

  constructor() {}

  ngOnInit() {
  }

  public ngAfterViewInit() {
    const chartOptions: Highcharts.Options = {
      chart: {
          type: 'spline'
      },
      title: {
          text: ' '
      },
      xAxis: {
          categories: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday'
          ],
          crosshair: true
      },
      yAxis: {
          title: {
              text: ' '
          },
          min: 0,
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.2f} $</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.1,
              borderWidth: 0
          }
      },
      series: [{
          name: 'CXM Index',
          data: [49.9, 71.5, 10.4, 12.2, 14.0, 17.0, 13.6]
      }
  ],
  };

  this._chart = new Highcharts.Chart(this.chartElement.nativeElement, chartOptions);

}

}
