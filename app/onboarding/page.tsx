"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    collegeId: "",
    role: "user",
    vehicleNumber: "",
    vehicleType: "Bike",
  });

  const submit = async () => {
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(form),
    });

    await fetch("/api/vehicle", {
      method: "POST",
      body: JSON.stringify(form),
    });

    router.push("/api/redirect");
  };

  return (
    <main className="p-6 max-w-md mx-auto space-y-3">
      <h2 className="text-xl font-bold">Complete Your Profile</h2>

      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Phone" onChange={e => setForm({...form, phone: e.target.value})} />
      <input placeholder="College ID" onChange={e => setForm({...form, collegeId: e.target.value})} />

      <select onChange={e => setForm({...form, role: e.target.value})}>
        <option value="user">User</option>
        <option value="security">Security</option>
      </select>

      <input placeholder="Vehicle Number" onChange={e => setForm({...form, vehicleNumber: e.target.value})} />

      <select onChange={e => setForm({...form, vehicleType: e.target.value})}>
        <option>Bike</option>
        <option>Car</option>
      </select>

      <button onClick={submit} className="bg-black text-white px-4 py-2">
        Submit
      </button>
    </main>
  );
}
