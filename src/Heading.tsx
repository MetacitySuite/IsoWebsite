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
        <div className="min-h-[calc(min(1000px,100vh))] max-w-[1000px] m-auto mb-5">
            <div className="h-[calc(min(600px,60vh))] w-full relative">
                <canvas ref={canvasRef} className="cursor-pointer z-0 rounded-3xl mt-4" />
                <div className="absolute right-4 bottom-4 text-xs">
                    {'\u2196'} click to generate a new city
                </div>
            </div>
            <div className="bg-white text-2xl md:text-4xl lg:text-5xl mx-4 z-100 relative">
                <p className="leading-normal">
                    <span className="font-black">Metacity</span> offers tools and services for urban
                    data processing and visualization
                </p>
                <p className="mt-8">
                    <a href="mailto:metacity@stdio.cz" className="font-black border-b-2">
                        Get in touch
                    </a>
                </p>
            </div>
        </div>
    );
}
