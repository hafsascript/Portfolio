import Introduce from "@/components/Introduce";
import {NavBar} from "@/components/ui/NavBar";
import Projects from "@/components/Projects";
import { FaHome } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { PiTrophyFill } from "react-icons/pi";
import { MdPermContactCalendar } from "react-icons/md";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import FooterComp from "@/components/FooterComp";

export default function Home() {
  return (
    <main className="relative bg-black-100
    flex justify-center items-center flex-col
    overflow-hidden mx-auto ">
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <NavBar navItems={
          [
            {name:'Home', link:'/' , icon: <FaHome/>},
            {name:'Projects', link:'#projects', icon: <CgFileDocument/>},
            {name:'Skills', link:'#skills', icon:<PiTrophyFill/>},
            {name:'Contact', link:'#contact', icon:<MdPermContactCalendar/>},
          ]
        } />
        <Introduce/>
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
      <div className="w-full">
        <FooterComp/>
      </div>
    </main>
  );
}
