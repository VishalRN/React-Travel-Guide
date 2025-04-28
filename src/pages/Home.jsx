import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Start a New Journey              </h1>
              <p className="fs-4 text-white mb-4 animated slideInDown">
                Our team of experienced travel experts will help you plan your trip from start to finish, ensuring your dream vacation becomes a reality. Don't wait any longer
              </p>
              <div className="position-relative w-75 mx-auto animated slideInDown">
                <input
                  className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Eg: Thailand"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2"
                  style={{ marginTop: 7 }}
                >
                  Search
                </button>
              </div>
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
                  src="assets/img/dream.jpg"
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="text-primary">
                Dream Vacation Destination
              </h6>
              <h1 className="mb-4">
                Plan the Trip of <span className="text-primary">Lifetime</span>
              </h1>
              <p className="mb-4">
                Whether you're looking for a romantic getaway, a family-friendly adventure, or a solo journey to explore the world, a travel agency can provide you with a custom-tailored itinerary that exceeds your expectations.
              </p>
              <p className="mb-4">
                Imagine waking up to breathtaking views, indulging in world-class cuisine, and immersing yourself in unique cultures. From pristine beaches to bustling cities, serene mountains to vibrant jungles, your dream vacation is just a step away. Let us turn your travel aspirations into unforgettable memories.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    First Class Flights
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Handpicked Hotels
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />5 Star
                    Accommodations
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    Latest Model Vehicles
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    150 Premium City Tours
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2" />
                    24/7 Service
                  </p>
                </div>
              </div>
              <a className="btn btn-primary py-3 px-5 mt-2" href="">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4" />
                  <h5>WorldWide Tours</h5>
                  <p>
                    Explore the globe with our expertly curated tours. Discover iconic landmarks, hidden gems, and cultural treasures tailored to your preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>Hotel Reservation</h5>
                  <p>
                    Enjoy seamless stays at handpicked accommodations. From luxury resorts to cozy boutique hotels, we ensure comfort and convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user text-primary mb-4" />
                  <h5>Travel Guides</h5>
                  <p>
                    Discover the world with our knowledgeable guides. Gain insider tips, cultural insights, and personalized recommendations to make your journey truly enriching.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cog text-primary mb-4" />
                  <h5>Event Management</h5>
                  <p>
                    Plan unforgettable events with our professional services. From corporate retreats to dream weddings, we handle every detail for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Destination Start */}
      <div className="container-xxl py-5 destination">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Destination
            </h6>
            <h1 className="mb-5">Popular Destination</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                  <Link
                    className="position-relative d-block overflow-hidden"
                    to="/thailand"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-1.jpg"
                      alt="Thailand destination"
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      30% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Thailand
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                  <Link
                    className="position-relative d-block overflow-hidden"
                    to="/malaysia"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-2.jpg"
                      alt="Malaysia destination"
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      25% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Malaysia
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                  <Link
                    className="position-relative d-block overflow-hidden"
                    to="/australia"
                  >
                    <img
                      className="img-fluid"
                      src="assets/img/destination-3.jpg"
                      alt="Australia destination"
                    />
                    <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                      35% OFF
                    </div>
                    <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                      Australia
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 wow zoomIn"
              data-wow-delay="0.7s"
              style={{ minHeight: 350 }}
            >
              <Link
                className="position-relative d-block h-100 overflow-hidden"
                to="/indonesia"
              >
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src="assets/img/destination-4.jpg"
                  alt="Indonesia destination"
                  style={{ objectFit: "cover" }}
                />
                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">
                  20% OFF
                </div>
                <div className="bg-white text-primary fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">
                  Indonesia
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Destination End */}

      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Travel Guide
            </h6>
            <h1 className="mb-5">Our Team</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/team-1.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">David Brown</h5>
                  <small>Travel Operations Manager</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/team-2.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Olivia Taylor</h5>
                  <small>Tour Coordinator</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/team-3.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Chloe Lewis</h5>
                  <small>Event and Adventure Tour Planner</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item">
                <div className="overflow-hidden">
                  <img className="img-fluid" src="assets/img/team-4.jpg" alt="" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-19px" }}
                >
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-square mx-1" href="">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Sophia Clark</h5>
                  <small>Content and Social Media Manager</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

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
                  "The team at Tourist planned an amazing adventure to Raja Ampat. Their attention to detail and 24/7 support made the trip stress-free."                </p>
                <h5 className="mt-3">Sarah Johnson</h5>
                <span>Teacher</span>
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
                  "Tourist made our trip to Bali unforgettable! From seamless bookings to personalized itineraries, everything was perfect. Highly recommend!"                </p>
                <h5 className="mt-3">James Anderson</h5>
                <span>Software Engineer</span>
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
                  "Raja Ampat was a photographer’s paradise, and Tourist made the trip seamless. Their local insights helped me capture stunning shots!"                </p>
                <h5 className="mt-3">Ethan Green</h5>
                <span>Photographer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Customer Review Section End */}


    </div>
  )
}
