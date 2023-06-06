import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Image } from 'primereact/image';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface CoulomballProps {}
interface CoulomballState {}

export class Coulomball extends React.Component<
  CoulomballProps,
  CoulomballState
> {
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
            src="https://www.youtube.com/embed/i4dMoaRNdlg"
          />
        </div>
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">Coulomball</span>
            <div className="text-6l text-primary font-bold mb-3">
              A Pinball Game Based On Coulomb's Law
            </div>
            <ScrollPanel
              style={{
                maxHeight: '275px',
                maxWidth: '100%',
                wordBreak: 'break-word',
              }}
            >
              <p>
                Coulomball - a wordplay on Coulomb's Law and Pinball - is a
                pinball game inspired by the inverse-square law of eletrically
                charged particles. In Coulomball, the various bumpers have
                various strengths of electrical charge ranging from negative
                (more blue) to positive (more red). Each flipper imparts a
                charge on the ball, and custom physics logic uses the charges of
                the ball and bumpers to influence the ball's trajectory.
              </p>
              <p>
                This project was built in Unity, and served as an exercise in
                simple game design and 2D physics implimentation. The different
                lines around the field are programmatically placed and arranged
                as a visual indicator of the electric field, colored their
                charge and pointed in the direction of that charge.
              </p>
            </ScrollPanel>
            <br />
            <Link
              to="https://github.com/SuddyN/Coulomball"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="View On GitHub" className="mr-3 p-button-raised" />
            </Link>
            <Link
              to="https://docs.google.com/document/d/1he81xtYw6V6_yGwPudI1wHyRxYNRbYDEi1v9Lks1n0I/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                label="Game Design Document"
                className="p-button-outlined"
              />
            </Link>
          </section>
        </div>
      </div>
    );
  }
}
