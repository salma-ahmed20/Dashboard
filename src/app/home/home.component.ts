import { Component, OnInit} from '@angular/core';
import * as CanvasJS from 'src/assets/canvasjs.min.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Visitors"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 71, label: "Jan" },
          { y: 55, label: "Feb" },
          { y: 50, label: "Mar" },
          { y: 65, label: "Apr" },
          { y: 95, label: "May" },
          { y: 68, label: "Jun" },
          { y: 28, label: "Jul" },
          { y: 34, label: "Aug" },
          { y: 14, label: "sep" }
        ]
      }]
    });
      
    chart.render();
      
      let chart2 = new CanvasJS.Chart("chartContainer2", {
        theme: "light2",
        animationEnabled: true,
        exportEnabled: true,
        title:{
          text: "Monthly Expense"
        },
        data: [{
          type: "pie",
          showInLegend: true,
          toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
          indexLabel: "{name} - #percent%",
          dataPoints: [
            { y: 450, name: "Food" },
            { y: 120, name: "Insurance" },
            { y: 300, name: "Traveling" },
            { y: 800, name: "Housing" },
            { y: 150, name: "Education" },
            { y: 150, name: "Shopping"},
            { y: 250, name: "Others" }
          ]
        }]
      });
        
      chart2.render();
    }
  }
  // function() {
  //   // "use strict";

  //    // chart 1
	 
	// 	  var ctx = document.getElementById('chart1');
		
	// 		var myChart = new Chart(ctx, {
	// 			type: 'line',
	// 			data: {
	// 				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
	// 				datasets: [{
	// 					label: 'New Visitor',
	// 					data: [3, 3, 8, 5, 7, 4, 6, 4, 6, 3],
	// 					backgroundColor: '#fff',
	// 					borderColor: "transparent",
	// 					pointRadius :"0",
	// 					borderWidth: 3
	// 				}, {
	// 					label: 'Old Visitor',
	// 					data: [7, 5, 14, 7, 12, 6, 10, 6, 11, 5],
	// 					backgroundColor: "rgba(255, 255, 255, 0.25)",
	// 					borderColor: "transparent",
	// 					pointRadius :"0",
	// 					borderWidth: 1
	// 				}]
	// 			},
	// 		options: {
	// 			maintainAspectRatio: false,
	// 			legend: {
	// 			  display: false,
	// 			  labels: {
	// 				fontColor: '#ddd',  
	// 				boxWidth:40
	// 			  }
	// 			},
	// 			tooltips: {
	// 			  displayColors:false
	// 			},	
	// 		  scales: {
	// 			  xAxes: [{
	// 				ticks: {
	// 					beginAtZero:true,
	// 					fontColor: '#ddd'
	// 				},
	// 				gridLines: {
	// 				  display: true ,
	// 				  color: "rgba(221, 221, 221, 0.08)"
	// 				},
	// 			  }],
	// 			   yAxes: [{
	// 				ticks: {
	// 					beginAtZero:true,
	// 					fontColor: '#ddd'
	// 				},
	// 				gridLines: {
	// 				  display: true ,
	// 				  color: "rgba(221, 221, 221, 0.08)"
	// 				},
	// 			  }]
	// 			 }

	// 		 }
	// 		});  
		
		
  //   // chart 2

	// 	var ctx2 = document.getElementById("chart2");
	// 		var myChart = new Chart(ctx2, {
	// 			type: 'doughnut',
	// 			data: {
	// 				labels: ["Direct", "Affiliate", "E-mail", "Other"],
	// 				datasets: [{
	// 					backgroundColor: [
	// 						"#ffffff",
	// 						"rgba(255, 255, 255, 0.70)",
	// 						"rgba(255, 255, 255, 0.50)",
	// 						"rgba(255, 255, 255, 0.20)"
	// 					],
	// 					data: [5856, 2602, 1802, 1105],
	// 					borderWidth: [0, 0, 0, 0]
	// 				}]
	// 			},
	// 		options: {
	// 			maintainAspectRatio: false,
	// 		   legend: {
	// 			 position :"bottom",	
	// 			 display: false,
	// 			    labels: {
	// 				  fontColor: '#ddd',  
	// 				  boxWidth:15
	// 			   }
	// 			}
	// 			,
	// 			tooltips: {
	// 			  displayColors:false
	// 			}
	// 		   }
	// 		});
		