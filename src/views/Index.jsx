import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Sidebar from "../components/Sidebar";
import Button from "./../components/Button";
import ProjectCard from "./../components/ProjectCard";
import SkillCard from "./../components/SkillCard";
import SocialButton from "./../components/SocialButton";
import TimelineCard from "./../components/TimelineCard";
export const Index = () => {
    const [activeNavItem, setActiveNavItem] = useState("Home");

    const { ref: homeSectionRef, inView: homeSectionInView } = useInView({
        threshold: 0,
    });
    const { ref: skillsSectionRef, inView: skillsSectionInView } = useInView({
        threshold: 0,
    });
    const { ref: experienceSectionRef, inView: experienceSectionInView } =
        useInView({
            threshold: 0,
        });
    const { ref: awardsSectionRef, inView: awardsSectionInView } = useInView({
        threshold: 0,
    });
    const { ref: projectsSectionRef, inView: projectsSectionInView } =
        useInView({
            threshold: 0,
        });

    useEffect(() => {
        if (homeSectionInView) {
            setActiveNavItem("Home");
        } else if (skillsSectionInView) {
            setActiveNavItem("Skills");
        } else if (experienceSectionInView) {
            setActiveNavItem("Experience");
        } else if (awardsSectionInView) {
            setActiveNavItem("Awards");
        } else if (projectsSectionInView) {
            setActiveNavItem("Projects");
        }
    }, [
        homeSectionInView,
        skillsSectionInView,
        experienceSectionInView,
        awardsSectionInView,
        projectsSectionInView,
    ]);

    return (
        <>
            <Sidebar activeNavItem={activeNavItem}></Sidebar>

            <section
                id="home-section"
                ref={homeSectionRef}
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
            <section
                id="skills-section"
                ref={skillsSectionRef}
                className="h-auto p-16 max-w-screen-2xl mx-auto">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My experience / Expertise
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 grid-auto-rows">
                    <SkillCard
                        title={"Languages"}
                        skills={[
                            "PHP",
                            "Javascript",
                            "Python",
                            "C#",
                            "C++",
                            "Java",
                        ]}
                    />
                    <SkillCard
                        title={"Frameworks"}
                        skills={["Laravel", "Bootstrap", "Tailwind"]}
                    />
                    <SkillCard
                        title={"Libraries"}
                        skills={[
                            "React",
                            "jQuery",
                            "Alpine.js",
                            "Livewire",
                            "Axios",
                            "Inertia",
                        ]}
                    />
                    <SkillCard
                        title={"Database"}
                        skills={["MySQL", "Microsoft SQL"]}
                    />
                    <SkillCard
                        title={"Version Contron"}
                        skills={["Git", "GitHub"]}
                    />
                </div>
            </section>
            <section
                id="experience-section"
                ref={experienceSectionRef}
                className="h-auto p-16">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Experience
                </p>
                <div className="grid grid-cols-1 place-items-center">
                    <SkillCard></SkillCard>
                </div>
            </section>
            <section
                id="awards-section"
                ref={awardsSectionRef}
                className="h-auto p-16 max-w-screen-2xl mx-auto">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Awards / Certificates
                </p>
                <div className="grid grid-cols-1 gap-4 place-items-center">
                    <div className="border-l-2 mt-10">
                        <TimelineCard
                            date={"Dec 2023"}
                            title={"Programming Skills Evaluation"}
                            description={
                                "University of the East"
                            }></TimelineCard>
                        <TimelineCard
                            date={"Dec 2023"}
                            title={"IT Specialist in Python"}
                            description={
                                "Certiport: Pearson VUE"
                            }></TimelineCard>
                        <TimelineCard
                            date={"Nov 2023"}
                            title={"IT Specialist in HTML & CSS"}
                            description={
                                "Certiport: Pearson VUE"
                            }></TimelineCard>
                        <TimelineCard
                            date={"Nov 2023"}
                            title={"2nd Place - Best in Thesis"}
                            description={
                                "University of the East"
                            }></TimelineCard>
                        <TimelineCard
                            date={"Mar 2022"}
                            title={"3rd Place - Website Designing Competition"}
                            description={
                                "University of the East CCSS"
                            }></TimelineCard>
                    </div>
                </div>
            </section>
            <section
                id="projects-section"
                ref={projectsSectionRef}
                className="min-h-screen p-16 max-w-screen-2xl mx-auto">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg">
                    My Projects
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                    <ProjectCard></ProjectCard>
                </div>
            </section>
        </>
    );
};

export default Index;
