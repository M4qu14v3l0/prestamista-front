
import { Navbar } from "@/components";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body >
        <Navbar />
        {children}
    </body>
  );
}
