import React from 'react'

function Services() {
  return (
    <div>
          <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-center py-5">
        <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
          <h1 className="display-3 text-white animated slideInDown">
            Services
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Services
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
 

    {/*  Customer Review Section Start  */}
    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h6 className="section-title bg-white text-center text-primary px-3">
            Testimonial
          </h6>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="testimonial-item text-center">
                <div className="position-relative mb-4">
                  <img
                    className="img-fluid rounded-circle mx-auto"
                    src="assets/img/testimonial-1.jpg"
                    alt=""
                  />
                  <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle">
                    <i className="fa fa-quote-left fa-2x text-primary" />
                  </div>
                </div>
                <p className="mb-0">
                  "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos. Clita erat ipsum et lorem et sit."
                </p>
                <h5 className="mt-3">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="testimonial-item text-center">
                <div className="position-relative mb-4">
                  <img
                    className="img-fluid rounded-circle mx-auto"
                    src="assets/img/testimonial-2.jpg"
                    alt=""
                  />
                  <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle">
                    <i className="fa fa-quote-left fa-2x text-primary" />
                  </div>
                </div>
                <p className="mb-0">
                  "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos. Clita erat ipsum et lorem et sit."
                </p>
                <h5 className="mt-3">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="testimonial-item text-center">
                <div className="position-relative mb-4">
                  <img
                    className="img-fluid rounded-circle mx-auto"
                    src="assets/img/testimonial-3.jpg"
                    alt=""
                  />
                  <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle">
                    <i className="fa fa-quote-left fa-2x text-primary" />
                  </div>
                </div>
                <p className="mb-0">
                  "Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam eos. Clita erat ipsum et lorem et sit."
                </p>
                <h5 className="mt-3">Client Name</h5>
                <span>Profession</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Review Section End */}

    
    </div>
  )
}

export default Services