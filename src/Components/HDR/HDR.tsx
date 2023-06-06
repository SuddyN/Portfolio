import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface HDRProps {}
interface HDRState {}

export class HDR extends React.Component<HDRProps, HDRState> {
  render() {
    return (
      <div className="grid grid-nogutter surface-section text-800">
        <div className="col-12 md:col-6 overflow-hidden">
          <iframe
            width="854"
            height="480"
            style={{
              maxWidth: '100%',
            }}
            src="https://www.youtube.com/embed/_ZNIUvao-Ek"
          />
        </div>
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">HewDraw Remix</span>
            <div className="text-6l text-primary font-bold mb-3">
              Open-Source Development
            </div>
            <ScrollPanel
              style={{
                maxHeight: '275px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>
                HewDraw Remix (HDR) is an open source mod of Super Smash Bros.
                Ultimate which redefines nearly all of its mechanics and aims to
                be its own entry in the Super Smash Bros. series. Featuring
                rewrites every character, HDR is the largest and most ambitious
                overhaul with thousands of active players.
              </p>
              <p>
                I'm a member of HDR's small main team of developers, and among
                dozens of other contributors. As a developer of HDR, I have:
              </p>

              <ul>
                <li>Designed character reworks</li>
                <li>Contributed to large mechanical changes</li>
                <li>Taught other developers the ins-and-outs of our systems</li>
                <li>
                  Created, reviewed, and managed open-source pull requests on
                  GitHub
                </li>
              </ul>
            </ScrollPanel>
            <br />
            <Link
              to="https://github.com/HDR-Development"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="View On GitHub" className="mr-3 p-button-raised" />
            </Link>
            <Link
              to="https://twitter.com/HewDrawRemix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="See More On Twitter"
                className="p-button-outlined"
              />
            </Link>
          </section>
        </div>
      </div>
    );
  }
}
