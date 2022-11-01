import React from "react";
import styles from "./Footer.module.css";
import arrow from "../../Assets/upArrow.svg";
import logo from "../../Assets/LogoCircle.svg"
import useWindowDimensions from "../../Assets/hooks/useWindowDimensions";

const Footer = (props) => {
  const d = new Date();
  let year = d.getFullYear();
  const dimensions = useWindowDimensions();

  
  return (
    <footer ref={props.contactRef}>
      <div>
        <div className={styles.logoDiv}>
          <img src={logo} alt="logo"/>
          &ensp; Sainath Production
        </div>
        <div className="mobileFoot">
          Flat No. 4, C/33, Jivan Sarita Building, Sector-10, Shanti Nagar, Near Swami Narayan Temple, Mira Road East, Thane, Maharashtra, 401107 <br/><br/> 171, Old Lashker Line, Old Baihrana, Prayagraj, Uttar Pradesh - 211003
          <br />
          <br />
          +91 9022866483 <br />
          <br />
          contact@sainath.production <br />
        </div>
      </div>
      <div className="webFoot" >
        Flat No. 4, C/33, Jivan Sarita Building, Sector-10, Shanti Nagar, Near Swami Narayan Temple, Mira Road East, Thane, Maharashtra, 401107 <br/><br/>171, Old Lashker Line, Old Baihrana, Prayagraj, Uttar Pradesh - 211003
        <br />
        <br />
        +91 9022866483, 9555223296 <br />
        <br />
        contact@sainath.production <br />
      </div>
      <div className={styles.socialBtns} >
        <button>
          <i className="fa-brands fa-facebook-f"></i>
        </button>
        <button>
          <i className="fa-brands fa-linkedin-in"></i>
        </button>
        <button>
          <i className="fa-brands fa-twitter"></i>
        </button>
        <br />

        <div
          className={styles.footerCaption}
          style={{ textAlign: "right", color: "#FFFFFF", opacity: "0.65" }}
        >
          © {year} Sainath Production <br />
          All rights reserved{" "}
          <div onClick={props.backToTop} className={styles.arrow} style={dimensions.pageYOffset > 500?{display:"block"}:{display:"none"}}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
