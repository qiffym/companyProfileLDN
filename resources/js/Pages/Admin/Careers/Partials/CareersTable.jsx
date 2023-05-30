import { Link, router } from '@inertiajs/react';

const CareersTable = ({ careers }) => {
    const handleDelete = (career) => {
        router.delete(route('careers.destroy', career));
    };
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className="w-10">#</th>
                        <th>Position Name</th>
                        <th>Department</th>
                        <th>Open Date</th>
                        <th>Close Date</th>
                        <th>Show</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {careers.map((career, index) => (
                        <tr key={career.id} className="hover">
                            <th>{index + 1}</th>
                            <td>{career.position_name}</td>
                            <td>{career.department}</td>
                            <td>{career.open_date}</td>
                            <td>{career.close_date}</td>
                            <td>
                                {career.show === 1 ? 'Active' : 'Non-active'}
                            </td>
                            <td className="space-x-2">
                                <Link
                                    href={route('careers.show', career)}
                                    className="btn btn-info btn-sm"
                                >
                                    show
                                </Link>
                                <Link
                                    href={route('careers.edit', career)}
                                    className="btn btn-warning btn-sm"
                                >
                                    edit
                                </Link>
                                <button
                                    className="btn btn-error btn-sm"
                                    onClick={() => handleDelete(career)}
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CareersTable;
