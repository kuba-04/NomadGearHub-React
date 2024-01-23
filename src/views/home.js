import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>NomadGearHub</title>
        <meta property="og:title" content="NomadGearHub" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <span className="home-logo">nomadGearHub</span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          ></nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <div className="home-socials"></div>
          <a href="#subscribe-section" className="home-view button">
            Interested?
          </a>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <span className="home-logo1">Character</span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text">About</span>
              <span className="home-text01">Features</span>
              <span className="home-text02">Pricing</span>
              <span className="home-text03">Team</span>
              <span className="home-text04">Blog</span>
            </nav>
            <div className="home-container2">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header">
            <span>
              Unlock a World of Hassle-Free
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>Remote Work</span>
          </h1>
          <p className="home-caption">
            Rent high-quality work equipment anywhere in the world and turn
            every destination into your office.
          </p>
        </div>
      </section>
      <section className="home-description">
        <img
          alt="image"
          src="/hero-divider-1500w.png"
          className="home-divider-image"
        />
        <div className="home-container3">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1622126977176-bf029dbf6ed0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxvZmZpY2UlMjBjaGFpcnxlbnwwfHx8fDE3MDYwMzM3NzB8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=300"
            className="home-image"
          />
          <div className="home-description1">
            <div className="home-content">
              <p className="home-paragraph">
                Welcome to nomadGearHub, the ultimate solution for digital
                nomads seeking a seamless remote work experience. Imagine a
                world where you can travel light, without the burden of carrying
                bulky work equipment. Our platform is here to make that vision a
                reality.
              </p>
            </div>
            <div className="home-links">
              <button
                id="subscribe-section"
                className="home-button1 button-link button"
              >
                <span className="home-text08">
                  subscribe to a mailing list!
                </span>
              </button>
              <input
                type="text"
                placeholder="your email"
                className="home-input input"
              />
              <img
                alt="image"
                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/6060b1e5-1319-4e13-b42b-2e477f89ffb2/d9e7e22d-5b77-427e-9548-3051460d7128?org_if_sml=1338&amp;force_format=original"
                className="home-arrow"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="image"
                src="/Avatars/avatar.svg"
                className="home-avatar1"
              />
            </div>
            <div className="home-main">
              <div className="home-content1">
                <h2 className="home-header01">Lily the Laptop Lugger</h2>
                <p className="home-description2">
                  &quot;Every time I move to a new spot, it feels like I&apos;m
                  in a circus act. Someone hand me a solution to this juggling
                  madness!&quot;
                </p>
              </div>
              <button className="home-learn button">
                <span className="home-text09">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image01"
                />
              </button>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-avatar2">
              <img
                alt="image"
                src="/Avatars/default-avatar.svg"
                className="home-avatar3"
              />
              <img
                alt="image"
                src="/Characters/character-3.svg"
                className="home-image02"
              />
            </div>
            <div className="home-main1">
              <div className="home-content2">
                <h2 className="home-header02">Sam the Struggling Nomad</h2>
                <p className="home-description3">
                  &quot;Ouch! My back! Carrying all this gear from one place to
                  another is a literal pain. Can someone please invent a
                  teleportation device for my office equipment?&quot;
                </p>
              </div>
              <button className="home-learn1 button">
                <span className="home-text10">Learn more</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image03"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="home-card2">
          <div className="home-container4">
            <div className="home-row1">
              <div className="home-main2">
                <div className="home-content3">
                  <h2 className="home-header03">Exchange of goods</h2>
                  <p className="home-description4">
                    The equipment is there for you, either in private basements
                    or second hand stores... why not to make use of it?
                  </p>
                </div>
              </div>
              <img
                alt="image"
                src="/Characters/character-4.svg"
                className="home-image04"
              />
              <img
                alt="pastedImage"
                src="/external/pastedimage-kw77-300h.png"
                className="home-pasted-image"
              />
            </div>
            <img
              alt="image"
              src="/Characters/character-5.svg"
              className="home-image05"
            />
          </div>
        </div>
      </section>
      <section className="home-roadmap">
        <div className="home-heading1">
          <h2 className="home-header04">Roadmap</h2>
          <p className="home-header05">2024 -&gt;</p>
        </div>
        <div className="home-list">
          <div className="home-step">
            <span className="home-caption1">01</span>
            <div className="home-heading2">
              <h2 className="home-header06">
                <span>Collect the feedback</span>
                <br></br>
              </h2>
              <p className="home-header07">
                We are here now, let&apos;s wait until the end of Q1
              </p>
            </div>
          </div>
          <div className="home-step1">
            <span className="home-caption2">02</span>
            <div className="home-heading3">
              <h2 className="home-header08">Building</h2>
              <p className="home-header09">
                <span>
                  We know no-code solution, so can deliver it faster than you
                  think! 
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption3">03</span>
            <div className="home-heading4">
              <h2 className="home-header10">
                <span>Use the beta version</span>
                <br></br>
              </h2>
              <p className="home-header11">
                <span>Here we will test it in the real life! </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption4">04</span>
            <div className="home-heading5">
              <h2 className="home-header12"> Community</h2>
              <p className="home-header13">
                <span>We expect that the community will evolve around. </span>
                <br></br>
                <span>
                  What if you could get the equipment from someone who
                </span>
                <br></br>
                <span>is just leaving the place you arrived to!</span>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content4">
          <div className="home-main3">
            <div className="home-heading6">
              <h2 className="home-header14">
                <span>
                  Create your
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>own space</span>
              </h2>
            </div>
          </div>
          <div className="home-container5">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQyfHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3Nnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
              className="home-image06"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1593640495390-1ff7c3f60e9b?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI5fHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3Nnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
              className="home-image07"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE4fHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
              className="home-image08"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1593642532400-2682810df593?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIwfHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3MHww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
              className="home-image09"
            />
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1575318634028-6a0cfcb60c59?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM0fHxkZXNrdG9wfGVufDB8fHx8MTcwNjAzMzQ3Nnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=200"
              className="home-image10"
            />
          </div>
        </div>
      </section>
      <div>
        <div className="home-container7">
          <Script
            html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
