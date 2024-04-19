import { NavLink, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../../data/animationConfig";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: Boolean }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className={activeStyleCallback}>
        Home
      </NavLink>

      <NavLink to="/blog" className={activeStyleCallback}>
        Blog
      </NavLink>
    </>
  );
};

const ChatHead = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="flex flex-[1] items-center  justify-start p-[10px] w-[90%] mx-auto rounded-[30px] " style={{boxShadow: 'rgb(151 151 151) 0px 1px 3px'}}>
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>
        {/* <div className="w-[75px]">
          <ThemeToggle />
        </div> */}
        <div className="flex  justify-end md:hidden">
          <img className="rounded-[30px] w-[90px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFQzIdJq-P0YaCCdCBRKXefFMqCCN6-93EQ&usqp=CAU" alt="" />
        </div>
        <div className="flex flex-col align-center justify-between">
        <h2 className="text-[21px] font-bold ml-4">Сабирова Зарина</h2>
        <span className="ml-4">Служба безопастности</span>
        </div>
      </nav>
      <AnimatePresence >
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden"
          >
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/" className={activeStyleCallback}>
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={mobileNavListVariant} {...mobileNavExitProps}>
              <NavLink to="/blog" className={activeStyleCallback}>
                Blog
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatHead;