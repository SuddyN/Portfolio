import { ScrollPanel } from 'primereact/scrollpanel';
import React, { ReactElement, ReactFragment } from 'react';
import { Galleria, GalleriaResponsiveOptions } from 'primereact/galleria';

interface AboutMeProps {}
interface AboutMeState {}

export class AboutMe extends React.Component<AboutMeProps, AboutMeState> {
  images: { src: string; alt?: string }[] = [
    {
      src: 'https://media.discordapp.net/attachments/1034999594012127342/1113604190946742293/Kaylaspook-020.jpg?width=1408&height=940',
      alt: "Me, dressed up with a prop for my annual Halloween charity event - Kayla's Spooky Smash",
    },
    {
      src: 'https://cdn.discordapp.com/attachments/1034999594012127342/1113998192078495775/PXL_20230506_200232087.MP.jpg',
      alt: '',
    },
    {
      src: 'https://uploads-ssl.webflow.com/61b26b95323f091932df9027/62e6db0e5d99644fb0f03bc4_JRWI14-0223-min.jpg?width=1408&height=940',
    },
    {
      src: 'https://uploads-ssl.webflow.com/61b26b95323f091932df9027/62e6da9e2f9d22daf1065d6f_JRWI14-0996-min.jpg',
      alt: '',
    },
    {
      src: 'https://pbs.twimg.com/media/FuMRydlXoAA-ozD?format=jpg&name=4096x4096',
      alt: '',
    },
    {
      src: 'https://uploads-ssl.webflow.com/61b26b95323f091932df9027/620d7d1fed128710b301a84f_DSC_1351-min.jpg',
      alt: '',
    },
  ];

  itemTemplate = (item: any) => {
    return (
      <div
        style={{
          width: '100%',
          maxHeight: '512px',
          clipPath: 'polygon(0% 0, 92% 0%, 100% 100%, 0 100%)',
          overflow: 'hidden',
        }}
      >
        <img
          src={item.src}
          alt={item.alt}
          style={{
            width: '100%',
          }}
        />
      </div>
    );
  };

  render() {
    return (
      <>
        <div className="grid grid-nogutter surface-section text-800">
          <div className="col-12 md:col-6 overflow-hidden">
            <Galleria
              showThumbnails={false}
              value={this.images}
              item={this.itemTemplate}
              autoPlay
              circular
              transitionInterval={4000}
              showIndicators
              changeItemOnIndicatorHover
            />
          </div>
          <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
            <section>
              <span className="block text-6xl font-bold mb-1">I Am A...</span>
              <ScrollPanel
                style={{
                  height: '175px',
                  maxWidth: '100%',
                  wordBreak: 'break-word',
                }}
              >
                <ul>
                  <li>
                    Graduate Student of Computer Science at NC State University
                  </li>
                  <li>
                    Proficient frontend Software Engineer with fullstack
                    experience
                  </li>
                  <li>
                    Developer of the open source modding project HewDraw Remix
                  </li>
                  <li>
                    Respected event organizer for gaming tournaments in Raleigh
                  </li>
                  <li>
                    Vice President of the Smash Ultimate Club @ NC State, with
                    800 members
                  </li>
                </ul>
              </ScrollPanel>
            </section>
          </div>
        </div>
      </>
    );
  }
}
