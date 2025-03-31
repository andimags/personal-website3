import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ScrollReveal from "scrollreveal";
import ExperienceCard from "../components/ExperienceCard";
import Sidebar from "../components/Sidebar";
import LccmLibarySystemImage from "./../../public/images/projects/lccm-library-system.png";
import PersonalWbsiteImage from "./../../public/images/projects/personal-website.png";
import ShopeastImage from "./../../public/images/projects/shopeast.png";
import sunSvg from "./../../public/images/sun.webp";
import waveSvg from "./../../public/images/wave.webp";
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
                className="scroll-reveal min-h-screen flex items-center justify-center p-8 md:p-0"
            >
                <div className="max-w-2xl 2xl:max-w-4xl grid grid-cols-1 items-center justify-center">
                    <div className="text-center drop-shadow-lg	">
                        <div className="relative h-auto">
                            <p className="absolute left-0 md:-left-6 -top-4 md:-top-8 text-xl md:text-3xl 2xl:text-5xl text-lime-500 font-bold">
                                {"<h1>"}
                            </p>
                            <img
                                src={waveSvg}
                                className="absolute w-16 h-16 md:w-20 md:h-20 2xl:w-24 2xl:h-24 right-0 md:-right-6 -top-4 md:-top-8"
                            />
                            <h1 className="text-6xl md:text-7xl 2xl:text-8xl text-white">
                                Hello, I'm{" "}
                                <span className="font-black text-white">
                                    Andrea
                                </span>{" "}
                            </h1>
                            <img
                                src={sunSvg}
                                className="absolute w-16 h-16 md:w-24 md:h-24 2xl:w-28 2xl:h-28 left-0 md:-left-6 -bottom-4 md:-bottom-16"
                            />
                            <p className="absolute right-0 md:-right-6 -bottom-4 md:-bottom-8 text-xl 2xl:text-5xl md:text-3xl text-lime-500 font-bold">
                                {"</h1>"}
                            </p>
                        </div>
                        <p className="text-xl md:text-3xl 2xl:text-4xl text-lime-400 font-semibold mt-4">
                            Full stack developer, artist, designer.
                        </p>
                        <p className="text-zinc-300 mt-4">
                            I'm a Jr. Full-Stack Developer specializing in
                            Laravel, React.js, Next.js, and Express.js. I hold a
                            degree in Information Technology from the University
                            of the East. Feel free to reach out via email or
                            LinkedIn!
                        </p>
                        <div className="flex gap-x-2 justify-center mt-4">
                            <Button
                                value={"Email me"}
                                url={"mailto:andimagsumbol@gmail.com"}
                            ></Button>
                            <Button value={"View CV"} url={CvPdf}></Button>

                            <SocialButton
                                icon={"linkedin"}
                                url={
                                    "https://www.linkedin.com/in/andimagsumbol/"
                                }
                            ></SocialButton>
                            <SocialButton
                                icon={"github"}
                                url={"https://www.github.com/andimags/"}
                            ></SocialButton>
                        </div>
                    </div>
                </div>
            </section>
            <section
                id="skills-section"
                ref={skillsSectionRef}
                className="h-auto p-8 md:p-16 max-w-screen-2xl mx-auto md:ml-16 2xl:ml-auto"
            >
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Skills / Expertise
                </p>
                <div className="flex gap-x-8 justify-center mb-4">
                    <div className="flex items-center">
                        <div className="w-4 h-4 bg-lime-800 border border-lime-700 mr-2"></div>
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
                        title="Languages"
                        skills={[
                            { name: "PHP", level: "advanced" },
                            { name: "Javascript", level: "intermediate" },
                            { name: "Python", level: "intermediate" },
                            { name: "C#", level: "beginner" },
                            { name: "C++", level: "beginner" },
                            { name: "Java", level: "beginner" },
                        ]}
                        className="scroll-reveal"
                    />

                    <SkillCard
                        title="Frameworks"
                        skills={[
                            { name: "Laravel", level: "advanced" },
                            { name: "Bootstrap", level: "advanced" },
                            { name: "Tailwind", level: "advanced" },
                            { name: "Express.js", level: "intermediate" },
                            { name: "Next.js", level: "intermediate" },
                        ]}
                    />

                    <SkillCard
                        title="Libraries"
                        skills={[
                            { name: "jQuery", level: "intermediate" },
                            { name: "Livewire", level: "intermediate" },
                            { name: "React", level: "intermediate" },
                            { name: "Axios", level: "intermediate" },
                        ]}
                    />

                    <SkillCard
                        title="Database"
                        skills={[{ name: "MySQL", level: "advanced" }]}
                    />

                    <SkillCard
                        title="Version Control & Tools"
                        skills={[
                            { name: "Postman", level: "advanced" },
                            { name: "VS Code", level: "advanced" },
                            { name: "Git", level: "intermediate" },
                            { name: "GitHub", level: "intermediate" },
                            { name: "Bitbucket", level: "intermediate" },
                            { name: "GitLab", level: "intermediate" },
                            { name: "Jira", level: "intermediate" },
                            { name: "DBeaver", level: "intermediate" },
                        ]}
                    />

                    <SkillCard
                        title="Cloud Services"
                        skills={[
                            { name: "AWS S3", level: "intermediate" },
                            { name: "AWS EC2", level: "intermediate" },
                            { name: "AWS RDS", level: "intermediate" },
                        ]}
                    />
                </div>
            </section>
            <section
                id="experience-section"
                ref={experienceSectionRef}
                className="h-auto p-8 md:p-16"
            >
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Experience
                </p>
                <div className="max-w-xl mx-auto">
                    <ExperienceCard
                        className={"mb-8"}
                        jobTitle="Jr. Full Stack Developer"
                        dateRange="July 2024 - Present"
                        skills={[
                            { name: "Bootstrap", level: "advanced" },
                            { name: "Javascript", level: "intermediate" },
                            { name: "Next.js", level: "intermediate" },
                            { name: "Express.js", level: "intermediate" },
                            { name: "React.js", level: "intermediate" },
                            { name: "MySQL", level: "intermediate" },
                            { name: "AWS", level: "intermediate" }
                        ]}
                        experience={[
                            "Led the development and ongoing maintenance of the WebSSI revamp and enhancements",
                            "Managed deployments to UAT and production environments on AWS"
                        ]}
                    />
                    
                    <ExperienceCard
                        jobTitle="Full Stack Developer Intern"
                        dateRange="February 2024 - May 2024"
                        skills={[
                            { name: "PHP", level: "advanced" },
                            { name: "Laravel", level: "advanced" },
                            { name: "Tailwind", level: "advanced" },
                            { name: "Javascript", level: "intermediate" },
                            { name: "jQuery", level: "intermediate" },
                            { name: "Bootstrap", level: "intermediate" },
                            { name: "Livewire", level: "beginner" },
                        ]}
                        experience={[
                            "Developed and documented two solo projects: HR Recruitment System & CRM System",
                            "Presented system proposal and created flowchart for HR Recruitment System",
                            "Collaborated effectively with developers, sharing ideas and contributing to project success",
                            "Basic proficiency in version control with Git and GitHub for collaborative development",
                        ]}
                    />
                </div>
            </section>
            <section
                id="awards-section"
                ref={awardsSectionRef}
                className="h-auto p-8 md:p-16 max-w-screen-2xl mx-auto"
            >
                <p className="text-4xl text-gray-900 dark:text-white text-center font-bold mb-4 drop-shadow-lg	">
                    My Awards / Certificates
                </p>
                <div className="grid grid-cols-1 gap-4 place-items-center">
                    <div className="border-l-2 mt-10">
                        <TimelineCard
                            date={"Dec 2023"}
                            title={"Programming Skills Evaluation"}
                            description={"University of the East"}
                        ></TimelineCard>
                        <TimelineCard
                            date={"Dec 2023"}
                            title={"IT Specialist in Python"}
                            description={"Certiport: Pearson VUE"}
                        ></TimelineCard>
                        <TimelineCard
                            date={"Nov 2023"}
                            title={"IT Specialist in HTML & CSS"}
                            description={"Certiport: Pearson VUE"}
                        ></TimelineCard>
                        <TimelineCard
                            date={"Nov 2023"}
                            title={"2nd Place - Best in Thesis"}
                            description={"University of the East"}
                        ></TimelineCard>
                        <TimelineCard
                            date={"Mar 2022"}
                            title={"3rd Place - Website Designing Competition"}
                            description={"University of the East CCSS"}
                        ></TimelineCard>
                    </div>
                </div>
            </section>
            <section
                id="projects-section"
                ref={projectsSectionRef}
                className="h-auto p-8 md:p-16 max-w-screen-2xl mx-auto md:ml-16 2xl:ml-auto"
            >
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
                        }
                    ></ProjectCard>
                    <ProjectCard
                        src={PersonalWbsiteImage}
                        title={"Personal Wesbite"}
                        date={"Apr 2022"}
                        description={
                            "My first personal website developed with HTML, CSS, vanilla JS, and Bootstrap for media queries."
                        }
                        url={"https://www.github.com/andimags/personal-website"}
                    ></ProjectCard>
                    <ProjectCard
                        src={ShopeastImage}
                        title={"ShopEast 2.0"}
                        date={"Mar 2022"}
                        description={
                            "3rd Place Winner in USC's ShopEast Website Design Competition. Developed using HTML, CSS, jQuery, and Bootstrap for responsive design and media queries. Aiding UE students in online selling during quarantine."
                        }
                        url={"https://www.github.com/andimags/shopeast"}
                    ></ProjectCard>
                </div>
            </section>
        </>
    );
};

export default Index;
