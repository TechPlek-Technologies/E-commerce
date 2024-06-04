import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  const { t } = useTranslation();
  
  return (
    <div
      className={clsx(sidebarMenu
          ? "sidebar-menu"
          : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}
    >
      <nav>
        <ul>
        <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("home")}
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/about"}>
              {t("about_us")}
            </Link>
          </li>

          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("shop")}
            </Link>
          </li>

         <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("shop_by_concern")}
              {sidebarMenu ? (
                <span>
                  <i className="fa fa-angle-right"></i>
                </span>
              ) : (
                <i className="fa fa-angle-down" />
              )}
            </Link>
            <ul className="submenu">
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  {t("diabetes_care")}
                </Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"}>
                  {t("hair_problems")}
                </Link>
              </li>
            </ul>
          </li>
          
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>
              {t("blog")}
            </Link>
          </li>
         
          <li>
            <Link to={process.env.PUBLIC_URL + "/contact-us"}>
              {t("contact_us")}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
