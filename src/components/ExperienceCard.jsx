import Badge from "./Badge";
import List from "./List";
const ExperienceCard = ({
    experience,
    skills,
    jobTitle,
    dateRange,
    className,
}) => {
    return (
        <div
            className={`w-full relative flex flex-col rounded-xl bg-zinc-800/50 backdrop-blur-lg border border-zinc-600/60 border-gray-200 bg-clip-border text-white shadow-md hover:scale-105 transition-all scroll-reveal ${
                className || ""
            }`}
        >
            <div className="p-6">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {jobTitle}
                </h5>
                <p className="text-zinc-300">{dateRange}</p>
                <div className="flex gap-2 flex-wrap mt-2">
                    {skills &&
                        skills.map((skill, index) => {
                            return <Badge skill={skill} key={index} />;
                        })}
                </div>
                {experience && <List list={experience} />}
            </div>
        </div>
    );
};

export default ExperienceCard;
