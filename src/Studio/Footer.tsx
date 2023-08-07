import { ColumnContainer, RowContainer } from './Containers';
import { DemoButton } from './Header';
import logo from './assets/logo-v2-tiny-funky.png';

export function TryNow() {
    return (
        <ColumnContainer className="py-16">
            <div className="text-4xl text-center title-font">Try it out now!</div>
            <div className="mt-4 mb-8 text-xl text-center">
                Select one of the examples to play around. Only large screens are currently
                supported.
            </div>
            <RowContainer className="justify-center" noResponsive>
                <DemoButton />
            </RowContainer>
        </ColumnContainer>
    );
}

export function Footer() {
    return (
        <div className="flex flex-col sm:flex-row pb-10 justify-between items-center">
            <div className="h-full">
                <img src={logo} alt="logo" className="block" />
            </div>
            <div className="text-neutral-500 mt-4 sm:mt-0">
                &copy; Copyright 2023 Metacity Tools
            </div>
        </div>
    );
}
