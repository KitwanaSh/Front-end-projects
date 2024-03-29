// Sidebar toogle

let sidebarOpen = false
let sidebar = document.getElementById("sidebar")

// Function for opening the sidebar
function openSidebar() {
	if(!sidebarOpen) {
		sidebar.classList.add("sidebar-responsive")
		sidebarOpen = true
	}
}

// Function for closing the sidebar.

function closeSidebar() {
	if(sidebarOpen) {
		sidebar.classList.remove("sidebar-responsive")
		sidebarOpen = false
	}
}


// ########### CHART ############ 

// The website for the chart types : https://apexcharts.com/
// The apexchart cdn link: <script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.41.0/apexcharts.min.js"></script>

// ----- Bar Chart -----
var barChartOptions = {
  series: [{
  data: [10, 8, 6, 4, 2]
}],
  chart: {
  type: 'bar',
  height: 350,
  toolbar: {
  	show: false
  },
},
color: [
	"#246dec",
	"#cc3c43",
	"#367952",
	"#f5b74f",
	"#4f35a1"
],
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
// legend: {
// 	show: false
// },
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

// ---- Mixed Area Chart
var areaChartOptions = {
  series: [{
  name: 'Purchase Orders',
  data: [21, 40, 28, 51, 42, 109, 100]
}, {
  name: 'Sales Orders',
  data: [11, 32, 45, 32, 34, 52, 41]
}],
  chart: {
  height: 350,
  type: 'area',
  toolbar: {
  	show: false,
  },
},
colors: ["#4f35a1", "#246dec"],
dataLabels: {
	enabled: false,
},
stroke: {
  curve: 'smooth'
},
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
markers: {
  size: 0
},
yaxis: [
  {
    title: {
      text: 'Purchase Orders',
    },
  },
  {
    opposite: true,
    title: {
      text: 'Sales Orders',
    },
  },
],
tooltip: {
  shared: true,
  intersect: false,
}
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
        areaChart.render();