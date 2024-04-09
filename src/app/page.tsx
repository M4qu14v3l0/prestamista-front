import { SignInButton } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 justify-center items-center h-full w-full">
      <h1>Hello world</h1>
      <SignInButton />
    </main>
  );
}
