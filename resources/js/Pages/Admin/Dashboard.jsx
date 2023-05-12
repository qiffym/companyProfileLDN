import AdminLayout from '@/Layouts/AdminLayout';

const Dashboard = ({ auth }) => {
    return (
        <AdminLayout auth={auth.user}>
            <h1 className="text-5xl">Dashboard</h1>
        </AdminLayout>
    );
};

export default Dashboard;
