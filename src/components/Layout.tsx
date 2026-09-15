import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-950 text-gray-100">
      <Navbar />
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
