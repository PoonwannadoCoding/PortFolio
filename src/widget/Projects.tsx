import './widget.css';
import Reveal from './components/animation/RevealAnimation';
import GitHubCalendar from 'react-github-calendar';
import { useState } from 'react';
import Button from './components/util/Button';
import Grid from '@mui/material/Grid';
import Card from './components/util/CardWidget';



export default function Porject(){

    const yearList:number[] = [2021,2022,2023,2024];

    const [currentYear, setCurrentYear] = useState<number>(yearList[yearList.length-1]);

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
                year={currentYear}
                labels={{
                    totalCount: '{{count}} contributions in ' + currentYear,
                  }}
                />
            }>
                
            </Reveal>
            <Reveal children={
                <Grid container spacing={2} justifyContent="left"> {}
                {yearList.map((year, index) => (
                    <Grid item key={index}>
                        <Button name={String(year)} onclick={() => setCurrentYear(year)} />
                    </Grid>
                ))}
            </Grid>
            }>
                
            </Reveal>
            

            <Reveal 
            children={
                <div>
                    <h2 className="TextBoxSubHeader"> Mobile </h2>

                    <Card ProjectName={'Pumpal'} Description={'Pumpal is a Mobile application that can calculate the fuel price and show the real-time fuel price for each petrol station.'} URL={'https://github.com/Karakapy/PumpPal'} />
                </div>
            
            } />

            <Reveal 
                children={
                    <h2 className="TextBoxSubHeader"> Website </h2>
            } />

            <Reveal 
                children={
                    <h2 className="TextBoxSubHeader"> Game </h2>
            } />

        </div>
    );
}