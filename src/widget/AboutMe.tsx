import Grid from '@mui/material/Grid';
import Reveal from './components/animation/RevealAnimation';
import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import TextBoxWithItem from './components/util/TextBoxWithItem';

function AboutMe(){

    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstance = useRef<Chart | null>(null);
  
    useEffect(() => {
      if (chartRef.current) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        const ctx = chartRef.current.getContext('2d');
        if (ctx) {


          chartInstance.current = new Chart(ctx, {
            type: 'radar',
            data: {
              labels: ['WebDeveloper', 'Game Developer', 'Mobile Developer', 'Data Analysis'],
              datasets: [
                {
                  label: 'My Skill',
                  data: [3.5, 2.5, 3.5, 4],
                  fill: true,
                  backgroundColor: 'rgba(255, 99, 132, 0.4)',
                  borderColor: 'white',
                  pointBackgroundColor: 'rgb(255, 99, 132)',
                  pointBorderColor: '#fff',
                  pointHoverBackgroundColor: '#fff',
                  pointHoverBorderColor: 'rgb(255, 99, 132)',
                },
                
              ],
            },
            options: {
                
                scales: {
                    r: {
                        min: 0,
                        max: 5,
                        ticks: {
                            stepSize: 1,
                        },
                        angleLines:{
                            color: 'white',
                        },
                        pointLabels: {
                            
                            color: 'white',
                                                    },
                        grid:{
                            color: 'white',
                        },
                        

                    }
                }
            }
          });
        }
      }
    }, [chartRef]);

   
    return(
        <div className="AboutMeWidget">
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Reveal 
            children={
                <h1 className="TextBoxHeader"> Skill-Set </h1>
            } />

            <Reveal children={
                <TextBoxWithItem 
                Header1={'Language'} 
                Body1={["Python", "Typescript", "Dart", "Java", "MySQL", "DAX", "JavaScript", "M Language", "Scala", "Rust", "GO"]}
                Header2={'Framework'}
                Body2={["Django", "Flask", "React", "Flutter", "Vue", "Gin"]}
            />
            } />            

            </Grid>
                <Grid item xs={12} md={6}>
                    <div className='SpaceInAboutMe'></div>
                    <Reveal children={
                        <div className='chart-container'>
                            <canvas id="hexagongraph" ref={chartRef}></canvas>
                            
                        </div>
                    }  />
                    

                </Grid>
                
            </Grid>
            
            
        </div>
    );
}

export default AboutMe