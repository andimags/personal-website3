const List = ({ list }) => {
    return (
        <ul className="my-4 text-gray-300">
            {list &&
                list.map((item, index) => {
                    return (
                        <li className="flex items-start" key={index}>
                            <svg
                                className="w-6 h-6 text-lime-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 11.917 9.724 16.5 19 7.5"
                                />
                            </svg>

                            <span className="ml-3">{item}</span>
                        </li>
                    );
                })}
        </ul>
    );
};

export default List;
