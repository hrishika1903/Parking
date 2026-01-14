import { currentUser } from "@clerk/nextjs/server";

export default async function SecurityDashboard() {
  const user = await currentUser();

  if (!user) return <h1>Unauthorized</h1>;

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Security Dashboard</h1>
      <p>Security ID: {user.id}</p>
    </main>
  );
}
