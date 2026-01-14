import { currentUser } from "@clerk/nextjs/server";

export default async function AdminDashboard() {
  const user = await currentUser();

  if (!user) return <h1>Unauthorized</h1>;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <p>Admin ID: {user.id}</p>
    </main>
  );
}
