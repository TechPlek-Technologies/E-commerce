import PropTypes from "prop-types";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useSetting } from "../../utils/setting-utils";

const Logo = ({ logoClass }) => {

  const logo=useSetting("logo");
  return (
    <div className={clsx(logoClass)}>
      <Link to={process.env.PUBLIC_URL + "/"}>
        <img alt={logo ? logo[0].name: "Logo"} style={{maxWidth:"100px",marginTop:"-13px"}} src={logo ? logo[0].url :""} />
        {/* <img alt={logo ? logo[0].name: "Logo"} style={{maxWidth:"100px",marginTop:"-13px"}} src="https://vedarma.com/wp-content/uploads/2023/12/Vedarma_logo-1.png" /> */}
      </Link>
    </div>
  );
};

Logo.propTypes = {
  imageUrl: PropTypes.string,
  logoClass: PropTypes.string
};

export default Logo;
