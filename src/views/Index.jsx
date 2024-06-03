import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "scrollreveal";
import ExperienceCard from "../components/ExperienceCard";
import Sidebar from "../components/Sidebar";
import LccmLibarySystemImage from "./../../public/images/projects/lccm-library-system.png";
import PersonalWbsiteImage from "./../../public/images/projects/personal-website.png";
import ShopeastImage from "./../../public/images/projects/shopeast.png";
import CvPdf from "./../../public/pdf/cv.pdf";
import Button from "./../components/Button";
import ProjectCard from "./../components/ProjectCard";
import SkillCard from "./../components/SkillCard";
import SocialButton from "./../components/SocialButton";
import TimelineCard from "./../components/TimelineCard";

export const Index = () => {
    useEffect(() => {
        ScrollReveal({ reset: true }).reveal(".scroll-reveal", { delay: 100 });
    }, []);

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
                className="scroll-reveal min-h-screen flex items-center justify-center p-12 md:p-0">
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
                        <p className="text-zinc-300 mt-4">
                            I'm a 22-year-old web developer specializing in
                            Laravel, holding a degree in Information Technology
                            from the University of the East. Feel free to email
                            me to get in touch!
                        </p>
                        <div className="flex gap-x-2 justify-center mt-4">
                            <Button
                                value={"Email me"}
                                url={"mailto:andimagsumbol@gmail.com"}></Button>
                            <Button value={"View CV"} url={CvPdf}></Button>

                            <SocialButton
                                icon={"linkedin"}
                                url={
                                    "https://www.linkedin.com/in/andimagsumbol/"
                                }></SocialButton>
                            <SocialButton
                                icon={"github"}
                                url={
                                    "https://www.github.com/andimags/"
                                }></SocialButton>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="skills-section"
                ref={skillsSectionRef}
                className="h-auto p-16 max-w-screen-2xl mx-auto md:ml-16 2xl:ml-auto">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Skills / Expertise
                </p>
                <div className="flex gap-x-8 justify-center mb-4">
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-lime-700 border border-lime-600 mr-2"></div>
                        <p className="text-white text-sm">Advanced</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-lime-600 border border-lime-500 mr-2"></div>
                        <p className="text-white text-sm">Intermediate</p>
                    </div>
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-zinc-700 border border-zinc-600 mr-2"></div>
                        <p className="text-white text-sm">Beginner</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 grid-auto-rows">
                    <SkillCard
                        title={"Languages"}
                        skills={{
                            PHP: "advanced",
                            Javascript: "intermediate",
                            Python: "intermediate",
                            "C#": "beginner",
                            "C++": "beginner",
                            Java: "beginner",
                        }}
                        className="scroll-reveal"
                    />
                    <SkillCard
                        title={"Frameworks"}
                        skills={{
                            Laravel: "advanced",
                            Bootstrap: "advanced",
                            Tailwind: "advanced",
                        }}
                    />
                    <SkillCard
                        title={"Libraries"}
                        skills={{
                            jQuery: "advanced",
                            Livewire: "intermediate",
                            React: "intermediate",
                            Axios: "intermediate",
                            Inertia: "beginner",
                            "Alpine.js": "beginner",
                        }}
                    />
                    <SkillCard
                        title={"Database"}
                        skills={{
                            MySQL: "advanced",
                            "Microsoft SQL": "intermediate",
                        }}
                    />
                    <SkillCard
                        title={"Version Control"}
                        skills={{ Git: "intermediate", GitHub: "intermediate" }}
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
                <div className="max-w-xl mx-auto">
                    <ExperienceCard />
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
                className="min-h-screen p-16 max-w-screen-2xl mx-auto md:ml-16 2xl:ml-auto">
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg">
                    My Projects
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 place-items-center">
                    <ProjectCard
                        src={LccmLibarySystemImage}
                        title={"LCCM Library System"}
                        date={"Nov 2022 - Nov 2023"}
                        description={
                            "Ranked 2nd place for Best Thesis in IT. The project includes features such as automatic fine calculations, easy book setup using Google Books, night mode, attendance and barcode reading."
                        }
                        url={
                            "https://www.github.com/andimags/lccm-library-system"
                        }></ProjectCard>
                    <ProjectCard
                        src={PersonalWbsiteImage}
                        title={"Personal Wesbite"}
                        date={"Apr 2022"}
                        description={
                            "My first personal website developed with HTML, CSS, vanilla JS, and Bootstrap for media queries."
                        }
                        url={
                            "https://www.github.com/andimags/personal-website"
                        }></ProjectCard>
                    <ProjectCard
                        src={ShopeastImage}
                        title={"ShopEast 2.0"}
                        date={"Mar 2022"}
                        description={
                            "3rd Place Winner in USC's ShopEast Website Design Competition. Developed using HTML, CSS, jQuery, and Bootstrap for responsive design and media queries. Aiding UE students in online selling during quarantine."
                        }
                        url={
                            "https://www.github.com/andimags/shopeast"
                        }></ProjectCard>
                </div>
            </section>
        </>
    );
};

export default Index;
