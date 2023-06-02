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
                maxHeight: '256px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>Placeholder text.</p>
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
                label="See More on Twitter"
                className="p-button-outlined"
              />
            </Link>
          </section>
        </div>
      </div>
    );
  }
}
