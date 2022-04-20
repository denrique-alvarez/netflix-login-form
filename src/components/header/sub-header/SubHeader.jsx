/* eslint-disable jsx-a11y/anchor-is-valid */
import "./styles.css";

export const SubHeader = () => {
  return (
    <>
      <div className="sub-header">
        <a className="header-link" href="#">
          New to Netflix? <span>Sign up Now</span>
        </a>
      </div>
      <hr />
      <img
        src="https://i.postimg.cc/hj9WcgVw/logo.png"
        className="logo"
        alt="logo"
      />
    </>
  );
};
