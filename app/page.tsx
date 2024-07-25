import Introduce from "@/components/Introduce";
import {NavBar} from "@/components/ui/NavBar";
import Projects from "@/components/Projects";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { PiTrophyFill } from "react-icons/pi";
import { MdPermContactCalendar } from "react-icons/md";

export default function Home() {
  return (
    <main className="relative bg-black-100
    flex justify-center items-center flex-col
    overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <NavBar navItems={
          [
            {name:'Home', link:'/' , icon: <FaHome/>},
            {name:'Projects', link:'#projects', icon: <CgFileDocument/>},
            {name:'Skills', link:'#skills', icon:<PiTrophyFill/>},
            {name:'Contact', link:'#contact', icon:<MdPermContactCalendar/>},
          ]
        }/>
        <Introduce/>
        <Projects/>
      </div>
    </main>
  );
}
