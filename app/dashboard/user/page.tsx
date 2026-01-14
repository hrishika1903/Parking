import { currentUser } from "@clerk/nextjs/server";

export default async function UserDashboard() {
  const user = await currentUser();

  if (!user) {
    return <h1>Not authenticated</h1>;
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">User Dashboard</h1>

      <p>User ID: {user.id}</p>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
      <p>Name: {user.firstName}</p>
    </main>
  );
}
