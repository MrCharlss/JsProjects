import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends Component {
  state = {};
  render() {
    return (
      <section className="container-footer">
        <div className="row-footer">
          <h1>Síguenos:</h1>
        </div>
        <div className="row-social-icons">
          <ul>
            <li>
              <a href="https://www.twitter.com/jtripl3c" target="_blank">
                <img
                  id="tw"
                  src="twitter-square-brands.svg"
                  class="svg"
                  alt=""
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/jtriplec" target="_blank">
                <img id="fb" src="facebook-square-brands.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div className="row-firma">
          <p> &#174; J-TRIPLE-C 2018</p>
        </div>
      </section>
    );
  }
}

export default Footer;
