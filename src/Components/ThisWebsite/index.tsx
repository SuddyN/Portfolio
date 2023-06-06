import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface ThisWebsiteProps {}
interface ThisWebsiteState {}

export class ThisWebsite extends React.Component<
  ThisWebsiteProps,
  ThisWebsiteState
> {
  render() {
    return (
      <div className="grid grid-nogutter surface-section text-800">
        <div
          className="col-12 md:col-6 overflow-hidden"
          style={{
            maxHeight: '640px',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1034999594012127342/1115480893071564901/0_CBjisl422hUyLxiG.png"
            className="md:ml-auto block md:h-full"
            style={{
              maxWidth: '100%',
            }}
          />
        </div>
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">This Website!</span>
            <div className="text-6l text-primary font-bold mb-3">
              Web Design & Development
            </div>
            <ScrollPanel
              style={{
                maxHeight: '275px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>
                I created this website on my own! Using TypeScript and React,
                and deployed to GitHub Pages. Although I'm a full-stack
                developer with game engine experience and a passion for game
                design, I'm also particularly strong in web design and
                development. While working on the project ArchiveCore with
                Exelaration (see my resume), I was the main designer and
                programmer for their website, so I feel confident creating
                user-facing content.
              </p>
            </ScrollPanel>
            <br />
            <Link
              to="https://github.com/SuddyN/Portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="View On GitHub" className="mr-3 p-button-raised" />
            </Link>
            <Link
              to="https://docs.google.com/document/d/1wr9gfrOS60MqBxgUF92zscRS58QfeDLa/edit?usp=sharing&ouid=117947948488491982527&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="View My Resume" className="p-button-outlined" />
            </Link>
          </section>
        </div>
      </div>
    );
  }
}
