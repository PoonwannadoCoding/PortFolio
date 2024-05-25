import { Grid } from "@mui/material";
import TitleName from "./components/util/TitleName";
import Reveal from "./components/animation/RevealAnimation"
import './widget.css'
import { Canvas } from "@react-three/fiber";
import VoxelDog from '../../public/3d_voxel_dog.jsx';
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei/core/OrbitControls.js";

function Intro(){
    return(

        <div className="IntroContainer">
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <Reveal children={<TitleName HeaderText='Worawit Penglam' SubHeaderText="I'm Developer" Text={"My name is Worawit Penglam. I am a dedicated developer with a passion for crafting digital experiences. Over the past four years at university, I've immersed myself in the world of software development, specializing in mobile, website, and game development."}/>}/>  
                </Grid>
                <Grid item xs={12} md={6}>

                    <Canvas >
                        <ambientLight />
                            <OrbitControls autoRotate={true} />
                                <Suspense fallback={null}>
                                    <VoxelDog />
                                </Suspense>
                            </Canvas>
 

                
                          
                </Grid>
            </Grid>
        </div>
    );
}

export default Intro