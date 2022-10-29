import React from "react";
import styles from "./Footer.module.css";
import arrow from "../../Assets/upArrow.svg";
import logo from "../../Assets/LogoCircle.svg"

const Footer = (props) => {
  const d = new Date();
  let year = d.getFullYear();

  
  return (
    <footer ref={props.contactRef}>
      <div>
        <div className={styles.logoDiv}>
          <img src={logo} alt="logo"/>
          &ensp; Sainath Production
        </div>
        <div className="mobileFoot">
          27th KM Milestone, Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh 201009{" "}
          <br />
          <br />
          +91 65XXXXXXX <br />
          <br />
          contact@sainath production <br />
        </div>
      </div>
      <div className="webFoot" >
        27th KM Milestone, Delhi - Meerut Expy, Ghaziabad, Uttar Pradesh 201009{" "}
        <br />
        <br />
        +91 65XXXXXXX <br />
        <br />
        contact@sainath production <br />
      </div>
      <div className={styles.socialBtns} >
        <button>
          <i class="fa-brands fa-facebook-f"></i>
        </button>
        <button>
          <i class="fa-brands fa-linkedin-in"></i>
        </button>
        <button>
          <i class="fa-brands fa-twitter"></i>
        </button>
        <br />

        <div
          className={styles.footerCaption}
          style={{ textAlign: "right", color: "#FFFFFF", opacity: "0.65" }}
        >
          © {year} Sainath Production <br />
          All rights reserved{" "}
          <div onClick={props.backToTop} className={styles.arrow}>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
