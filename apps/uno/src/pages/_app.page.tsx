import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { ThemeProvider } from "../components/themeProvider";
import { trpc } from "@/lib/trpc";
import { Toaster } from "@/components/ui/toaster";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
};

export default trpc.withTRPC(App);
