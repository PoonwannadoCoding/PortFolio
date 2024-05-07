import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NavBar from './widget/components/util/NavBar.tsx'
import Intro from './widget/IntroWidget.tsx'
import AboutMe from './widget/AboutMe.tsx'
import Porject from './widget/Projects.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NavBar />
    <Intro />
    <AboutMe />
    <Porject />
    
    

  </React.StrictMode>,
)
