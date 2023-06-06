import AdminLayout from '@/Layouts/AdminLayout';
import { BriefcaseIcon, BroadcastIcon, UsersIcon } from '@iconicicons/react';

const Dashboard = ({ auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            <div className="stats shadow cursor-default">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block w-8 h-8 stroke-current"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 10V3L4 14h7v7l9-11h-7z"
                            ></path>
                        </svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">2.6M</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <UsersIcon className="w-10 h-10" />
                    </div>
                    <div className="stat-title">Users</div>
                    <div className="stat-value text-primary-focus">10</div>
                    <div className="stat-desc">total number of staff</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <BroadcastIcon className="w-10 h-10" />
                    </div>
                    <div className="stat-title">News</div>
                    <div className="stat-value text-primary-focus">100</div>
                    <div className="stat-desc">total articles written</div>
                </div>
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <BriefcaseIcon className="w-10 h-10" />
                    </div>
                    <div className="stat-title">Careers</div>
                    <div className="stat-value text-primary-focus">100</div>
                    <div className="stat-desc">total job vacancies opened</div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default Dashboard;
