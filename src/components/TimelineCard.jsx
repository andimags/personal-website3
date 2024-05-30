export const TimelineCard = () => {
    return (
        <div class="max-w-lg shadow-lg transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-zinc-800 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
            <div class="w-5 h-5 bg-zinc-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

            <div class="w-10 h-1 bg-zinc-400 absolute -left-10 z-0"></div>

            <div class="flex-auto">
                <h1 class="text-lg">Day 1</h1>
                <h1 class="text-xl font-bold">
                    Orientation and Briefing on Uniliver basics
                </h1>
                <h3>Classroom</h3>
            </div>
        </div>
    );
};

export default TimelineCard;
