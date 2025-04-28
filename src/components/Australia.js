import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Australia() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Australia
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
                    Australia
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
              Explore Australia
            </h6>
            <h1 className="mb-5">Discover the Wonders of Australia</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="assets/img/australia-1.jpg"
                  alt="Australia"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h2>Why Visit Australia?</h2>
              <p>
                Australia is a land of breathtaking landscapes, vibrant cities, and unique wildlife. From the iconic Sydney Opera House to the Great Barrier Reef, there's something for everyone.
              </p>
              <ul>
                <li>Explore the stunning beaches of Bondi and the Gold Coast.</li>
                <li>Discover the natural wonders of Uluru and the Outback.</li>
                <li>Experience the vibrant culture and food scene in Melbourne.</li>
              </ul>
              <Link to="/booking" className="btn btn-primary mt-3">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Things to Do in Australia Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Things to Do
            </h6>
            <h1 className="mb-5">Top Activities in Australia</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/destination-3.jpg"
                  alt="Sydney Opera House"
                />
                <h4>Visit the Sydney Opera House</h4>
                <p>
                  Explore this iconic architectural masterpiece and enjoy a world-class performance.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/great-barrier-reef.jpg"
                  alt="Great Barrier Reef"
                />
                <h4>Snorkel the Great Barrier Reef</h4>
                <p>
                  Dive into the world's largest coral reef system and witness its vibrant marine life.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/uluru.jpg"
                  alt="Uluru"
                />
                <h4>Visit Uluru</h4>
                <p>
                  Experience the spiritual heart of Australia and watch the sunset over this sacred rock.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/kangaroo-island.jpg"
                  alt="Kangaroo Island"
                />
                <h4>Explore Kangaroo Island</h4>
                <p>
                  Get up close with Australia's unique wildlife, including kangaroos, koalas, and sea lions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/beach.jpg"
                  alt="Gold Coast"
                />
                <h4>Relax on the Gold Coast</h4>
                <p>
                  Enjoy the sun, surf, and sand at one of Australia's most famous beach destinations.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/melbourne-street-art.jpg"
                  alt="Melbourne Street Art"
                />
                <h4>Discover Melbourne's Street Art</h4>
                <p>
                  Wander through the laneways of Melbourne and admire its vibrant street art scene.
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
            <h1 className="mb-5">Top Hotels in Australia</h1>
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
                  <h5 className="mb-0">$250/night</h5>
                  <div className="mt-3">
                    <p className="text-muted">
                      Spa, Pool, Free Wi-Fi, Ocean View
                    </p>
                    <div className="nearby-places">
                      <h6 className="text-primary">Nearby Places:</h6>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Bondi Beach <span className="text-muted">(1.5 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Sydney Opera House <span className="text-muted">(5 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Darling Harbour <span className="text-muted">(6 km)</span>
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
                  <h5 className="mb-0">$180/night</h5>
                  <div className="mt-3">
                    <p className="text-muted">
                      Free Breakfast, Free Wi-Fi, Rooftop Bar
                    </p>
                    <div className="nearby-places">
                      <h6 className="text-primary">Nearby Places:</h6>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Federation Square <span className="text-muted">(0.5 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Flinders Street Station <span className="text-muted">(0.8 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Royal Botanic Gardens <span className="text-muted">(1.2 km)</span>
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
                  <h5 className="mb-0">$350/night</h5>
                  <div className="mt-3">
                    <p className="text-muted">
                      Private Beach, Pool, Spa, Free Wi-Fi
                    </p>
                    <div className="nearby-places">
                      <h6 className="text-primary">Nearby Places:</h6>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Surfers Paradise <span className="text-muted">(2 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Sea World <span className="text-muted">(3 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Burleigh Heads <span className="text-muted">(5 km)</span>
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
            <h1 className="mb-5">Getting Around Australia</h1>
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
                Australia offers a variety of transportation options to help you explore the country with ease:
              </p>
              <ul>
                <li><strong>Domestic Flights:</strong> Quick and convenient for traveling between islands.</li>
                <li><strong>Buses:</strong> Affordable and widely available for intercity travel.</li>
                <li><strong>Trains:</strong> Scenic and comfortable for long-distance journeys.</li>
                <li><strong>Car Rentals:</strong> Ideal for exploring remote areas like the Outback.</li>
                <li><strong>Motorbikes:</strong> Popular for exploring local areas, especially in Bali.</li>
                <li><strong>Ride-Hailing Apps:</strong> Gojek and Grab are widely used for short-distance travel.</li>
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
            <h1 className="mb-5">Explore Australia Through Our Gallery</h1>
          </div>
          <div className="row g-4 gallery">
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="gallery-item">
                <img
                  className="img-fluid"
                  src="assets/img/package-4.jpg"
                  alt="Sydney Opera House"
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
                  src="assets/img/melbourne-street-art.jpg"
                  alt="Great Barrier Reef"
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
                  src="assets/img/destination-3.jpg"
                  alt="Uluru"
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
                  src="assets/img/kangaroo-island.jpg"
                  alt="Kangaroo Island"
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

export default Australia;