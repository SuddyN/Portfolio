import React from 'react';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

interface ConnectionsProps {}
interface ConnectionsState {}

export class Connections extends React.Component<
  ConnectionsProps,
  ConnectionsState
> {
  render() {
    return (
      <div className="surface-0 text-center">
        <div className="mb-3 font-bold text-3xl">
          <span className="text-900">Where To </span>
          <span className="text-blue-600">Connect</span>
        </div>
        <div className="text-700 mb-6">
          Find me on social media, or by email to suddy121800@hotmail.com
        </div>
        <div className="grid">
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: '10px' }}
            >
              <Link
                to="https://github.com/SuddyN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-github text-4xl text-blue-500"></i>
              </Link>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">GitHub</div>
            <span className="text-700 line-height-3">
              {/* Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
              adipiscing tristique risus nec feugiat. */}
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: '10px' }}
            >
              <Link
                to="https://www.linkedin.com/in/nathan-sudduth-46329b146/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-linkedin text-4xl text-blue-500"></i>
              </Link>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">LinkedIn</div>
            <span className="text-700 line-height-3">
              {/* Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
              adipiscing tristique risus nec feugiat. */}
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: '10px' }}
            >
              <Link
                to="https://www.facebook.com/nathan.sudduth.3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="pi pi-facebook text-4xl text-blue-500"></i>
              </Link>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Facebook</div>
            <span className="text-700 line-height-3">
              {/* Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec
              adipiscing tristique risus nec feugiat. */}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
