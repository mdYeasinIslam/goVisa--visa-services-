import Navbar from "@/components/sharred/Navbar";
import "../globals.css";
import Footers from "@/components/sharred/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className=" pt-20 pb-5">

      {children}
      </div>
      <Footers/>
  </main>
  );
}
