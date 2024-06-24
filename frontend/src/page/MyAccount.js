import { Fragment, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import SEO from "../components/Seo";
import LayoutOne from "../layouts/LayoutOne";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProfile, updateProfile } from "../redux/slice/profileData-slice";
import axios from "axios";

const statesInIndia = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const MyAccount = () => {
  const { authData, isAuthenticated } = useSelector((state) => state.auth);
  const { profileData } = useSelector((state) => state.profile);
  const { user } = profileData;
  const {
    name = "",
    email = "",
    phone = "",
    house = "",
    city = "",
    state = "",
    zipCode = "",
    country = "",
  } = user || {};
  const [userInfo, setUserInfo] = useState({
    name: name || "",
    email: email || "",
    phone: phone || "",
    house: house || "",
    city: city || "",
    state: state || "",
    zipCode: zipCode || "",
    country: country || "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuthenticated) navigate("/login-register");
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    const { user } = authData;
    const userId = user?.id;

    if (userId) {
      dispatch(fetchProfile(userId)); // Dispatch fetchProfile action with userId
    }
  }, [authData, dispatch]);

  const postUpdateInfo = async (id, scope, data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_URL}/profile?id=${id}&scope=${scope}`,
      { data },
      { withCredentials: true }
    );
    dispatch(updateProfile(userInfo));
    if (response.data.success) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Fragment>
      <SEO
        titleTemplate="My Account"
        description="My Account page of flone react minimalist eCommerce template."
      />
      <LayoutOne headerTop="visible">
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ms-auto me-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="0"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>1 .</span> Edit your account information{" "}
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>My Account Information</h4>
                            <h5>Your Personal Details</h5>
                          </div>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Name</label>
                                <input
                                  name="name"
                                  type="text"
                                  defaultValue={name}
                                  autoComplete={true}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Phone</label>
                                <input
                                  name="phone"
                                  type="number"
                                  defaultValue={phone}
                                  autoComplete={true}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Email Address</label>
                                <input
                                  type="email"
                                  name="email"
                                  defaultValue={email}
                                  autoComplete={true}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>City</label>
                                <input
                                  type="text"
                                  name="city"
                                  defaultValue={city}
                                  autoComplete={true}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Address</label>
                                <input
                                  type="text"
                                  name="house"
                                  defaultValue={house}
                                  autoComplete={true}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Zip Code</label>
                                <input
                                  type="text"
                                  name="zipCode"
                                  defaultValue={zipCode}
                                  autoComplete={true}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>State</label>
                                <select
                                  id="state"
                                  type="select"
                                  name="state"
                                  autoComplete={true}
                                  defaultValue={state}
                                  onChange={handleChange}
                                  style={{
                                    padding: "0px 15px",
                                    height: "40px",
                                  }}
                                >
                                  {statesInIndia.map((state, index) => (
                                    <option key={index} value={state}>
                                      {state}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="billing-info">
                                <label>Country</label>
                                <input
                                  type="text"
                                  name="country"
                                  defaultValue={country}
                                  autoComplete={true}
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button
                                type="submit"
                                onClick={() =>
                                  postUpdateInfo(
                                    authData.user.id,
                                    "info",
                                    userInfo
                                  )
                                }
                              >
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="1"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>2 .</span> Change your password
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>Change Password</h4>
                            <h5>Your Password</h5>
                          </div>
                          <div className="row">
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Password</label>
                                <input
                                  type="password"
                                  name="name"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                              <div className="billing-info">
                                <label>Password Confirm</label>
                                <input
                                  type="password"
                                  name="confirmPassword"
                                  onChange={handleChange}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button disabled type="submit">
                                Continue
                              </button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item
                      eventKey="2"
                      className="single-my-account mb-20"
                    >
                      <Accordion.Header className="panel-heading">
                        <span>3 .</span> Modify your address book entries
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="myaccount-info-wrapper">
                          <div className="account-info-wrapper">
                            <h4>Address Book Entries</h4>
                          </div>
                          <div className="entries-wrapper">
                            <div className="row">
                              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                <div className="entries-info text-center">
                                  <p>John Doe</p>
                                  <p>Paul Park </p>
                                  <p>Lorem ipsum dolor set amet</p>
                                  <p>NYC</p>
                                  <p>New York</p>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                <div className="entries-edit-delete text-center">
                                  <button className="edit">Edit</button>
                                  <button>Delete</button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="billing-back-btn">
                            <div className="billing-btn">
                              <button type="submit">Continue</button>
                            </div>
                          </div>
                        </div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default MyAccount;
