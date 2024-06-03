import Badge from "./Badge";
import List from "./List";
const ExperienceCard = ({ list, title, skills }) => {
    list = [
        "Developed two solo projects: HR Recruitment System & CRM System, and created documentations for both",
        "Presented system proposal and created flowchart for HR Recruitment System",
        "Collaborated effectively with developers, sharing ideas and contributing to project success",
        "Basic proficiency in version control with Git and GitHub for collaborative development",
    ];
    return (
        <div className="w-full relative flex flex-col rounded-xl bg-zinc-800/50  backdrop-blur-lg border border-zinc-600/60 border-gray-200 bg-clip-border text-white shadow-md hover:scale-105 transition-all scroll-reveal">
            <div className="p-6">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Full Stack Developer Intern
                </h5>
                <p className="text-zinc-300">Feb - May 2024</p>
                <div className="flex gap-2 flex-wrap">
                    {skills &&
                        skills.map((skill, index) => {
                            return <Badge value={skill} key={index} />;
                        })}
                </div>
                {list && <List list={list} />}
            </div>
        </div>
    );
};

export default ExperienceCard;
