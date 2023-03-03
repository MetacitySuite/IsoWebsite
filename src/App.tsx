import React from 'react';
import { Heading } from './Heading';

function App() {
    return (
        <>
            <Heading />
            <div className="bg-neutral-900 flex flex-row">
                <video src="Reel2.mp4" autoPlay loop className="w-[50%]" />
                <div className="text-white p-8 flex flex-col">
                    <h2 className="text-5xl font-black mb-8">Metacity & MetacityGL</h2>
                    <p className="text-xl leading-normal">
                        MetacityGL is a WebGL-based 3D city engine, built on top of the Three.js
                        library. We have made several demos to showcase the capabilities of the
                        rendering engine together with the data processing tool Metacity.
                    </p>
                </div>
            </div>
        </>
    );
}

export default App;
