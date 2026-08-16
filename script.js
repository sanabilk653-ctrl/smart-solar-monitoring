// ================================
// PAGE NAVIGATION
// ================================

function showSection(sectionName) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    document.getElementById(sectionName).classList.add("active-section");


    // Change heading

    const titles = {
        dashboard: "Solar Dashboard",
        monitoring: "Live Monitoring",
        analytics: "AI Analytics",
        history: "Energy History",
        alerts: "System Alerts",
        settings: "System Settings"
    };

    document.getElementById("pageTitle").innerText = titles[sectionName];


    // Change active navigation

    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.classList.remove("active");
    });

    event.currentTarget.classList.add("active");
}


// ================================
// SOLAR CHART
// ================================

const ctx = document.getElementById("solarChart");

const solarChart = new Chart(ctx, {

    type: "line",

    data: {

        labels: [
            "6 AM",
            "8 AM",
            "10 AM",
            "12 PM",
            "2 PM",
            "4 PM",
            "6 PM"
        ],

        datasets: [

            {
                label: "Solar Generation (kW)",

                data: [
                    0.8,
                    2.1,
                    3.9,
                    5.0,
                    4.6,
                    3.1,
                    1.2
                ],

                borderWidth: 3,

                tension: 0.4,

                fill: true
            }

        ]
    },

    options: {

        responsive: true,

        plugins: {
            legend: {
                display: true
            }
        },

        scales: {

            y: {
                beginAtZero: true
            }

        }

    }

});


// ================================
// HISTORY CHART
// ================================

const historyCtx = document.getElementById("historyChart");

const historyChart = new Chart(historyCtx, {

    type: "bar",

    data: {

        labels: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ],

        datasets: [

            {
                label: "Generated (kWh)",

                data: [
                    18,
                    20,
                    17,
                    22,
                    21,
                    24,
                    19
                ],

                borderWidth: 1
            },

            {
                label: "Consumed (kWh)",

                data: [
                    14,
                    15,
                    16,
                    17,
                    16,
                    18,
                    15
                ],

                borderWidth: 1
            }

        ]
    },

    options: {

        responsive: true,

        scales: {

            y: {
                beginAtZero: true
            }

        }

    }

});


// ================================
// CHANGE CHART
// ================================

function changeChart() {

    const period = document.getElementById("chartPeriod").value;

    if (period === "week") {

        solarChart.data.labels = [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun"
        ];

        solarChart.data.datasets[0].data = [
            18,
            20,
            17,
            22,
            21,
            24,
            19
        ];

    } else {

        solarChart.data.labels = [
            "6 AM",
            "8 AM",
            "10 AM",
            "12 PM",
            "2 PM",
            "4 PM",
            "6 PM"
        ];

        solarChart.data.datasets[0].data = [
            0.8,
            2.1,
            3.9,
            5.0,
            4.6,
            3.1,
            1.2
        ];
    }

    solarChart.update();
}


// ================================
// LIVE DATA SIMULATION
// ================================

function updateLiveData() {

    let power = (4 + Math.random()).toFixed(2);

    let voltage = Math.floor(225 + Math.random() * 10);

    let current = (power * 1000 / voltage).toFixed(1);

    let temperature = Math.floor(38 + Math.random() * 8);

    document.getElementById("livePower").innerText =
        power + " kW";

    document.getElementById("solarPower").innerText =
        power + " kW";

    document.getElementById("voltage").innerText =
        voltage + " V";

    document.getElementById("current").innerText =
        current + " A";

    document.getElementById("temperature").innerText =
        temperature + "°C";
}


// Update every 3 seconds

setInterval(updateLiveData, 3000);


// ================================
// BATTERY SIMULATION
// ================================

let batteryLevel = 78;

setInterval(() => {

    batteryLevel += Math.random() > 0.5 ? 1 : -1;

    if (batteryLevel > 100) batteryLevel = 100;

    if (batteryLevel < 20) batteryLevel = 20;

    document.getElementById("battery").innerText =
        batteryLevel + "%";

}, 5000);


// ================================
// SETTINGS
// ================================

function saveSettings() {

    alert("System settings saved successfully!");

}
