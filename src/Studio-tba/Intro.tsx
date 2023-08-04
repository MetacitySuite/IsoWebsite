import { ColumnContainer, RowContainer } from './Containers';

import videoMP4 from './assets/ikea_v1_low.mp4';
import videoWEBM from './assets/ikea_v1.webm';

export function IntroWelcome() {
    return (
        <RowContainer className="py-20 justify-between items-center">
            <div className="text-5xl max-w-[11em]">
                <div># Welcome to Metacity:</div>
                <div>Unlock the Power of</div>
                <div>Tabular Data in 3D Space</div>
            </div>
            <div className="max-w-[25em] text-center text-lg">
                The Metacity web app, together with its .MCSV format, offers a user-friendly
                experience for organizing, presenting, editing, and creating tabular data in 3D
                space.
            </div>
        </RowContainer>
    );
}

export function IntroUses() {
    return (
        <RowContainer>
            <ColumnContainer>
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
            <ColumnContainer>
                <video className="" autoPlay>
                    <source src={videoWEBM} type="video/webm" />
                    <source src={videoMP4} type="video/mp4" />
                </video>
            </ColumnContainer>
        </RowContainer>
    );
}

function Usage(props: { children: React.ReactNode }) {
    return <div className="pb-4">{props.children}</div>;
}

function UsageTitle(props: { children: React.ReactNode }) {
    return <div>{props.children}</div>;
}

function UsageDescription(props: { children: React.ReactNode }) {
    return <div>{props.children}</div>;
}
