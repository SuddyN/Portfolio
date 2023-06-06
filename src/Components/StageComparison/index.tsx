import React from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

interface StageComparisonProps {}
interface StageComparisonState {}

export class StageComparison extends React.Component<
  StageComparisonProps,
  StageComparisonState
> {
  render() {
    return (
      <div className="grid grid-nogutter surface-section text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-1">
              HDR Stage Comparison Tool
            </span>
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
                The HDR Stage Comparison Tool is a website I made as a tool for
                HDR players to be able to compare the different stages. Unlike
                HDR itself, I am the sole maintainer and have been keeping the
                tool up-to-date as HDR releases new versions with different
                stage data.
              </p>
              <p>
                Competitive players of HDR use my tool in tournaments to
                strategically pick stages that are better for their character,
                and event organizers such as myself use it in order to create a
                balanced list of stages that represent many different shapes and
                sizes of stages that are fun to play on.
              </p>
              <p>
                I've embedded the tool into this site, so you can play with it
                here or open one of the links below:
              </p>
            </ScrollPanel>
            <br />
            <Link
              to="https://github.com/SuddyN/HDR-Stage-Comparison"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="View On GitHub" className="mr-3 p-button-raised" />
            </Link>
            <Link
              to="https://suddyn.github.io/HDR-Stage-Comparison/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button label="Visit The Site" className="p-button-outlined" />
            </Link>
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          <embed
            src="https://suddyn.github.io/HDR-Stage-Comparison/"
            width="854"
            height="480"
            style={{
              maxWidth: '100%',
            }}
          />
        </div>
      </div>
    );
  }
}
