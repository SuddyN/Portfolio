import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Connections } from '../../Components/Connections';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { HDR } from '../HDR/HDR';

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
                  maxHeight: '256px',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                }}
              >
                <p>
                  Thank you for taking the time to view my portfolio! My name is
                  Nathan, and I'm a Graduate Student, Software Engineer, Game
                  Developer, community leader, and event organizer in Raleigh,
                  NC.
                </p>
                <p>
                  I'm most proficient in frontend design and development - I
                  created this website myself - but I also have experience as a
                  full-stack software engineer, and know my way around Unity and
                  Unreal Engine. Please see my resume for more details.
                </p>
              </ScrollPanel>
              <br />
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
        <br />
        <br />
        <div className="surface-0 text-center">
          <div className="mb-3 font-bold text-3xl">
            <span className="text-900">My </span>
            <span className="text-blue-600">Projects</span>
          </div>
          <div className="text-700 mb-6">
            These are the projects I'm most proud of, and most passionate about!
          </div>
        </div>
        <HDR />
        <br />
        <Connections />
      </>
    );
  }
}
