// app/page.tsx
import Image from "next/image";
import NavBar from "@/components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b font-montserrat tracking-wide">
      <NavBar />
      {/* Spacer to account for the fixed navbar */}
      <div className="h-10"></div>
      {/* Horizontal line divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-0.5 bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <main className="tracking-wider">

      </main>
    </div>
  );
}