import React from 'react'

function About() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                About Us
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  {/* <li className="breadcrumb-item">
                <a href="/Pages">Pages</a>
              </li> */}
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    About
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: 400 }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/about.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="text-primary">
                About Us
              </h6>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">Tourist</span>
              </h1>
              <p className="mb-4">
                At Tourist, we are dedicated to providing you with unforgettable travel experiences. Tempor erat elitr rebum at clita, diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit. Our mission is to make your journey seamless, luxurious, and memorable.
              </p>
              <p className="mb-4">
                At Tourist, we believe that travel is more than just a journey—it’s an experience that stays with you forever. Let us take care of the details, so you can focus on creating memories that last a lifetime.
              </p>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </div>
  )
}

export default About