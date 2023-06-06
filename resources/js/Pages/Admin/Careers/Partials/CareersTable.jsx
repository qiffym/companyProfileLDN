import { Link, router } from '@inertiajs/react';

const CareersTable = ({ careers }) => {
    const handleDelete = (career) => {
        router.delete(route('careers.destroy', career));
    };
    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th className="w-10">#</th>
                    <th>Position Name</th>
                    <th>Department</th>
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
                        <td>{career.hidden === 0 ? 'Active' : 'Non-active'}</td>
                        <td className="space-x-2">
                            <Link
                                href={route('careers.show', career)}
                                className="btn btn-success btn-sm"
                            >
                                details
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
    );
};

export default CareersTable;
