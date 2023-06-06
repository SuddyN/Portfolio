import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface GameEngineProps {}
interface GameEngineState {}

export class GameEngine extends React.Component<
  GameEngineProps,
  GameEngineState
> {
  render() {
    return (
      <div className="grid grid-nogutter surface-section text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              Game Engine Development
            </span>
            <div className="text-6l text-primary font-bold mb-3">
              Creating A Fully-Featured Game Engine From Scratch
            </div>
            <ScrollPanel
              style={{
                maxHeight: '275px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>
                Using SFML in C++, I created an extensive and flexible game
                engine with:
              </p>
              <ul>
                <li>Real-time-based movement</li>
                <li>Multithreading</li>
                <li>Client-server based networking</li>
                <li>A GameObject-Component model</li>
                <li>An event management system</li>
                <li>Replays and playback</li>
                <li>Runtime-reloadable scripting with JavaScript</li>
              </ul>
              <p>
                With this engine, I created two simple games: a multiplayer
                platformer with simple camera movement, and Pong with networked
                multiplayer. You can read my 20-page report and reflection on
                this project!
              </p>
            </ScrollPanel>
            <br />
            <Link
              to="https://docs.google.com/document/d/1LDnXpzb2EJ4pZXZx-TCtnd4sW0tg8B40CaQplnJYh7I/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="View The Full Report"
                className="mr-3 p-button-raised"
              />
            </Link>
          </section>
        </div>
        <div
          className="col-12 md:col-6 overflow-hidden"
          style={{
            maxHeight: '640px',
            overflow: 'hidden',
          }}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1034999594012127342/1115396678367846441/61b62ba0e59dded311918ad7_CSC481Client_GgW2XYQJjN.png"
            className="md:ml-auto block md:h-full"
            style={{
              maxWidth: '100%',
            }}
          />
        </div>
      </div>
    );
  }
}
