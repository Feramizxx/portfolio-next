import Head from "next/head";
import { Fragment } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import WorkExperience from "../components/WorkExperience";
import ContactMe from "../components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../typing";
import { GetStaticProps } from "next";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchExperience } from "../utils/fetchExperience";
import { fetchSocials } from "../utils/fetchSocials";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";

type Props = {
  pageInfo: PageInfo;
  project: Project[];
  skills: Skill[];
  experiences: Experience[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, project, socials, skills }: Props) => {
  return (
 
    <div
      className="bg-[rgba(36,36,36)] text-white  h-screen snap-y snap-mandatory
     overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 overflow-x-hidden z-0"
    >
      <Head>
        <title>Feramiz portfolio</title>
      </Head>

      <Header socials={socials} />
      <section id="hero" className="snap-start ">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects project={project} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo}/>
      </section>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project: Project[] = await fetchProjects();
  const experiences: Experience[] = await fetchExperience();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const pageInfo: PageInfo = await fetchPageInfo();
  return {
    props: {
      project,
      skills,
      pageInfo,
      socials,
      experiences,
    },
    revalidate: 10,
  };
};
