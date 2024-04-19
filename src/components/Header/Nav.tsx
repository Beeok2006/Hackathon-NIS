import { NavLink, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import searchIcon from './../../assets/icons8-search.svg'
import notification from '../../assets/icons8-notification-50.png'
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

const Nav = () => {
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
      <nav className="flex flex-[1] items-center  justify-between">
        <div className="hidden justify-end md:flex">
          <NavLinks />
        </div>
        {/* <div className="w-[75px]">
          <ThemeToggle />
        </div> */}
        <div className="flex  justify-end md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
        <div className="flex align-center justify-between">
        <img src={searchIcon} style={{width: '25%'}}  />
        <img src={notification} style={{width: '25%'}}  />
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

export default Nav;