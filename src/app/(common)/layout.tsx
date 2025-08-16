import Navbar from "@/components/sharred/Navbar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar/>
      {children}
  </main>
  );
}
