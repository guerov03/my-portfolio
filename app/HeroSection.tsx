"use client";

import { useState, useEffect } from 'react';

const fullText = `Hello!
You have found my secret website!

Name: Eduardo Valdovinos
Aspiring Network Engineer!`;

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [showTyped, setShowTyped] = useState(true);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowTyped(false), 1000);
    }
  }, [displayedText]);

  return (
    <div className="heroTextBlock">
      {showTyped ? (
        <pre className={`typedText ${displayedText.length < fullText.length ? 'typing' : ''}`}>
          {displayedText}
        </pre>
      ) : (
        <>
          <h1>Hello!</h1>
          <p className="introLine">You have found my secret website!</p>

          <div className="dividerBlock">
            <div className="pixelLine"></div>
            <div className="pixelLine short"></div>
          </div>

          <div className="infoBlock">
            <p>Name: Eduardo Valdovinos</p>
            <p>Aspiring Network Engineer!</p>
          </div>

          <div className="heroButtons">
            <a href="/projects" className="pixelButton">
              PROJECTS
            </a>
            <a href="/contact" className="pixelButton">
              CONTACT ME
            </a>
          </div>
        </>
      )}
    </div>
  );
}