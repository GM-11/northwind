"use client ";
import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../amenities/components/Hero';
import WorldClass from '../amenities/components/WorldClass';
import Club from '../amenities/components/Club';
import Lawn from '../amenities/components/Lawn';
import PickleBall from '../amenities/components/PickleBall';
import All from '../amenities/components/All';




const page=() =>{
  
  return (
    <div className={`w-screen && "h-screen"} overflow-x-hidden relative bg-primary  `}>
      <NavBar />
      <Hero  />
      <WorldClass />
      <Club />
      <Lawn />
      <PickleBall />
      <All/>
      
    </div>
  );
}
export default page;

