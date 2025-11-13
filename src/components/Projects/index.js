import './index.scss';
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';

const PDFViewer = () => {
  return (
    <div className="pdf-viewer">
      <iframe
        src=""
        type="application/pdf"
        width="100%"
        height="100%"
        title="PDF Viewer"
      />
    </div>
  );
}

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['P', 'r', 'o', 'j', 'e', 'c', 't', 's']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className="container projects-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15} />
                </h1>
                <h2>Here are some of my University projects, completed during my final year.</h2>
            </div>
            <PDFViewer />
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Project