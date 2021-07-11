import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            data: [4000, 8000, 6000, 2000, 8000, 6000, 5000, 4000, 5000, 4000, 5000, 10000],
            backgroundColor: [
                '#97C1FE',
                '#97C1FE',
                '#97C1FE',
                '#97C1FE',
                '#97C1FE',
                '#E2E8FD',
                '#E2E8FD',
                '#E2E8FD',
                '#E2E8FD',
                '#E2E8FD',
                '#E2E8FD',
                '#E2E8FD',
            ],
            borderWidth: 0,
            borderRadius: 50,
            barPercentage: 0.3,
            hoverBackgroundColor: '#347ae2'
        },
    ],
};

const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            caretPadding: 15,
            usePointStyle: false,
            displayColors: false,
            bodyFont: {
                family: "Nunito, sans-serif",
            },
            backgroundColor: '#347ae2',
            callbacks: {
                label: function(context: any) {
                    let label = context.dataset.label || '';

                    if (label) {
                        label += ': ';
                    }
                    if (context.parsed.y !== null) {
                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                    }
                    return label;
                },
            }
        },
    },
    scales: {
        x: {
            grid:{
                display: false,
            },
            ticks: {
                font: {
                    family: "Nunito, sans-serif",
                    weight: '700'
                },
                color: '#7b8eb5',
            }
        },
        y: {
            grid:{
                display: true,
                color: '#f6faff'
            },
            ticks: {
                min: 0,
                max: 5,
                stepSize: 1,
                suggestedMin: 0.5,
                suggestedMax: 5.5,
                font: {
                    family: "Nunito, sans-serif",
                    weight: "600",
                },
                color: '#7b8eb5',
                callback: function(label: any, index: any, labels: any) {
                    switch (label) {
                        case 0:
                            return '0';
                        case 2000:
                            return '2k';
                        case 6000:
                            return '6k';
                        case 10000:
                            return '10k';
                    }
                }
            },
        },
    },
};

const Graph: React.FC = () => {
    return (
        <div>
            <Bar 
                width={100} 
                height={20} 
                type="bar" 
                data={data} 
                options={options} 
            />
        </div>
    )
}

export default Graph;
