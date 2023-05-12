import { Link, router } from '@inertiajs/react';
import avatar from '../../../public/assets/img/user.png';

const UsersTable = ({ users }) => {
    const handleDelete = (user) => {
        router.delete(route('users.destroy', user));
    };
    return (
        <>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>No.</label>
                        </th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <th>
                                <label>{index + 1}</label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={avatar}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {user.name}
                                        </div>
                                        <div className="text-sm opacity-50">
                                            {user.email}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <th className="space-x-2">
                                <Link
                                    href={route('users.show', user)}
                                    className="btn btn-ghost btn-xs"
                                >
                                    details
                                </Link>
                                <Link
                                    href={route('users.edit', user)}
                                    className="btn btn-warning btn-xs"
                                >
                                    edit
                                </Link>
                                <button
                                    className="btn btn-error btn-xs"
                                    onClick={() => handleDelete(user)}
                                >
                                    delete
                                </button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UsersTable;
