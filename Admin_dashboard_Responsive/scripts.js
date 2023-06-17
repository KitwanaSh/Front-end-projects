// Sidebar toogle

let sidebarOpen = false
let sidebar = document.getElementById("sidebar")

function sidebarOpen() {
	if(!sidebarOpen) {
		sidebar.classList.add("sidebar-responsive")
		sidebarOpen = true
	}
}

function closeSidebar() {
	if(sidebarOpen) {
		sidebar.classList.remove("sidebar-responsive")
		sidebarOpen = false
	}
}

const me = document.getElementById("me")

me.addEventListener("click", function() {
	console.log("clicked")
})

// ########### CHART ############ 

// ----- Bar Chart -----
var barChartOptions = {
  series: [{
  data: [10, 8, 6, 4, 2]
}],
  chart: {
  type: 'bar',
  height: 350,
  toolbar: {
  	false
  },
},
color: {
	"#246dec",
	"#cc3c43",
	"#367952",
	"#f5b74f",
	"#4f35a1"
},
plotOptions: {
  bar: {
  	distributed: true,
    borderRadius: 4,
    horizontal: false,
    columnWidth: '40%',
  }
},
dataLabels: {
  enabled: false
},
legend: {
	show: false
},
xaxis: {
  categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
},
yaxis: {
	title: {
		text: 'Count'
	}
}
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();
console.log("I am the Big Dog!")