import { useEffect, useContext } from 'react';
import Chart from 'chart.js/auto';

import { SocketContext } from '../context/SocketContext';


const BandChart = () => {

    const { socket } = useContext( SocketContext );

    let myChart;


    useEffect( () => {
        socket.on( 'current-bands', bands => {
            createChart( bands )
        });
    }, [ socket ]);


    const createChart = ( bands = [] ) => {
        const ctx = document.getElementById('myChart');

        if ( myChart ) {
            myChart.destroy();
        }

        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: bands.map( band => band.name),
                datasets: [{
                    label: '# of Votes',
                    data: bands.map( band => band.votes),
                    borderWidth: 1,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(255, 205, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                }]
            },
            options: {
                animation: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        stacked: true
                    }
                }
            }
        });
    };


    return (
        <canvas id="myChart"></canvas>
    );
};
 

export default BandChart;