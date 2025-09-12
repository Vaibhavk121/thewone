import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import Section1 from './components/Section1';
import Sourcing from './components/Sourcing';
import Evaluation from './components/Evaluation';
import Tracking from './components/Tracking';
import Communication from './components/Communication';
import { Companies } from './components/Companies';
import  Letter  from './components/Letter';
import Performance from './components/Performance';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className='bg-[#f5f3ed] min-h-screen'>
      <Header/>
      <HeroSection/>
      <Section1/>
      <Sourcing/>
      <Evaluation/>
      <Tracking/>
      <Communication/>
      <Companies/>
      <Letter/>
      <Performance/>
      <Footer/>
    </div>
  );
}