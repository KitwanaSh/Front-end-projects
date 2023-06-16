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