import { ColumnContainer, RowContainer } from './Containers';

import step1img from './assets/step_1.jpg';
import step2img from './assets/step_2.jpg';

export function HowItWorksTitle() {
    return <div className="text-3xl text-center my-16">Let's see how it works.</div>;
}

export function Step1Panel() {
    return (
        <RowContainer>
            <ColumnContainer className="lg:max-w-[50%] mb-4 lg:mb-0 lg:mr-8">
                <StepTitle>Step 1: Prepare Your Data</StepTitle>
                <StepDescription>
                    Metacity Studio, with its Metacity format, simplifies the process of creating
                    and linking all your required data within a 3D viewport to any 3D models. Open
                    up Metacity Studio, and:
                </StepDescription>
                <StepNotesList>
                    <StepNotesListItem>
                        Easily add, group, remove, and edit objects using the provided editing
                        tools.
                    </StepNotesListItem>
                    <StepNotesListItem>
                        Import your tabular data and establish links to your prepared 3D objects.
                    </StepNotesListItem>
                    <StepNotesListItem>
                        Enhance your models with custom metadata. Add descriptions, colors, sticky
                        notes, custom names, and utilize tags from the prepared library for advanced
                        functionality.
                    </StepNotesListItem>
                    <StepNotesListItem>Save everything into a unified format.</StepNotesListItem>
                </StepNotesList>
            </ColumnContainer>
            <ColumnContainer className="lg:max-w-[50%] justify-center">
                <img src={step1img} alt="Step 1" className="rounded-xl" />
            </ColumnContainer>
        </RowContainer>
    );
}

export function Step2Panel() {
    return (
        <RowContainer className="flex-col-reverse mt-16">
            <ColumnContainer className="lg:max-w-[50%] justify-center">
                <img src={step2img} alt="Step 2" className="rounded-xl" />
            </ColumnContainer>
            <ColumnContainer className="lg:max-w-[50%] mb-4 lg:mb-0 lg:ml-8">
                <StepTitle>Step 2: View and Present Your Data</StepTitle>
                <StepDescription>
                    With Metacity Viewer, seamlessly view, present, and interact with your data.
                </StepDescription>
                <StepNotesList>
                    <StepNotesListItem>
                        Load your Metacity project and effortlessly explore your linked data in a 3D
                        viewport.
                    </StepNotesListItem>
                    <StepNotesListItem>
                        Customize your viewing experience with filters, layers, and more,
                        automatically generated from the data.
                    </StepNotesListItem>
                    <StepNotesListItem>
                        Easily access and navigate colors, materials, notes, remarks, and
                        descriptions within your web browser.
                    </StepNotesListItem>
                </StepNotesList>
            </ColumnContainer>
        </RowContainer>
    );
}

function StepTitle(props: { children: React.ReactNode }) {
    return <div className="text-4xl">{props.children}</div>;
}

function StepDescription(props: { children: React.ReactNode }) {
    return <div className="text-xl my-8">{props.children}</div>;
}

function StepNotesList(props: { children: React.ReactNode }) {
    return <ul className="pl-4">{props.children}</ul>;
}

function StepNotesListItem(props: { children: React.ReactNode }) {
    return <li className="list-disc my-2">{props.children}</li>;
}
