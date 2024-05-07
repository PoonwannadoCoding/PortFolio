import './widget.css';
import Reveal from './components/animation/RevealAnimation';
import GitHubCalendar from 'react-github-calendar';
import React, { useState } from 'react';
import Button from './components/util/Button';
import Grid from '@mui/material/Grid';




export default function Porject(){

    const yearList:number[] = [2021,2022,2023,2024];

    const [curentYear, setCurrentYear] = useState<number>(yearList[yearList.length-1]);

    return(
        <div className="ProjectsContainer">
            <Reveal 
            children={
                <h1 className="TextBoxHeader"> Projects </h1>
            } />
            <Reveal children={
                <GitHubCalendar 
                colorScheme='dark'
                username="PoonwannadoCoding"
                //transformData={selectCurrentFullYear} 
                year={curentYear}
                labels={{
                    totalCount: '{{count}} contributions in this year',
                  }}
                />
            }>
                
            </Reveal>
            <Grid container spacing={2} justifyContent="center"> {/* Centering the buttons */}
                {yearList.map((year, index) => (
                    <Grid item key={index}>
                        <Button name={String(year)} onclick={() => setCurrentYear(year)} />
                    </Grid>
                ))}
            </Grid>
                
              
            
            
        </div>
    );
}