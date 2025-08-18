"use client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import ThemeWrapper from "@/components/provider/ThemeWrapper";

export const Providers = ({ children }: { children: React.ReactNode }) => {
 
  return (
    <Provider store={store}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </NextThemesProvider>
    </Provider>
  );
};
