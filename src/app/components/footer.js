'use client'
import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect } from "react";

const Footer = () => {
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    return(
<footer className='flex flex-row items-center justify-center w-screen md:h-24 py-4 px-10 mt-auto self-baseline'>
    {/* <div className="selector rounded-full w-10/12 md:w-4/12 max-w-md my-5 mr-5 md:mr-0">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
        <a href="/"><img className="max-h-8 pr-4" src="/Logo-48x48.png"></img></a>
        <ul class="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 mt-0">
            <li>
                <a href="/" className="hover:underline me-6">Portfolio</a>
            </li>
            <li>
                <a href="/leeswijzer" className="hover:underline me-6">Leeswijzer</a>
            </li>
        </ul>
        </div>
    </div> */}
    <a className={`fixed bottom-0 right-0 selector rounded-full my-5 mx-5 py-5 px-5 scrollToTopButton ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={scrollToTop}>
    <BsArrowUp />
    </a>
</footer>

 );
};

export default Footer;
