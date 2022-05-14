import "../styles/globals.css";
import NextProgress from "next-progress";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextProgress
        delay={300}
        color={"#6366f1"}
        options={{ showSpinner: false }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
