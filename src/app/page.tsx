'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import AboutMe from '../components/AboutMe';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Skillset from '@/components/Skillset';

export default function Home() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <AboutMe />
      <div>
        <Divider />
        <Skillset />
        <Divider />
        {/* <Features /> */}
        {/* <Divider /> */}
        <Footer />
      </div>
    </AppTheme>
  );
}
