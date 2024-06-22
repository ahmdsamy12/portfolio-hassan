import logo from "../../images/Logo.png";
import { navLinks } from "../../constants";

const NavbarLg = () => {
  const pathName = window.location.pathname;
  console.log(pathName);
  return (
    <div className="navbar-lg hidden min-[850px]:flex h-[72px] bg-[#1B1C37] px-10 py-5 rounded-lg">
      <div className="container flex items-center justify-between">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navs">
          <ul className="flex items-center gap-4 ">
            {navLinks.map((link) => (
              <li
                key={link.title}
                className={`${
                  link.path === pathName && "border-b-4 border-[#7579FF]"
                }  py-4 px-2`}
              >
                <a href={link.href} className="text-white font-semibold">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="btn">
          <button className="px-5 py-2 text-white bg-[#7579FF] rounded-lg">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarLg;
