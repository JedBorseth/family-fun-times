import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { ThemeProvider } from "../components/themeProvider";
import { trpc } from "@/lib/trpc";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default trpc.withTRPC(App);
