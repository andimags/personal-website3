const Table = ({ list }) => {
    return (
        <table className="mt-4 text-gray-300">
            <tbody>
                {list.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                <svg
                                    className="h-6 w-6 mr-4 text-lime-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </td>
                            <td className="py-2">{item}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
