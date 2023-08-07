import { ColumnContainer, RowContainer } from './Containers';

import planning from './assets/city_planning.jpg';
import construciton from './assets/construction.jpg';

export function UseCases() {
    return (
        <ColumnContainer className="py-32">
            <div className="text-4xl text-center title-font">Use Cases</div>
            <RowContainer className="mt-8 lg:space-x-8">
                <UseCase>
                    <UseCaseImage src={construciton} />
                    <UseCaseTitle>Construction</UseCaseTitle>
                    <UseCaseDescription>
                        Enhance communication across departments and companies by providing a direct
                        visual representation of every component in a construction project. Utilize
                        intuitive filters and view controls to easily navigate and explore each
                        part.
                    </UseCaseDescription>
                </UseCase>
                <UseCase>
                    <UseCaseImage src={planning} />
                    <UseCaseTitle>City Planning</UseCaseTitle>
                    <UseCaseDescription>
                        City planners can use this software to link tabular city data with 3D
                        models. Need to know where all schools inside of a disctrict? How much
                        energy does each building use? Easily view this information inside the
                        Metacity Viewer.
                    </UseCaseDescription>
                </UseCase>
            </RowContainer>
        </ColumnContainer>
    );
}

function UseCase(props: { children: React.ReactNode }) {
    return <div className="last:mt-16 lg:last:mt-0">{props.children}</div>;
}

function UseCaseImage(props: { src: string }) {
    return <img src={props.src} alt="Use Case" className="rounded-xl" />;
}

function UseCaseTitle(props: { children: React.ReactNode }) {
    return <div className="text-2xl my-4">{props.children}</div>;
}

function UseCaseDescription(props: { children: React.ReactNode }) {
    return <div>{props.children}</div>;
}
