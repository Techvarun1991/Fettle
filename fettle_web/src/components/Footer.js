export function Footer() {
  return (
    <>
      <footer style={{ marginBottom: 0, backgroundColor: "#222" }}>
        <div className="container mt-2">
          <div className="footer-middle" style={{ padding: "40px 0 20px" }}>
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div className="widget widget-about">
                  <a href="./Images/fettlelogo1.jpg" className="logo-footer">
                    <noscript>
                      &lt;img decoding="async" src="./fettlelogo1.jpg"
                      alt="logo-footer" width="200" /&gt;
                    </noscript>
                    <img
                      decoding="async"
                      className="ls-is-cached lazyloaded"
                      src={require("./Images/fettlelogo1.jpg")}
                      alt="logo-footer"
                      width={150}
                      height={150}
                    />
                  </a>
                  <div className="widget-body text-primary">
                    <p>
                      Fettle MFG. LTD.
                      <br />
                      PO Box 1499, Mumbai
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12">
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="widget">
                      <h4 className="widget-title">&nbsp;</h4>
                      <ul className="widget-body">
                        <li>
                          <a href="tel:18555866667">Toll Free: 1-855-586-6667</a>
                        </li>
                        <li>
                          <a href="tel:12505866667">Direct: 1-250-586-6667</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="widget">
                      <h4 className="widget-title">&nbsp;</h4>
                      <ul className="widget-body">
                        <li>
                          <a href="https://www.mineralpro.com/product-category/drinking-water-systems/">
                            Drinking Water Systems
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mineralpro.com/product-category/water-treatment/">
                            Water Filtration Systems
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mineralpro.com/product-category/bottle-less-water-coolers/">
                            Bottle-less Water Coolers
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="widget">
                      <h4 className="widget-title">&nbsp;</h4>
                      <ul className="widget-body">
                        <li>
                          <a href="https://www.mineralpro.com/about-reverse-osmosis/">
                            About Reverse Osmosis
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mineralpro.com/contact-us/">
                            Contact Us
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mineralpro.com/become-a-dealer/">
                            Want to be a dealer?
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-left">
              <figure className="payment">
                <noscript>
                  &lt;img decoding="async"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_159,h_29/https://www.mineralpro.com/wp-content/themes/gseo_ecommerce/theme/images/payment.png"
                  alt="payment" width="159" height="29" /&gt;
                </noscript>
                <img
                  decoding="async"
                  className="ls-is-cached lazyloaded"
                  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_159,h_29/https://www.mineralpro.com/wp-content/themes/gseo_ecommerce/theme/images/payment.png"
                  data-src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_159,h_29/https://www.mineralpro.com/wp-content/themes/gseo_ecommerce/theme/images/payment.png"
                  alt="payment"
                  width={159}
                  height={29}
                />
              </figure>
            </div>
            <div className="footer-center">
              <p className="copyright">
                © 2022 MineralPRO Mfg. All Rights Reserved
              </p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  className="social-link social-facebook fab fa-facebook-f"
                />
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="social-link social-twitter fab fa-twitter"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}