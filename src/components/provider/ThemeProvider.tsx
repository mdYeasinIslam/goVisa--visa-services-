// "use client";
// import { RootState } from "@/redux/store/store";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

// export default function ThemeProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const darkMode = useSelector((state: RootState) => state.theme.darkMode);

//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return <>{children}</>;
// }
