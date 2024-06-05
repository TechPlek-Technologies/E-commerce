import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MobileNavMenu = () => {
  const { t } = useTranslation();

  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>{t("home")}</Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/about"}>
          {t("about_us")}
          </Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/shop"}>
          {t("shop")}
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "#"}> {t("shop_by_concern")}</Link>
          <ul className="sub-menu">
            <li>
              <Link to={process.env.PUBLIC_URL + "/diabetes-care"}>
              {t("diabetes_care")}
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/hair-problems"}>
              {t("hair_problems")}
              </Link>
            </li>
          </ul>
        </li>
        <li className="menu-item-has-children">
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
  );
};

export default MobileNavMenu;
