import React from "react";
import Button from "./../components/Button";
import Card from "./../components/Card";
import ProjectCard from "./../components/ProjectCard";
import SocialButton from "./../components/SocialButton";
import TimelineCard from "./../components/TimelineCard";

export const Index = () => {
    return (
        <>
            <section
                id="particles"
                className=" min-h-screen flex items-center justify-center p-12 md:p-0">
                <div className="max-w-2xl grid grid-cols-1 items-center justify-center">
                    <div className="text-center drop-shadow-lg	">
                        <div className="relative h-auto">
                            <p className="absolute -left-0 md:-left-6 -top-4 md:-top-8 text-xl md:text-3xl text-lime-500 font-bold">
                                {"<h1>"}
                            </p>
                            <h1 className="text-6xl md:text-7xl text-white inline">
                                Hello, I'm{" "}
                                <span className="font-black text-white">
                                    Andrea
                                </span>
                            </h1>
                            <p className="absolute -right-0 md:-right-6 -bottom-4 md:-bottom-8 text-xl md:text-3xl text-lime-500 font-bold">
                                {"</h1>"}
                            </p>
                        </div>
                        <p className="text-xl md:text-3xl text-lime-400 font-semibold mt-4">
                            Full stack developer, artist, designer.
                        </p>
                        <p className="text-white mt-4">
                            I'm a 22-year-old web developer specializing in
                            Laravel, holding a degree in Information Technology
                            from the University of the East. Feel free to email
                            me to get in touch!
                        </p>
                        <div className="flex gap-x-2 justify-center mt-4">
                            <Button value={"Email me"}></Button>
                            <Button value={"View CV"}></Button>

                            <SocialButton icon={"linkedin"}></SocialButton>
                            <SocialButton icon={"github"}></SocialButton>
                        </div>
                    </div>
                </div>
            </section>
            <section className="h-auto p-16 max-w-screen-2xl mx-auto">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Skills / Expertise
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 place-items-center">
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </section>
            <section className="h-auto p-16">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Experience
                </p>
                <div className="grid grid-cols-1 place-items-center">
                    <Card></Card>
                </div>
            </section>
            <section className="h-auto p-16 max-w-screen-2xl mx-auto">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Awards / Certificates
                </p>
                <div className="grid grid-cols-1 gap-4 place-items-center">
                    <div class="border-l-2 mt-10">
                        <TimelineCard></TimelineCard>
                        <TimelineCard></TimelineCard>
                        <TimelineCard></TimelineCard>
                        <TimelineCard></TimelineCard>
                    </div>
                </div>
            </section>
            <section className="h-auto p-16 max-w-screen-2xl mx-auto">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg">
                    My Projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </div>
            </section>
        </>
    );
};

export default Index;
