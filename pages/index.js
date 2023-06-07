import Hero from "./hero";
import Services from "./Services";
import Skills from "./Skills";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Contact from "./contact";
import getInit from "@/controllers/getInit";
import About from "./about";

export default function Home(props) {
  console.log(props);

  return (
    <>
      <Hero />
      {/* <Services /> */}
      {/* <About /> */}
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </>
  );
}

export async function getServerSideProps() {
  const init = await getInit();

  console.log(init);

  return {
    props: {
      ...init,
      label: "ciao",
    },
  };
}
