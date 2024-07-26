import Image from "next/image";
import { Inter } from "next/font/google";
import Users from "@/components/Users";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`w-full h-[2000px] ${inter.className}`}
    >
      <Users />
    </main>
  );
}