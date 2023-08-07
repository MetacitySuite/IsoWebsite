import { Heading } from './Heading';

const classImg = 'w-[40%] object-cover rounded-lg drop-shadow-lg absolute';

export function HomeScreen() {
    return (
        <>
            <Heading />

            <div className="max-w-[1200px] mx-auto">
                <a href="/studio">
                    <div className="flex flex-row flex-wrap mx-4 rounded-3xl shadow-lg">
                        <img
                            src="studio3.png"
                            className="block w-[100%] md:w-[50%]  object-cover md:rounded-l-3xl md:rounded-tr-none rounded-t-3xl"
                        />
                        <img
                            src="studio.png"
                            className="block w-[100%] md:w-[50%]  object-cover md:rounded-r-3xl md:rounded-bl-none rounded-b-3xl"
                        />
                    </div>
                </a>
            </div>
            <div className="max-w-[1000px] mx-auto mt-10 md:mt-20 text-2xl md:text-3xl">
                <p className="mx-4 leading-normal text-neutral-400">
                    We are a Prague-based division of{' '}
                    <a href="https://stdio.cz" className="border-b">
                        st.dio
                    </a>{' '}
                    programmers focused on{' '}
                    <span className="text-neutral-700">spatial data visualization</span> and{' '}
                    <span className="text-neutral-700">interactive simulation</span> on the web.
                </p>
                <div className="mx-4 mt-8 leading-normal text-neutral-400 flex flex-row flex-wrap items-center border-t pt-8">
                    <div className="text-neutral-400 mr-4">Partners:</div>
                    <a href="https://www.cesnet.cz">
                        <img
                            src="cesnet.svg"
                            alt="cesnet"
                            className="max-w-[100px] brightness-0 opacity-50"
                        />
                    </a>
                    <a href="http://oncue.design">
                        <img
                            src="ocdLogo.png"
                            alt="oncue.design"
                            className="max-w-[100px] brightness-0 opacity-50"
                        />
                    </a>
                </div>
            </div>

            <div className="max-w-[1200px] mx-auto mt-8 md:mt-16">
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

            <div className="border-t py-8 mt-20 bg-white">
                <div className="max-w-[1000px] m-auto">
                    <div className="mx-4 text-sm">
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
