import { ColumnContainer, RowContainer } from './Containers';

import planning from './assets/city_planning.jpg';
import construciton from './assets/construction.jpg';
import engineering from './assets/engineering.jpg';

export function UseCases() {
    return (
        <ColumnContainer>
            <div>UseCases</div>
            <RowContainer>
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
                <UseCase>
                    <UseCaseImage src={engineering} />
                    <UseCaseTitle>Engineering</UseCaseTitle>
                    <UseCaseDescription>
                        Engineers can view all the parts necessary for a project.
                    </UseCaseDescription>
                </UseCase>
            </RowContainer>
        </ColumnContainer>
    );
}

function UseCase(props: { children: React.ReactNode }) {
    return <div>{props.children}</div>;
}

function UseCaseImage(props: { src: string }) {
    return <img src={props.src} alt="Use Case" />;
}

function UseCaseTitle(props: { children: React.ReactNode }) {
    return <div>{props.children}</div>;
}

function UseCaseDescription(props: { children: React.ReactNode }) {
    return <div>{props.children}</div>;
}
