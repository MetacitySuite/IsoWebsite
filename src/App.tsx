import React from 'react';
import { Heading } from './Heading';
import clsx from 'clsx';

const classImg = 'w-[40%] object-cover rounded-lg drop-shadow-lg absolute';

function App() {
    return (
        <>
            <Heading />

            <div className="max-w-[1200px] mx-auto">
                <a href="https://demo.metacity.cc">
                    <div className="flex flex-row flex-wrap mx-4 rounded-3xl shadow-lg">
                        <img
                            src="dark.png"
                            className="block  w-[100%] md:w-[50%]  object-cover rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none"
                        />
                        <img
                            src="bridges.png"
                            className="block  w-[100%] md:w-[50%]  object-cover md:rounded-tr-3xl"
                        />
                        <img
                            src="ira2.png"
                            className="block w-[100%] md:w-[50%]  object-cover md:rounded-bl-3xl"
                        />
                        <img
                            src="light.png"
                            className="block w-[100%] md:w-[50%]  object-cover rounded-br-3xl rounded-bl-3xl md:rounded-bl-none"
                        />
                    </div>
                </a>
                <div className="max-w-[1000px] mx-auto mt-10 md:mt-20 text-2xl md:text-3xl">
                    <p className="mx-4 leading-normal text-neutral-400">
                        We are a Prague-based division of{' '}
                        <a href="https://stdio.cz" className="border-b">
                            st.dio
                        </a>{' '}
                        programmers focused on{' '}
                        <span className="text-neutral-700">spatial data visualization</span> and{' '}
                        <span className="text-neutral-700">interactive simulation</span> on the web.
                        Check out our{' '}
                        <a href="https://demo.metacity.cc" className="border-b">
                            demo visualization projects
                        </a>{' '}
                        or our open code at{' '}
                        <a href="https://github.com/metacitytools" className="border-b">
                            GitHub
                        </a>
                        .
                    </p>
                </div>
            </div>

            <div className="max-w-[1000px] mx-auto mt-10 md:mt-20">
                <div className="flex mx-4  md:flex-row flex-col text-xl place-content-between">
                    <div className="text-2xl md:text-3xl">
                        <div className="mb-4">Still not sure?</div>
                        <a href="mailto:metacity@stdio.cz" className="font-black border-b-2">
                            Get in touch
                        </a>
                    </div>
                    <div className="leading-normal mt-8 md:mt-0 text-neutral-400">
                        <p>Prague</p>
                        <p>metacity@stdio.cz</p>
                        <p>Římská 12</p>
                        <p>120 00 Praha 2</p>
                        <p>Czech Republic</p>
                    </div>
                    <div className="leading-normal mt-8 md:mt-0 text-neutral-400">
                        <p>st.dio</p>
                        <p>Přimdská 362</p>
                        <p>348 02 Bor</p>
                        <p>Czech Republic</p>
                        <p>Reg. No.: 051 83 731</p>
                        <p>VAT: CZ05183731</p>
                    </div>
                </div>
            </div>

            <div className="border-t py-8 mt-20 bg-neutral-100">
                <div className="max-w-[1000px] m-auto">
                    <div className="mx-4 text-sm">
                        <div className="">
                            <div className="text-neutral-400 pb-4">Partners</div>
                            <div className="flex flex-row brightness-0 opacity-50">
                                <a href="https://www.cesnet.cz">
                                    <img src="cesnet.svg" alt="cesnet" className="max-w-[100px]" />
                                </a>
                                <a href="http://oncue.design">
                                    <img
                                        src="ocdLogo.png"
                                        alt="oncue.design"
                                        className="max-w-[100px]"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="text-neutral-700 my-4 flex flex-row justify-between">
                            <div>&copy; 2023 st.dio s.r.o. All rights reserved, www.stdio.cz</div>
                            <div className="text-neutral-400">Website version v{APP_VERSION}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
