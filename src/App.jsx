import React from 'react'
import Navbar from '#components/Navbar'
import Dock from '#components/Dock'
// import Welcome from './components/Welcome'
import { Draggable } from 'gsap/Draggable';
import gsap from 'gsap';
import Terminal from '#windows/Terminal.jsx';
import Safari from "#windows/Safari.jsx";
import Resume from "#windows/Resume.jsx";
import Finder from "#windows/Finder.jsx";
import Text from "#windows/Text.jsx"; 
import Image from '#windows/Image';
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      {/* <Welcome /> */}
      <Dock/>
      <Terminal/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Text/>
      <Image/>
      <Contact/>
    </main>
  );
};

export default App;
