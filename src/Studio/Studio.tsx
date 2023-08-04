export function Studio() {
    return (
        <div
            className="antialiased bg-body text-body font-body"
            onLoad={() => {
                // Get elements
                const dropdownButton = document.getElementById('dropdownButton');
                const myDropdown = document.getElementById('myDropdown');

                if (!dropdownButton || !myDropdown) return;

                // Button click toggles visibility of dropdown
                dropdownButton.onclick = function (event) {
                    event.stopPropagation(); // Don't trigger window.onclick
                    myDropdown.classList.toggle('hidden');
                };

                // Clicking elsewhere on window hides dropdown
                window.onclick = function (event) {
                    myDropdown.classList.add('hidden');
                };

                // Clicking elsewhere on window hides dropdown
                window.onclick = function (event) {
                    document.querySelectorAll('.dropdown-content').forEach(function (dropdown) {
                        dropdown.classList.add('hidden');
                    });
                };
            }}
        >
            <div className="">
                <section className="overflow-visible">
                    <div className="bg-gray-900">
                        <div className="container px-4 mx-auto">
                            <div className="flex items-center justify-between py-5">
                                <div className="w-auto">
                                    <div className="flex flex-wrap items-center">
                                        <div className="w-auto pr-2">
                                            <a href="#">
                                                <img src="images/logo-v2-tiny-funky.png" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-auto">
                                    <div className="flex flex-wrap items-center">
                                        <div className="w-auto hidden lg:block relative">
                                            <button
                                                id="dropdownButton"
                                                className="inline-block px-5 py-3 text-white hover:text-indigo-500 font-semibold text-center tracking-tight bg-indigo-500 hover:bg-white border rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                                            >
                                                Try it out!
                                            </button>
                                            <div
                                                id="myDropdown"
                                                className="dropdown-content hidden absolute bg-white shadow-md py-1 w-full rounded-md z-50 left-0 mt-3"
                                            >
                                                <a
                                                    href="https://dev.metacity.cc/editor/?model=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/IKEA-Room/room_ikea.mcmodel&style=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/IKEA-Room/room_ikea.mcstyle"
                                                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                                >
                                                    Ikea Room
                                                </a>
                                                <a
                                                    href="https://dev.metacity.cc/editor/?model=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/Warehouse-Materials/warehouse.mcmodel&style=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/Warehouse-Materials/warehouse.mcstyle"
                                                    className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                                >
                                                    Warehouse
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto lg:hidden">
                                        <a href="#">
                                            <svg
                                                className="navbar-burger text-indigo-600"
                                                width="51"
                                                height="51"
                                                viewBox="0 0 56 56"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <rect
                                                    width="56"
                                                    height="56"
                                                    rx="28"
                                                    fill="currentColor"
                                                ></rect>
                                                <path
                                                    d="M37 32H19M37 24H19"
                                                    stroke="white"
                                                    stroke-width="1.5"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                ></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50 hidden">
                        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                        <nav className="relative z-10 px-9 pt-8 bg-black h-full overflow-y-auto">
                            <div className="flex flex-wrap justify-between h-full">
                                <div className="w-full">
                                    <div className="flex items-center justify-between -m-2">
                                        <div className="w-auto p-2">
                                            <a className="inline-block" href="#">
                                                <img src="images/logo-v2-tiny-funky.png" alt="" />
                                            </a>
                                        </div>
                                        <div className="w-auto p-2">
                                            <a className="navbar-burger text-white" href="#">
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M6 18L18 6M6 6L18 18"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    ></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center py-16 w-full">
                                    <ul>
                                        <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight">
                                            <a href="#">Features</a>
                                        </li>
                                        <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight">
                                            <a href="#">Pricing</a>
                                        </li>
                                        <li className="mb-12 font-medium text-white hover:text-gray-200 tracking-tight">
                                            <a href="#">Automation</a>
                                        </li>
                                        <li className="font-medium text-white hover:text-gray-200 tracking-tight">
                                            <a href="#">Customer Login</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col justify-end w-full pb-8 relative">
                                    <button className="inline-block px-5 py-3 text-white font-semibold text-center tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200">
                                        Try Now!
                                    </button>
                                    <div className="dropdown-content hidden absolute bg-white shadow-md mt-2 py-1 w-full rounded-md z-50 left-0 mt-3 my-14">
                                        <a
                                            href="https://dev.metacity.cc/editor/?model=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/IKEA-Room/room_ikea.mcmodel&style=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/IKEA-Room/room_ikea.mcstyle"
                                            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                        >
                                            Ikea Room
                                        </a>
                                        <a
                                            href="https://dev.metacity.cc/editor/?model=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/Warehouse-Materials/warehouse.mcmodel&style=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/Warehouse-Materials/warehouse.mcstyle"
                                            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                        >
                                            Warehouse
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
                <section className="relative pt-9 pb-28 overflow-hidden bg-gray-900">
                    <div className="container px-4 pb-40 mx-auto">
                        <div className="mb-16 mx-auto py-16 xl:flex">
                            <h1 className="font-heading text-white tracking-tighter text-6xl">
                                # Welcome to Metacity: Unlock the Power of Tabular Data in 3D Space
                            </h1>
                            <div className="my-auto">
                                <p className="text-xl text-white text-center xl:mx-16 my-8 xl:ml-32">
                                    The Metacity web app, together with its .MCSV format, offers a
                                    user-friendly experience for organizing, presenting, editing,
                                    and creating tabular data in 3D space.{' '}
                                </p>
                            </div>
                        </div>
                        <div className="lg:flex">
                            <div className="keep md:w-3/6">
                                <div className="w-full p-4">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="flex-1 p-2">
                                            <h3 className="mb-3 text-xl text-white font-semibold tracking-tight">
                                                Create or link tabular data for your 3D objects.
                                            </h3>
                                            <p className="text-xl text-gray-500 tracking-tight">
                                                Effortlessly annotate imported 3D models, or utilize
                                                the built-in CSV support to leverage existing
                                                tabular data - easily linking thousands of rows.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-4">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="flex-1 p-2">
                                            <h3 className="mb-3 text-xl text-white font-semibold tracking-tight">
                                                Visualize massive amounts of data in 3D for better
                                                comprehension.
                                            </h3>
                                            <p className="text-xl text-gray-500 tracking-tight">
                                                Easily filter and organize any volume of data.
                                                Utilize layers, colors, and name-based filters.
                                                Create presentable and shareable versions of your
                                                data.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full p-4">
                                    <div className="flex flex-wrap -m-2">
                                        <div className="flex-1 p-2">
                                            <h3 className="mb-3 text-xl text-white font-semibold tracking-tight">
                                                Edit and share with your team.
                                            </h3>
                                            <p className="text-xl text-gray-500 tracking-tight">
                                                [ IN DEVELOPMENT ] Save, share, and easily edit your
                                                work, all stored in a unified format. Seamlessly
                                                leverage popular cloud solutions such as Google
                                                Drive or Dropbox to share with your team or clients.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative z-10 overflow-hidden rounded-xl">
                                <div className="bg-black px-3 py-2.5">
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
                                <div className="bg-gray-700">
                                    <div className="">
                                        <div className="w-full flex">
                                            <div className="group relative max-w-max ml-auto">
                                                <div className="rounded-xl">
                                                    <video className="" autoPlay>
                                                        <source
                                                            src="images/ikea_v1.webm"
                                                            type="video/webm"
                                                        />
                                                        <source
                                                            src="images/ikea_v1_low.mp4"
                                                            type="video/mp4"
                                                        />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full">
                        <svg
                            className="w-full"
                            width="100%"
                            height="186"
                            preserveAspectRatio="none"
                            viewBox="0 0 1600 186"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1608 127.618C969.729 -103.398 167.657 31.1518 0 127.618V186H1608V127.618Z"
                                fill="white"
                                className=""
                            ></path>
                        </svg>
                        <div className="bg-gray-100 bg-gradient-to-b from-white to-gray-100"></div>
                    </div>
                </section>

                <h3 className="font-heading text-5xl tracking-tight text-center pt-16">
                    Let's see how it works.
                </h3>

                <section className="lg:py-32 overflow-hidden py-16">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:items-center -m-8">
                            <div className="w-full md:w-1/2 p-8">
                                <div className="md:max-w-lg">
                                    <h2 className="font-heading mb-6 text-6xl tracking-tighter">
                                        Step 1: Prepare Your Data
                                    </h2>
                                    <p className="text-xl mb-11">
                                        Metacity Studio, with its Metacity format, simplifies the
                                        process of creating and linking all your required data
                                        within a 3D viewport to any 3D models. Open up Metacity
                                        Studio, and:
                                    </p>
                                    <ul>
                                        <li className="list-disc py-2">
                                            Easily add, group, remove, and edit objects using the
                                            provided editing tools.
                                        </li>
                                        <li className="list-disc py-2">
                                            Import your tabular data and establish links to your
                                            prepared 3D objects.
                                        </li>
                                        <li className="list-disc py-2">
                                            Enhance your models with custom metadata. Add
                                            descriptions, colors, sticky notes, custom names, and
                                            utilize tags from the prepared library for advanced
                                            functionality.
                                        </li>
                                        <li className="list-disc py-2">
                                            Save everything into a unified format.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-8">
                                <div className="max-w-max mx-auto">
                                    <img
                                        className="transform hover:-translate-y-2 transition duration-500"
                                        src="images/step_1.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lg:py-32 overflow-hidden py-16">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:items-center -m-8">
                            <div className="w-full md:w-1/2 p-8">
                                <div className="max-w-max mx-auto">
                                    <img
                                        className="transform hover:-translate-y-2 transition duration-500"
                                        src="images/step_2.jpg"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-8">
                                <div className="md:max-w-lg">
                                    <h2 className="font-heading mb-6 text-6xl tracking-tighter">
                                        Step 2: View and Present Your Data
                                    </h2>
                                    <p className="text-xl mb-11">
                                        With Metacity Viewer, seamlessly view, present, and interact
                                        with your data.
                                    </p>
                                    <ul>
                                        <li className="py-2 list-disc">
                                            {' '}
                                            Load your Metacity project and effortlessly explore your
                                            linked data in a 3D viewport.
                                        </li>
                                        <li className="py-2 list-disc">
                                            Customize your viewing experience with filters, layers,
                                            and more, automatically generated from the data.
                                        </li>
                                        <li className="py-2 list-disc">
                                            Easily access and navigate colors, materials, notes,
                                            remarks, and descriptions within your web browser.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <h4 className="font-heading text-4xl tracking-tight text-center">Use Cases</h4>

                <section className="overflow-hidden p-1 bg-gradient-to-b">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="w-full md:w-1/2 p-8">
                                <div className="max-w-xs mx-auto text-center">
                                    <img
                                        className="mx-auto mb-9"
                                        src="images/construction.jpg"
                                        alt=""
                                    />
                                    <h3 className="mb-4 text-xl font-semibold tracking-tight">
                                        Construction
                                    </h3>
                                    <p className="mb-8 tracking-tight">
                                        Enhance communication across departments and companies by
                                        providing a direct visual representation of every component
                                        in a construction project. Utilize intuitive filters and
                                        view controls to easily navigate and explore each part.
                                    </p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-8">
                                <div className="max-w-xs mx-auto text-center">
                                    <img
                                        className="mx-auto mb-9"
                                        src="images/city_planning.jpg"
                                        alt=""
                                    />
                                    <h3 className="mb-4 text-xl font-semibold tracking-tight">
                                        City Planning
                                    </h3>
                                    <p className="mb-8 tracking-tight">
                                        City planners can use this software to link tabular city
                                        data with 3D models. Need to know where all schools inside
                                        of a disctrict? How much energy does each building use?
                                        Easily view this information inside the Metacity Viewer.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 overflow-hidden bg-gray-900">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="font-heading mb-4 text-6xl tracking-tighter text-white">
                                Try it out now!
                            </h2>
                            <p className="mb-8 text-xl tracking-tight text-white">
                                Select one of the examples to play around. Only large screens are
                                currently supported.
                            </p>
                            <div className="w-auto hidden lg:block relative">
                                <button
                                    id="dropdownButton"
                                    className="inline-block px-5 py-3 text-white hover:text-indigo-500 font-semibold text-center tracking-tight bg-indigo-500 hover:bg-white border rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200"
                                >
                                    Try it out!
                                </button>
                                <div
                                    id="myDropdown"
                                    className="dropdown-content hidden absolute bg-white shadow-md mt-2 py-1 w-full rounded-md z-50 left-0 mt-3"
                                >
                                    <a
                                        href="https://dev.metacity.cc/editor/?model=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/IKEA-Room/room_ikea.mcmodel&style=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/IKEA-Room/room_ikea.mcstyle"
                                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                    >
                                        Ikea Room
                                    </a>
                                    <a
                                        href="https://dev.metacity.cc/editor/?model=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/Warehouse-Materials/warehouse.mcmodel&style=raw.githubusercontent.com/MetacityTools/Studio-Examples/main/Warehouse-Materials/warehouse.mcstyle"
                                        className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                    >
                                        Warehouse
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-9 bg-gray-900 overflow-hidden">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap items-center justify-between">
                            <div className="w-auto p-4">
                                <div className="flex flex-wrap items-center">
                                    <div className="w-auto p-7">
                                        <a href="#">
                                            <img src="images/logo-v2-tiny-funky.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="w-auto p-7">
                                        <p className="text-sm text-white tracking-tight">
                                            © Copyright 2023 Metacity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
