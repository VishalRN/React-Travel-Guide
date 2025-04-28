import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Thailand() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Thailand
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/destination">Destination</Link>
                  </li>
                  <li className="breadcrumb-item text-white active" aria-current="page">
                    Thailand
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Explore Thailand
            </h6>
            <h1 className="mb-5">Discover the Beauty of Thailand</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="assets/img/thailand-1.jpg"
                  alt="Thailand"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h2>Why Visit Thailand?</h2>
              <p>
                Thailand is a land of stunning beaches, vibrant cities, and rich cultural heritage. From the bustling streets of Bangkok to the serene beaches of Phuket, there's something for everyone.
              </p>
              <ul>
                <li>Explore ancient temples like Wat Arun and Wat Phra Kaew.</li>
                <li>Relax on the pristine beaches of Krabi and Phang Nga.</li>
                <li>Enjoy the vibrant nightlife and street food in Bangkok.</li>
                <li>Discover the serene temples and tranquil gardens of Chiang Mai.</li>
                </ul>
              <Link to="/booking" className="btn btn-primary mt-3">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Things to Do in Thailand Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Things to Do
            </h6>
            <h1 className="mb-5">Top Activities in Thailand</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/temple.jpg"
                  alt="Temples"
                />
                <h4>Visit Temples</h4>
                <p>
                  Explore iconic temples like Wat Arun, Wat Phra Kaew, and the White Temple in Chiang Rai.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/beach.jpg"
                  alt="Beaches"
                />
                <h4>Relax on Beaches</h4>
                <p>
                  Unwind on the pristine beaches of Phuket, Krabi, and Koh Samui.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/street-food.jpg"
                  alt="Street Food"
                />
                <h4>Try Street Food</h4>
                <p>
                  Savor delicious Thai street food like Pad Thai, Som Tum, and Mango Sticky Rice.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/hiking.jpg"
                  alt="Hiking"
                />
                <h4>Go Hiking</h4>
                <p>
                  Trek through lush jungles and visit waterfalls in Chiang Mai and Khao Yai National Park.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/package-6.jpg"
                  alt="Island Hopping"
                />
                <h4>Island Hopping</h4>
                <p>
                  Explore the stunning islands of Phi Phi, Koh Lanta, and Koh Tao.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/markets.jpg"
                  alt="Markets"
                />
                <h4>Shop at Markets</h4>
                <p>
                  Experience the vibrant markets like Chatuchak Weekend Market and Floating Markets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Things to Do End */}

      {/* Hotels Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Hotels
            </h6>
            <h1 className="mb-5">Top Hotels in Thailand</h1>
          </div>
          <div className="row g-4">
            {/* Hotel 1 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="hotel-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/hotel-1.jpg"
                    alt="Luxury Resort"
                  />
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">Luxury Resort</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <h5 className="mb-0">$200/night</h5>
                  <div className="mt-3">
                    <p className="text-muted">
                      Gym, Spa, Pool, Free Wi-Fi
                    </p>
                    <div className="nearby-places">
                      <h6 className="text-primary">Nearby Places:</h6>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Wat Arun <span className="text-muted">(2.5 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Grand Palace <span className="text-muted">(3 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Khao San Road <span className="text-muted">(4 km)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/booking" className="btn btn-primary mt-3">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Hotel 2 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="hotel-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/hotel-2.jpg"
                    alt="Boutique Hotel"
                  />
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">Boutique Hotel</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <h5 className="mb-0">$150/night</h5>
                  <div className="mt-3">
                    <p className="text-muted">
                      Spa, Free Breakfast, Free Wi-Fi, Parking
                    </p>
                    <div className="nearby-places">
                      <h6 className="text-primary">Nearby Places:</h6>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Chatuchak Market <span className="text-muted">(1.2 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Lumpini Park <span className="text-muted">(2 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Siam Paragon <span className="text-muted">(3.5 km)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/booking" className="btn btn-primary mt-3">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Hotel 3 */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="hotel-item">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="assets/img/hotel-3.jpg"
                    alt="Beachfront Villa"
                  />
                </div>
                <div className="text-center p-4">
                  <h3 className="mb-0">Beachfront Villa</h3>
                  <div className="mb-3">
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                    <small className="fa fa-star text-primary" />
                  </div>
                  <h5 className="mb-0">$300/night</h5>
                  <div className="mt-3">
                    <p className="text-muted">
                      Private Beach, Pool, Spa, Free Wi-Fi
                    </p>
                    <div className="nearby-places">
                      <h6 className="text-primary">Nearby Places:</h6>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Phi Phi Islands <span className="text-muted">(5 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Railay Beach <span className="text-muted">(7 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Phang Nga Bay <span className="text-muted">(10 km)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link to="/booking" className="btn btn-primary mt-3">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hotels End */}

      {/* Transportation Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Transportation
            </h6>
            <h1 className="mb-5">Getting Around Thailand</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img
                className="img-fluid w-100"
                src="assets/img/transportation-1.jpg"
                alt="Transportation"
              />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h2>Transportation Options</h2>
              <p>
                Thailand offers a variety of transportation options to help you explore the country with ease:
              </p>
              <ul>
                <li><strong>Tuk-Tuks:</strong> A fun and iconic way to travel short distances in cities.</li>
                <li><strong>Domestic Flights:</strong> Quick and convenient for traveling between islands.</li>
                <li><strong>Buses:</strong> Affordable and widely available for intercity travel.</li>
                <li><strong>Trains:</strong> Scenic and comfortable for long-distance journeys.</li>
                <li><strong>Car Rentals:</strong> Ideal for exploring remote areas like the Outback.</li>
                <li><strong>Motorbikes:</strong> Popular for exploring local areas, especially in Bali.</li>
              </ul>
              <Link className="btn btn-primary mt-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Transportation End */}

      {/* Gallery Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Gallery
            </h6>
            <h1 className="mb-5">Explore Thailand Through Our Gallery</h1>
          </div>
          <div className="row g-4 gallery">
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="gallery-item">
                <img
                  className="img-fluid"
                  src="assets/img/street-food.jpg"
                  alt="Gallery 1"
                />
                <div className="gallery-overlay">
                  <div className="gallery-caption">

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="gallery-item">
                <img
                  className="img-fluid"
                  src="assets/img/package-6.jpg"
                  alt="Gallery 2"
                />
                <div className="gallery-overlay">
                  <div className="gallery-caption">

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="gallery-item">
                <img
                  className="img-fluid"
                  src="assets/img/markets.jpg"
                  alt="Gallery 3"
                />
                <div className="gallery-overlay">
                  <div className="gallery-caption">

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="gallery-item">
                <img
                  className="img-fluid"
                  src="assets/img/hiking.jpg"
                  alt="Gallery 4"
                />
                <div className="gallery-overlay">
                  <div className="gallery-caption">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery End */}
    </div>
  );
}

export default Thailand;