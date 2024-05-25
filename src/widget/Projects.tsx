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
                <Grid container spacing={{xs:1, md:2}} justifyContent="left"> {}
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
                    <Card ProjectName={'Astro'} Description={'Astro is a Mobile application that use to track your friend location and create an event for hangout with your friends. Morevoer, it also provide the direction to the destination and calculate the estimate time arrive. In additional, this also have chat feature for chat with friends.'} URL={'https://github.com/ASTR-Studio/Astro-project'} />
                    <Card ProjectName={'RentMyLove'} Description={'RentMyLove is the Booking application for the rental clothes business'} URL={'https://github.com/Karakapy/rentmylove'} />
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