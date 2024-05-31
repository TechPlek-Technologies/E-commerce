import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useSetting } from "../../utils/setting-utils";

const Logo = ({ logoClass }) => {

  const logo=useSetting("logo");
  return (
    <div className={clsx(logoClass)}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img alt={logo ? logo[0].name: "Logo"} src={logo ? logo[0].url :""} />
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
