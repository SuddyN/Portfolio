import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Connections } from '../../Components/Connections';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface HomeProps {}
interface HomeState {}

export class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <>
        <div className="grid grid-nogutter surface-section text-800">
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
              <span className="block text-6xl font-bold mb-1">
                Nathan Sudduth
              </span>
              <div className="text-6l text-primary font-bold mb-3">
                Graduate Student & Software Engineer
              </div>
              <ScrollPanel
                style={{
                  height: '175px',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                }}
              >
                <p>
                  HDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDR
                  HDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDR
                  HDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDRHDR
                </p>
              </ScrollPanel>
              <Link
                to="https://docs.google.com/document/d/1wr9gfrOS60MqBxgUF92zscRS58QfeDLa/edit?usp=sharing&ouid=117947948488491982527&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button label="View Resume" />
              </Link>
            </section>
          </div>
          <div className="col-12 md:col-6 overflow-hidden">
            <img
              src="https://cdn.discordapp.com/attachments/1034999594012127342/1113604190946742293/Kaylaspook-020.jpg"
              alt="hero-1"
              className="md:ml-auto block md:h-full"
              style={{
                clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)',
                maxWidth: '100%',
              }}
            />
          </div>
        </div>
        <br />
        <Connections />
      </>
    );
  }
}
