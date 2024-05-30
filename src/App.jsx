import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import ParticleBg from "./components/ParticleBg";
import ProjectCard from "./components/ProjectCard";
function App() {
    const htmlSample = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, esse! Voluptas temporibus illum architecto soluta ex assumenda iste delectus dolor asperiores autem sit dolorum aspernatur, dignissimos, mollitia placeat nostrum hic.</p>`;

    return (
        <div className="">
            {/* <Sidebar></Sidebar> */}
            <section
                id="particles"
                className=" min-h-screen flex items-center justify-center p-8 md:p-0">
                <ParticleBg></ParticleBg>
                <div className="max-w-2xl grid grid-cols-1 items-center justify-center">
                    <div className="text-center drop-shadow-lg	">
                        <div className="relative h-auto">
                            <p className="absolute -left-6 -top-8 text-2xl md:text-3xl text-lime-500 font-bold">
                                {"<h1>"}
                            </p>
                            <h1 className="text-5xl md:text-7xl text-white inline">
                                Hello, I'm{" "}
                                <span className="font-black text-white">
                                    Andrea
                                </span>
                            </h1>
                            <p className="absolute -right-6 -bottom-8 text-2xl md:text-3xl text-lime-500 font-bold">
                                {"</h1>"}
                            </p>
                        </div>
                        <p className="text-xl md:text-3xl text-lime-400 font-semibold mt-4">
                            Full stack developer, artist, designer.
                        </p>
                        <p className="text-white mt-4">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Consequatur voluptate deleniti aperiam quos
                            illo perspiciatis laudantium, fuga quam veniam
                            numquam.s
                        </p>
                        <div className="flex mt-4 justify-center">
                            <Button
                                value={"Email me"}
                                className={"mr-2"}></Button>
                            <Button value={"View CV"}></Button>
                        </div>
                    </div>
                    {/* <div className="relative border">
                        <img
                            src={blob}
                            alt=""
                            className="absolute w-100 top-0 z-0"
                        />
                        <img src={myImage} alt="" className="w-52" />
                    </div> */}
                </div>
            </section>
            <section className="min-h-screen p-16">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Expertise
                </p>
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </section>
            <section className="min-h-screen p-16">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Experience
                </p>
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </section>
            <section className="min-h-screen p-16">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg">
                    My Projects
                </p>
                <div className="grid grid-cols-3 gap-4 place-items-center">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </div>
            </section>
        </div>
    );
}

export default App;
