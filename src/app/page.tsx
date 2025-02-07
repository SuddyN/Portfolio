'use client'

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import AboutMe from '../components/AboutMe';
import LogoCollection from '../components/LogoCollection';
import Highlights from '../components/Highlights';
import Pricing from '../components/Pricing';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <AboutMe />
      <div>
        <LogoCollection />
        <Divider />
        <Highlights />
        <Divider />
        <Features />
        <Divider />
        {/* <Testimonials />
        <Divider /> */}
        {/* <FAQ />
        <Divider /> */}
        <Footer />
      </div>
    </AppTheme>
  );
}
