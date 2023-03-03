import React from 'react';
import { CityAnimation } from './citygen';

export function Heading() {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    React.useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = new CityAnimation(canvas);
        context.generate();
        context.resize();
        window.onresize = () => context.resize();

        return () => {
            window.onresize = null;
            context.dispose();
        };
    }, []);

    return (
        <>
            <div className="min-h-[calc(min(1000px,100vh))] max-w-[1000px] m-auto">
                <div className="h-[calc(min(600px,60vh))] w-full relative">
                    <canvas ref={canvasRef} className="cursor-pointer z-0" />
                    <div className="absolute right-0 bottom-4">
                        {'\u2196'} click to generate new city
                    </div>
                </div>
                <div className="bg-white text-5xl leading-snug z-100 relative">
                    <div>
                        <span className="font-black">Metacity</span> offers tools and services for
                        urban data processing and visualization
                    </div>
                    <div className="mt-8">
                        <a href="mailto:hello@metacity.cc" className="font-black border-b-2">
                            Get in touch
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
