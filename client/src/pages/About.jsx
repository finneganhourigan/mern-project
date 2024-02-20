import TechCard from '../components/TechCard';

const About = () => {
    return (
        <div>
            <div class="px-[5%] sm:px-[10%] md:px-[20%] lg:px-[25%]">
                <h1 class="py-4 text-3xl font-bold">About Me</h1>
                <div class="items-center xl:flex">
                    <p class="pb-4">
                        Hello, I'm Finn, the driving force and sole creator
                        behind ___. Recently graduating from UW-Madison with a
                        degree in computer science, I'm currently seeking
                        opportunities within software/web development. Themed
                        around a new hobby of mine, ___, is a portfolio project
                        I've developed to demonstrate my skills to potential
                        employers.
                    </p>
                    <img
                        class="mx-auto w-[50%] rounded-full shadow-sm shadow-black xl:ml-10 xl:w-[40%] "
                        src="/assets/me1024.jpg"
                    />
                </div>

                <div class="my-8 grid grid-cols-2 gap-8">
                    <a
                        href="https://www.linkedin.com/in/finnegan-hourigan/"
                        target="_blank"
                    >
                        <div class="mx-auto flex items-center justify-center">
                            <img
                                class="h-auto w-[20%] min-w-16"
                                src="/assets/techImages/LinkedIn.svg"
                            />
                            <p class="mx-2">LinkedIn</p>
                        </div>
                    </a>
                    <a
                        href="https://github.com/finneganhourigan/mern-project"
                        target="_blank"
                    >
                        <div class="mx-auto flex items-center justify-center">
                            <img
                                class="h-auto w-[20%] min-w-16"
                                src="/assets/techImages/GitHub.png"
                            />
                            <p class="mx-2">Project Repo</p>
                        </div>
                    </a>
                </div>

                <h1 class="py-4 text-3xl font-bold">Purpose of the Site</h1>
                <p class="pb-4">
                    The world of disc golf discs can be daunting for newcomers
                    to the sport due to its complexity. The unintuitive flight
                    rating system, plethora of plastics options, and extensive
                    range of discs available create a high barrier to entry. ___
                    aims to simplify this process by providing a resource for
                    new disc golf enthusiasts to filter out excess information
                    and focus on what's essential when selecting discs for their
                    game.
                </p>

                <h1 class="py-4 text-3xl font-bold">Technologies Used:</h1>
                <p class="pb-4">
                    While this project is relatively small, I opted to utilize a
                    full stack of technologies commonly used by companies
                    worldwide. This choice demonstrates my ability to integrate
                    into larger-scale, pre-established projects with multiple
                    interconnected components.
                </p>

                <h1 class="py-4 text-3xl font-bold">
                    Core Technologies: The MERN Stack
                </h1>
                <div class="custom-about-page:grid-cols-8 grid grid-cols-4 gap-4 pb-4 sm:grid-cols-4">
                    <TechCard
                        title="MongoDB"
                        image="/assets/techImages/MongoDB.svg"
                        description="With the help of Mongoose, MongoDB provides flexible
                        and scalable data storage, crucial for managing the associated
                        data of discs."
                    />
                    <TechCard
                        title="Express"
                        image="/assets/techImages/Express.png"
                        description="Built on Node.js, Express offers a set of features and
                        tools that simplify the development of both the application and
                        API."
                    />
                    <TechCard
                        title="React"
                        image="/assets/techImages/React.svg"
                        description="The world's most popular frontend framework, React, was
                        used to create a dynamic and interactive user interface."
                    />
                    <TechCard
                        title="Node"
                        image="/assets/techImages/Node.js.svg"
                        description="Powering server-side logic and API endpoints for
                        communication with the database."
                    />
                </div>
            </div>

            <div class="custom-about-page:px-[25%] px-[5%] pb-12 sm:px-[10%] md:px-[17%]">
                <h1 class="py-4 text-3xl font-bold">Secondary Technologies:</h1>
                <div class="grid grid-cols-4 gap-4 pb-4 sm:grid-cols-4 lg:grid-cols-6">
                    <TechCard
                        title="GitHub"
                        image="/assets/techImages/GitHub.png"
                        description="Beyond serving as a means for version control, GitHub allowed me to confidently implement the practice of continuous development through the project's lifecycle."
                    />
                    <TechCard
                        title="Tailwind"
                        image="/assets/techImages/Tailwind CSS.svg"
                        description="I used Tailwind as my CSS framework for rapid UI development. The Prettier plugin works in tandem with Tailwind to ensure consistent code formatting for improved readability."
                    />
                    <TechCard
                        title="Postman"
                        image="/assets/techImages/Postman.svg"
                        description="Postman let me test and debug my API endpoints throughout development. It allowed me to send requests to my backend, inspect responses, and analyze data flow."
                    />

                    {/* Dedicated classes for these so they're centered in the grid despite the odd number of elements */}
                    <div class="col-span-2 lg:col-span-3 lg:ml-[33%] lg:w-2/3">
                        <TechCard
                            title="Vercel"
                            image="/assets/techImages/Vercel.png"
                            description="Vercel hosts the frontend of the application. Integrated with the project's GitHub repository, Vercel supports seamless continuous delivery."
                        />
                    </div>
                    <div class="col-span-4 ml-[25%] w-1/2 lg:col-span-3 lg:m-0 lg:grid lg:w-2/3">
                        <TechCard
                            title="Render"
                            image="/assets/techImages/Render.svg"
                            description="Render is hosting the backend of the project, allowing for users' requests to interact with the database. With Vercel, these technologies host the full app."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
