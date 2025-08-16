"use client ";


import React from 'react'
import NavBar from '../components/NavBar';
import Hero from '../amenities/components/Hero';
import WorldClass from '../amenities/components/WorldClass';
import Club from '../amenities/components/Club';
import Lawn from '../amenities/components/Lawn';
import PickleBall from '../amenities/components/PickleBall';
import All from '../amenities/components/All';
import { Footer } from '../components/Footer';
import ConnectWithUs from '../components/ConnectWithUs';
import Chatbot from '../components/Chatbot';



export default function page() {
  return (
    <div className={`w-screen overflow-x-hidden text-primary relative bg-primary flex flex-col`}>
      <NavBar />
      <Hero  />
      <WorldClass />
      <Club />
      <Lawn />
      <PickleBall />     
      <All />
      <ConnectWithUs />
      <Footer />
      <Chatbot isPreLoaderVisible={false} />
    </div>
  );
}

