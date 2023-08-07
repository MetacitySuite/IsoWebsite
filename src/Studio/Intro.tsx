import { ColumnContainer, RowContainer } from './Containers';

import videoMP4 from './assets/ikea_v1_low.mp4';
import videoWEBM from './assets/ikea_v1.webm';

export function IntroWelcome() {
    return (
        <ColumnContainer className="py-20 justify-between items-center">
            <div className="text-5xl title-font">
                <div>
                    <div>
                        <span className="text-neutral-500">#</span> Welcome to Metacity:{' '}
                        <span className="text-neutral-400">
                            Unlock the Power of Tabular Data in 3D Space
                        </span>
                    </div>
                </div>
            </div>
            <div className="text-xl py-8">
                The Metacity Studio web app, together with its .MCSV format, offers a user-friendly
                experience for organizing, presenting, editing, and creating tabular data in 3D
                space.
            </div>
        </ColumnContainer>
    );
}

export function IntroUses() {
    return (
        <RowContainer className="pb-16 flex-col-reverse">
            <ColumnContainer className="lg:max-w-[50%] items-center lg:mr-8">
                <Usage>
                    <UsageTitle>Create or link tabular data for your 3D objects.</UsageTitle>
                    <UsageDescription>
                        Effortlessly annotate imported 3D models, or utilize the built-in CSV
                        support to leverage existing tabular data - easily linking thousands of
                        rows.
                    </UsageDescription>
                </Usage>
                <Usage>
                    <UsageTitle>
                        Visualize massive amounts of data in 3D for better comprehension.
                    </UsageTitle>
                    <UsageDescription>
                        Easily filter and organize any volume of data. Utilize layers, colors, and
                        name-based filters. Create presentable and shareable versions of your data.
                    </UsageDescription>
                </Usage>
                <Usage>
                    <UsageTitle>Edit and share with your team.</UsageTitle>
                    <UsageDescription>
                        [ IN DEVELOPMENT ] Save, share, and easily edit your work, all stored in a
                        unified format. Seamlessly leverage popular cloud solutions such as Google
                        Drive or Dropbox to share with your team or clients.
                    </UsageDescription>
                </Usage>
            </ColumnContainer>
            <ColumnContainer className="lg:max-w-[50%] justify-center">
                <div className="mb-16">
                    <div className="lg:mt-0 bg-black px-3 py-2.5 rounded-t-xl ">
                        <div className="flex flex-wrap items-center -m-2">
                            <div className="w-auto p-2">
                                <div className="flex flex-row">
                                    <div className="w-auto p-1">
                                        <div className="w-2 h-2 bg-red-400 border border-red-500 rounded-full"></div>
                                    </div>
                                    <div className="w-auto p-1">
                                        <div className="w-2 h-2 bg-yellow-400 border border-yellow-500 rounded-full"></div>
                                    </div>
                                    <div className="w-auto p-1">
                                        <div className="w-2 h-2 bg-green-400 border border-green-500 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 p-2">
                                <div className="max-w-xs mx-auto py-0.5 px-4 text-sm text-white text-opacity-50 text-center bg-white bg-opacity-10 tracking-tight rounded">
                                    <span>studio.metacity.cc</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <video autoPlay className="rounded-b-xl">
                        <source src={videoWEBM} type="video/webm" />
                        <source src={videoMP4} type="video/mp4" />
                    </video>
                </div>
            </ColumnContainer>
        </RowContainer>
    );
}

function Usage(props: { children: React.ReactNode }) {
    return <div className="pb-4">{props.children}</div>;
}

function UsageTitle(props: { children: React.ReactNode }) {
    return <div className="pb-4 text-xl font-bold">{props.children}</div>;
}

function UsageDescription(props: { children: React.ReactNode }) {
    return <div className="text-neutral-500">{props.children}</div>;
}
