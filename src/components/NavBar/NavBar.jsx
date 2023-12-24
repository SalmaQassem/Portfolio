import { lazy } from "react";
import styles from "../../styles/_NavBar.module.scss";
import { Link, NavLink } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaMobileScreen, FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
const Container = lazy(() => import("../UI/Container"));
const NavBar = () => {
  const info = [
    {
      name: "phone",
      value: "01068624365",
      icon: <FaMobileScreen />,
      url: "",
    },
    {
      name: "email",
      icon: <IoMdMail />,
      url: "",
    },
    {
      name: "facebook",
      icon: <FaFacebookF />,
      url: "",
    },
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      url: "",
    },
  ];
  const links = [
    { path: "/", label: "home" },
    { path: "/About", label: "about" },
    { path: "Services", label: "services" },
    { path: "Portfolio", label: "portfolio" },
    { path: "Contact", label: "contact" },
  ];
  return (
    <nav className={styles.navWrapper}>
      <Container>
        <div className={styles.contact}>
          <div className={styles.infoWrapper}>
            <ul className={styles.info}>
              {info.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.url}>
                      {item.name === "phone" ? (
                        <>
                          {item.icon} {item.value}
                        </>
                      ) : (
                        item.icon
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.nav}>
          <div className={styles.logoWrapper}>
            <div className={styles.logo}>
              <Link>
                aesthetic
                <em className={styles.dot}> .</em>
              </Link>
            </div>
          </div>
          <div className={styles.linksWrapper}>
            <ul className={styles.links}>
              {links.map((link, index) => {
                return (
                  <li key={index}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? `${styles.link} ${styles.active}`
                          : styles.link
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default NavBar;
