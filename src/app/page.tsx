'use client';

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from '../components/AppAppBar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Skillset from '@/components/Skillset';
import RefForwardingDivider from '@/components/RefForwardingDivider';
import Divider from '@mui/material/Divider';

export default function Home() {
  const aboutMeRef = React.useRef<HTMLDivElement>(null);
  const skillsetRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const footerRef = React.useRef<HTMLDivElement>(null);
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <AppAppBar
        aboutMeRef={aboutMeRef}
        skillsetRef={skillsetRef}
        projectsRef={projectsRef}
        footerRef={footerRef}
      />
      <div ref={aboutMeRef}></div>
      <AboutMe />
      <div>
        <RefForwardingDivider ref={skillsetRef} />
        <Skillset />
        <RefForwardingDivider ref={projectsRef} />
        <Projects />
        <Divider />
        <Footer />
      </div>
      <div ref={footerRef} />
    </AppTheme>
  );
}
