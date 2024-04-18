import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "./index.module.css";

const Test3Desktop: NextPage = () => {
  const onButton2Click = useCallback(() => {
    //TODO: Call Primary Action
  }, []);

  return (
    <div className={styles.test3Desktop}>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.content}>
            <a className={styles.logoBlock} id="header_logo">
              <div className={styles.mediaCompanyPlaceholder}>
                <div className={styles.logomark}>
                  <img
                    className={styles.groupIcon}
                    id="header_logo"
                    alt=""
                    src="/group.svg"
                  />
                </div>
                <img
                  className={styles.logotypeIcon}
                  alt=""
                  src="/logotype.svg"
                />
              </div>
            </a>
            <div className={styles.linksactions}>
              <nav className={styles.links}>
                <a className={styles.link} id="header_menu_product">
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                  <a className={styles.label} id="header_menu_products">
                    Products
                  </a>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                </a>
                <div className={styles.link1}>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                  <div className={styles.label1}>Enterprise</div>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                  <div className={styles.label1}>Pricing</div>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                  <div className={styles.label1}>Resouces</div>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                </div>
                <div className={styles.link1}>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                  <div className={styles.label1}>About</div>
                  <div className={styles.iconLeft}>
                    <div className={styles.square} />
                  </div>
                </div>
              </nav>
              <div className={styles.divider} />
              <div className={styles.actions}>
                <button className={styles.button}>
                  <div className={styles.iconLeft}>
                    <div className={styles.square10} />
                  </div>
                  <div className={styles.label5}>Action</div>
                  <div className={styles.iconLeft}>
                    <div className={styles.square10} />
                  </div>
                </button>
                <button className={styles.button1}>
                  <div className={styles.iconLeft}>
                    <div className={styles.square12} />
                  </div>
                  <div className={styles.label6}>Action</div>
                  <div className={styles.iconLeft}>
                    <div className={styles.square12} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className={styles.hero}>
        <div className={styles.container1}>
          <div className={styles.content1}>
            <div className={styles.text}>
              <div className={styles.headingOverline}>
                <div className={styles.overline}>
                  become a legendary designer
                </div>
                <label className={styles.heading}>
                  A headline to make an impact on visitors
                </label>
              </div>
              <div className={styles.supportingText}>
                A subheading that addresses the what, the why we should care and
                hopefully some social proof.
              </div>
            </div>
            <div className={styles.actions1}>
              <button
                className={styles.button2}
                autoFocus={true}
                disabled={true}
                id="header_primaryButton"
                onClick={onButton2Click}
              >
                <div className={styles.iconLeft}>
                  <div className={styles.square12} />
                </div>
                <div className={styles.label7}>Primary Action</div>
                <div className={styles.iconLeft}>
                  <div className={styles.square12} />
                </div>
              </button>
              <div className={styles.rightContent}>
                <div className={styles.rating}>
                  <img
                    className={styles.mediaIconfilledstar}
                    alt=""
                    src="/media--iconfilledstar@2x.png"
                  />
                  <div className={styles.mediaIcon24pxunfilledche}>
                    <img className={styles.icon} alt="" src="/icon.svg" />
                  </div>
                  <img
                    className={styles.mediaIcon24pxunfilledche}
                    alt=""
                    src="/media--iconfilledstar.svg"
                  />
                  <img
                    className={styles.mediaIcon24pxunfilledche}
                    alt=""
                    src="/media--iconfilledstar.svg"
                  />
                  <img
                    className={styles.mediaIcon24pxunfilledche}
                    alt=""
                    src="/media--iconfilledstar.svg"
                  />
                </div>
                <div className={styles.text1}>from 100+ reviews</div>
              </div>
            </div>
          </div>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        </div>
      </section>
      <section className={styles.features}>
        <div className={styles.container2}>
          <div className={styles.content2}>
            <div className={styles.text2}>
              <h1 className={styles.sectionHeading}>
                A catchy heading that brings some interest to visitors
              </h1>
              <div className={styles.checklist}>
                <div className={styles.listItem}>
                  <img
                    className={styles.mediaIcon24pxunfilledche}
                    alt=""
                    src="/media--icon24pxunfilledcheck.svg"
                  />
                  <div className={styles.text3}>
                    Tortor interdum condimentum nunc molestie quam lectus.
                  </div>
                </div>
                <div className={styles.listItem}>
                  <img
                    className={styles.mediaIcon24pxunfilledche}
                    alt=""
                    src="/media--icon24pxunfilledcheck.svg"
                  />
                  <div className={styles.text3}>
                    Tortor interdum condimentum nunc molestie quam lectus.
                  </div>
                </div>
                <div className={styles.listItem}>
                  <img
                    className={styles.mediaIcon24pxunfilledche}
                    alt=""
                    src="/media--icon24pxunfilledcheck.svg"
                  />
                  <div className={styles.text3}>
                    Tortor interdum condimentum nunc molestie quam lectus.
                  </div>
                </div>
              </div>
              <div className={styles.divider1}>
                <div className={styles.rectangle} />
              </div>
              <div className={styles.supportingText1}>
                Tortor interdum condimentum nunc molestie quam lectus euismod
                pulvinar risus. Cursus in odio aenean.
              </div>
            </div>
            <button className={styles.button3}>
              <div className={styles.iconLeft}>
                <div className={styles.square12} />
              </div>
              <div className={styles.label7}>Primary Action</div>
              <div className={styles.mediaIconunfilledplacehol}>
                <div className={styles.square12} />
              </div>
            </button>
          </div>
          <div className={styles.content3}>
            <img
              className={styles.ellipseGroupIcon}
              alt=""
              src="/ellipse-group.svg"
            />
            <button className={styles.mockupDevices} id="feature_iphoneButton">
              <div className={styles.iphone14Pro}>
                <div className={styles.shadow} />
                <img
                  className={styles.iphone14ProSilver}
                  alt=""
                  src="/iphone-14-prosilver.svg"
                />
                <div className={styles.screenOpenMe}>
                  <img
                    className={styles.iphone14ScreenChangeMe}
                    alt=""
                    src="/iphone14-screen-change-me@2x.png"
                  />
                  <div className={styles.iphone14ProBrowserTab}>
                    <div className={styles.tabContainer}>
                      <div className={styles.tab}>
                        <div className={styles.url}>
                          <img
                            className={styles.sfSymbolLockfill}
                            alt=""
                            src="/sf-symbol--lockfill.svg"
                          />
                          <div className={styles.thedesignershipcom}>
                            thedesignership.com
                          </div>
                        </div>
                        <img
                          className={styles.sfSymbolArrowclockwise}
                          alt=""
                          src="/sf-symbol--arrowclockwise.svg"
                        />
                        <img
                          className={styles.sfSymbolTextformatsize}
                          alt=""
                          src="/sf-symbol--textformatsize.svg"
                        />
                      </div>
                    </div>
                    <img className={styles.tabsIcon} alt="" src="/tabs.svg" />
                  </div>
                  <div className={styles.iphoneHomeIndicator}>
                    <div className={styles.homeIndicator} />
                  </div>
                  <div className={styles.iphoneStatusBar}>
                    <div className={styles.leftSide}>
                      <div className={styles.statusbarTime}>
                        <div className={styles.time}>9:41</div>
                      </div>
                    </div>
                    <div className={styles.dynamicIsland}>
                      <div className={styles.statusbarDynamicisland}>
                        <div className={styles.truedepthCamera} />
                        <div className={styles.facetimeCamera} />
                      </div>
                    </div>
                    <div className={styles.rightSide}>
                      <div className={styles.signalWifiBattery}>
                        <img
                          className={styles.iconMobileSignal}
                          alt=""
                          src="/icon--mobile-signal.svg"
                        />
                        <img
                          className={styles.wifiIcon}
                          alt=""
                          src="/wifi.svg"
                        />
                        <img
                          className={styles.statusbarBatteryIcon}
                          alt=""
                          src="/-statusbarbattery.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className={styles.logoClouds}>
        <div className={styles.container3}>
          <div className={styles.content4}>
            <div className={styles.checklist}>
              <h1 className={styles.heading1}>
                Trusted by over 100+ companies
              </h1>
              <div className={styles.paragraph}>
                Gravida sed mattis proin turpis libero porta condimentum aliquam
                interdum. Tellus vitae ullamcorper pharetra consectetur id
                dignissim tortor ullamcorper nec. In tellus mauris proin
                tristique iaculis ultrices lacus. A velit dignissim sed bibendum
                cras pellentesque tellus integer est. Pellentesque leo, amet
                aliquet nibh ullamcorper fermentum. Viverra mi et id mi non.
                Varius pellentesque mus sed viverra sed id est dui, posuere.
              </div>
            </div>
            <div className={styles.actions2}>
              <button className={styles.button3}>
                <div className={styles.iconLeft}>
                  <div className={styles.square12} />
                </div>
                <div className={styles.label7}>Primary Action</div>
                <div className={styles.iconLeft}>
                  <div className={styles.square12} />
                </div>
              </button>
              <button className={styles.button5}>
                <div className={styles.iconLeft}>
                  <div className={styles.square} />
                </div>
                <div className={styles.label10}>Secondary Action</div>
                <div className={styles.iconLeft}>
                  <div className={styles.square} />
                </div>
              </button>
            </div>
          </div>
          <div className={styles.content5}>
            <div className={styles.column1}>
              <div className={styles.logoBlock1}>
                <img
                  className={styles.mediaCompanyPlaceholder1}
                  alt=""
                  src="/media--company-placeholder.svg"
                />
              </div>
              <div className={styles.logoBlock1}>
                <img
                  className={styles.mediaCompanyPlaceholder1}
                  alt=""
                  src="/media--company-placeholder1.svg"
                />
              </div>
              <div className={styles.logoBlock1}>
                <img
                  className={styles.mediaCompanyPlaceholder1}
                  alt=""
                  src="/media--company-placeholder2.svg"
                />
              </div>
            </div>
            <div className={styles.column1}>
              <div className={styles.logoBlock1}>
                <img
                  className={styles.mediaCompanyPlaceholder4}
                  alt=""
                  src="/media--company-placeholder3@2x.png"
                />
              </div>
              <div className={styles.logoBlock1}>
                <img
                  className={styles.mediaCompanyPlaceholder1}
                  alt=""
                  src="/media--company-placeholder4.svg"
                />
              </div>
              <div className={styles.logoBlock1}>
                <img
                  className={styles.mediaCompanyPlaceholder1}
                  alt=""
                  src="/media--company-placeholder5.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.features1}>
        <div className={styles.container4}>
          <div className={styles.headingOverline1}>
            <div className={styles.overline1}>why designership</div>
            <h1 className={styles.sectionHeading1}>
              A catchy heading that brings some interest to visitors
            </h1>
          </div>
          <div className={styles.content6}>
            <div className={styles.row}>
              <div className={styles.feature}>
                <img className={styles.icon1} alt="" src="/icon1.svg" />
                <div className={styles.text6}>
                  <div className={styles.heading2}>
                    The most inspiring feature
                  </div>
                  <div className={styles.supportingText2}>
                    Tortor interdum condimentum nunc molestie quam lectus
                    euismod pulvinar risus. Cursus in odio aenean.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <img className={styles.icon1} alt="" src="/icon1.svg" />
                <div className={styles.text6}>
                  <div className={styles.heading2}>
                    The most inspiring feature
                  </div>
                  <div className={styles.supportingText2}>
                    Tortor interdum condimentum nunc molestie quam lectus
                    euismod pulvinar risus. Cursus in odio aenean.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <img className={styles.icon1} alt="" src="/icon1.svg" />
                <div className={styles.text6}>
                  <div className={styles.heading2}>
                    The most inspiring feature
                  </div>
                  <div className={styles.supportingText2}>
                    Tortor interdum condimentum nunc molestie quam lectus
                    euismod pulvinar risus. Cursus in odio aenean.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.feature}>
                <img className={styles.icon1} alt="" src="/icon1.svg" />
                <div className={styles.text6}>
                  <div className={styles.heading2}>
                    The most inspiring feature
                  </div>
                  <div className={styles.supportingText2}>
                    Tortor interdum condimentum nunc molestie quam lectus
                    euismod pulvinar risus. Cursus in odio aenean.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <img className={styles.icon1} alt="" src="/icon1.svg" />
                <div className={styles.text6}>
                  <div className={styles.heading2}>
                    The most inspiring feature
                  </div>
                  <div className={styles.supportingText2}>
                    Tortor interdum condimentum nunc molestie quam lectus
                    euismod pulvinar risus. Cursus in odio aenean.
                  </div>
                </div>
              </div>
              <div className={styles.feature}>
                <img className={styles.icon1} alt="" src="/icon1.svg" />
                <div className={styles.text6}>
                  <div className={styles.heading2}>
                    The most inspiring feature
                  </div>
                  <div className={styles.supportingText2}>
                    Tortor interdum condimentum nunc molestie quam lectus
                    euismod pulvinar risus. Cursus in odio aenean.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.faq}>
        <div className={styles.container5}>
          <h1 className={styles.heading1}>Frequently Asked Questions</h1>
          <div className={styles.content7}>
            <div className={styles.accordianGroup}>
              <div className={styles.accordion1}>
                <div className={styles.container6}>
                  <div className={styles.leftContent}>
                    <div className={styles.mediaIconunfilledplacehol}>
                      <div className={styles.square22} />
                    </div>
                    <div className={styles.label11}>
                      Insert an informative title text here
                    </div>
                    <div className={styles.badge}>
                      <div className={styles.iconLeft11}>
                        <div className={styles.square23} />
                      </div>
                      <div className={styles.badge1}>Badge</div>
                      <div className={styles.iconLeft11}>
                        <div className={styles.square23} />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.mediaIconunfilledplacehol}
                    alt=""
                    src="/media--iconunfilledcheverondown.svg"
                  />
                </div>
              </div>
              <div className={styles.accordion1}>
                <div className={styles.container6}>
                  <div className={styles.leftContent}>
                    <div className={styles.mediaIconunfilledplacehol}>
                      <div className={styles.square22} />
                    </div>
                    <div className={styles.label11}>
                      Insert an informative title text here
                    </div>
                    <div className={styles.badge}>
                      <div className={styles.iconLeft11}>
                        <div className={styles.square23} />
                      </div>
                      <div className={styles.badge1}>Badge</div>
                      <div className={styles.iconLeft11}>
                        <div className={styles.square23} />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.mediaIconunfilledplacehol}
                    alt=""
                    src="/media--iconunfilledcheverondown.svg"
                  />
                </div>
              </div>
              <div className={styles.accordion1}>
                <div className={styles.container6}>
                  <div className={styles.leftContent}>
                    <div className={styles.mediaIconunfilledplacehol}>
                      <div className={styles.square22} />
                    </div>
                    <div className={styles.label11}>
                      Insert an informative title text here
                    </div>
                    <div className={styles.badge}>
                      <div className={styles.iconLeft11}>
                        <div className={styles.square23} />
                      </div>
                      <div className={styles.badge1}>Badge</div>
                      <div className={styles.iconLeft11}>
                        <div className={styles.square23} />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.mediaIconunfilledplacehol}
                    alt=""
                    src="/media--iconunfilledcheverondown.svg"
                  />
                </div>
              </div>
              <div className={styles.accordion4}>
                <div className={styles.container9}>
                  <div className={styles.container6}>
                    <div className={styles.leftContent}>
                      <div className={styles.mediaIconunfilledplacehol}>
                        <div className={styles.square22} />
                      </div>
                      <div className={styles.label11}>
                        Insert an informative title text here
                      </div>
                      <div className={styles.badge}>
                        <div className={styles.iconLeft11}>
                          <div className={styles.square23} />
                        </div>
                        <div className={styles.badge1}>Badge</div>
                        <div className={styles.iconLeft11}>
                          <div className={styles.square23} />
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.mediaIconunfilledplacehol}
                      alt=""
                      src="/media--iconunfilledcheverondown.svg"
                    />
                  </div>
                  <div className={styles.expansion}>
                    <div className={styles.subtext}>
                      This is subtext which appears after expanding the
                      accordian.
                    </div>
                  </div>
                </div>
                <div className={styles.button6}>
                  <div className={styles.mediaIconunfilledplacehol}>
                    <div className={styles.square10} />
                  </div>
                  <div className={styles.label1}>Button CTA</div>
                  <div className={styles.mediaIconunfilledplacehol}>
                    <div className={styles.square10} />
                  </div>
                </div>
              </div>
              <div className={styles.accordion5}>
                <div className={styles.container6}>
                  <div className={styles.leftContent4}>
                    <div className={styles.mediaIconunfilledplacehol}>
                      <div className={styles.square22} />
                    </div>
                    <div className={styles.description}>
                      Insert an informative title text here
                    </div>
                    <div className={styles.badge8}>
                      <div className={styles.iconLeft11}>
                        <div className={styles.square23} />
                      </div>
                      <div className={styles.badge1}>Badge</div>
                      <div className={styles.iconLeft11}>
                        <div className={styles.square23} />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.mediaIconunfilledplacehol}
                    alt=""
                    src="/media--iconunfilledcheverondown1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.container12}>
          <div className={styles.content8}>
            <div className={styles.leadingContent}>
              <div className={styles.mediaCompanyPlaceholder}>
                <img className={styles.logomark} alt="" src="/logomark.svg" />
                <img
                  className={styles.logotypeIcon}
                  alt=""
                  src="/logotype.svg"
                />
              </div>
              <div className={styles.links1}>
                <div className={styles.description}>Overview</div>
                <div className={styles.description}>Teams</div>
                <div className={styles.description}>Jobs</div>
                <div className={styles.description}>Help</div>
                <div className={styles.description}>Privacy</div>
              </div>
            </div>
            <div className={styles.icons}>
              <img
                className={styles.mediaIcon24pxunfilledche}
                alt=""
                src="/media--social-icon.svg"
              />
              <img
                className={styles.mediaIcon24pxunfilledche}
                alt=""
                src="/media--social-icon1.svg"
              />
              <img
                className={styles.mediaIcon24pxunfilledche}
                alt=""
                src="/media--social-icon2.svg"
              />
              <img
                className={styles.mediaIcon24pxunfilledche}
                alt=""
                src="/media--social-icon3.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Test3Desktop;
