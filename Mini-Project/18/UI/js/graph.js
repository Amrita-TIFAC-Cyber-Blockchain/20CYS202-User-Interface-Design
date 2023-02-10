//graph 2

console.log("Trying to hack me")
var ctx = document.getElementById('myChart').getContext('2d');

var ctx2 = document.getElementById('myChart2').getContext('2d');

const myChart = new Chart(ctx, { 
    type: 'doughnut',
    data: {
        labels: ['Entertiment',"Work","Personal"],
        datasets: [{
            label: "Time: ",
            data: [10,15,12],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            
        }]
    },
    options: {
        responsive: true,
    }

});

const myChart2 = new Chart(ctx2, { 
    type: 'bar',
    data: {
        labels: ['Assignment',"Coding","Movie", "social media","workout"],
        datasets: [{
            label: "Time: ",
            data: [10,15,12, 13 , 20],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            
        }]
    },
    options: {
        responsive: true,
    }

});