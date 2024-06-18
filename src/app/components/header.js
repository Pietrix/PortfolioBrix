'use client'
import {usePathname} from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between w-screen md:h-24 py-4 px-10'>
      <div className="md:hidden flex flex-row w-10/12 justify-center items-center my-3">
        <a href="/"><img className="max-h-8 pr-4" src="/Logo-48x48.png"></img></a>
        <a href=""><img className="max-h-6 px-4 border-l border-r border-black" src="/logo_abel-installatie.svg"></img></a>
        <a href=""><img className="max-h-6 pl-2" src="/brix.team-logo-Tr.png"></img></a>
      </div>
      <div className="hidden md:flex flex-row w-3/12 items-center">
      <a href="/"><img className="max-h-10" src="/Logo-48x48.png"></img></a>
        </div>
      <nav className="selector rounded-full w-10/12 md:w-4/12 max-w-md mt-2 md:mt-0">
        <ul id="nav"className="wrapper py-2 h-full w-full text-lg">
          <li className={pathname === "/" ? "activeLink link" : "link"}><Link href="/">Portfolio</Link></li>
          <li className={pathname === "/leeswijzer" ? "activeLink link" : "link"}><Link href="/leeswijzer">Leeswijzer</Link></li>
        </ul>
      </nav>
      <div className="hidden h-full md:flex flex-row-reverse w-3/12 items-center">
        <a href=""><img className="max-h-8 pl-2" src="/brix.team-logo-Tr.png"></img></a>
        <a href=""><img className="max-h-8 pr-4 border-r border-black" src="/logo_abel-installatie.svg"></img></a>
      </div>
      </div>
    </header>
  );
};

export default Header;
