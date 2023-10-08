import "@/styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { ThemeProvider } from "../components/themeProvider";
import { trpc } from "@/lib/trpc";
import { Toaster } from "@/components/ui/toaster";
import { Alef } from "next/font/google";

const alef = Alef({ subsets: ["latin"], variable: "--font-alef", weight: ["400", "700"] });
const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <style jsx global>
        {`
          html,
          body {
            font-family: ${alef.style.fontFamily};
        `}
      </style>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </div>
  );
};

export default trpc.withTRPC(App);
