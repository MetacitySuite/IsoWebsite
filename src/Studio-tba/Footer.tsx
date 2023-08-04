import { ColumnContainer, RowContainer } from './Containers';
import { DemoButton } from './Header';
import logo from './assets/logo-v2-tiny-funky.png';

export function TryNow() {
    return (
        <ColumnContainer>
            <div>Try it out now!</div>
            <div>
                Select one of the examples to play around. Only large screens are currently
                supported.
            </div>
            <DemoButton />
        </ColumnContainer>
    );
}

export function Footer() {
    return (
        <RowContainer>
            <img src={logo} alt="logo" />
            <div>&copy; Copyright 2023 Metacity Tools</div>
        </RowContainer>
    );
}
