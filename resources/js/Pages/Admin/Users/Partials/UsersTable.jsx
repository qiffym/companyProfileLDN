import { Link, router } from '@inertiajs/react';
import avatar from '/public/storage/img/defaultAvatar.png';

const UsersTable = ({ users }) => {
    const handleDelete = (user) => {
        router.delete(route('users.destroy', user));
    };

    console.log(users);
    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th></th>
                    <th>Name/Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.id} className="hover">
                        <th>
                            <label>{index + 1}</label>
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12 bg-base-300">
                                        <img
                                            src={avatar}
                                            alt="Avatar Tailwind CSS Component"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{user.name}</div>
                                    <div className="text-sm opacity-50">
                                        {user.email}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <th className="space-x-2">
                            <Link
                                href={route('users.show', user)}
                                className="btn btn-success btn-sm"
                            >
                                details
                            </Link>
                            <Link
                                href={route('users.edit', user)}
                                className="btn btn-warning btn-sm"
                            >
                                edit
                            </Link>
                            <button
                                className="btn btn-error btn-sm"
                                onClick={() => handleDelete(user)}
                            >
                                delete
                            </button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UsersTable;
