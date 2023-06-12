import Hero from "./hero";
import Portfolio from "./portfolio";
import Resume from "./resume";
import Contact from "./contact";
import getInit from "@/controllers/getInit";
import MySkills from "./mySkills";

export default function Home(props) {
  console.log(props);

  return (
    <>
      <Hero />
      <MySkills />
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
    },
  };
}
