import { Menu } from '@headlessui/react';
import logo from './assets/logo-v2-tiny-funky.png';
import { RowContainer } from './Containers';

export function Header() {
    return (
        <RowContainer className="py-5 justify-between items-center" noResponsive>
            <div className="h-full">
                <img src={logo} alt="logo" className="block" />
            </div>
            <DemoButton />
        </RowContainer>
    );
}

export function DemoButton() {
    return (
        <div className="w-auto relative">
            <Menu>
                <Menu.Button className="inline-block px-10 py-3 text-white hover:text-indigo-500 font-semibold text-center tracking-tight bg-indigo-500 hover:bg-white border rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200">
                    Try it out
                </Menu.Button>
                <Menu.Items className="dropdown-content absolute bg-white shadow-md w-full rounded-md z-50 left-0 mt-3">
                    <DemoItem
                        title="Ikea Room"
                        link="https://dev.metacity.cc/editor/?model=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/IKEA-Room/room_ikea.mcmodel&style=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/IKEA-Room/room_ikea.mcstyle"
                    />
                    <DemoItem
                        title="Warehouse"
                        link="https://dev.metacity.cc/editor/?model=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/Warehouse-Materials/warehouse.mcmodel&style=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/Warehouse-Materials/warehouse.mcstyle"
                    />
                </Menu.Items>
            </Menu>
        </div>
    );
}

function DemoItem(props: { title: string; link: string }) {
    return (
        <Menu.Item>
            {({ active }) => (
                <a
                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white first:rounded-t-md last:rounded-b-md"
                    href={props.link}
                >
                    {props.title}
                </a>
            )}
        </Menu.Item>
    );
}
