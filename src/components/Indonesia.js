import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Indonesia() {
  return (
    <div>
      {/* Hero Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Indonesia
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
                    Indonesia
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
              Explore Indonesia
            </h6>
            <h1 className="mb-5">Discover the Beauty of Indonesia</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="position-relative overflow-hidden">
                <img
                  className="img-fluid w-100"
                  src="assets/img/indonesia-1.jpg"
                  alt="Indonesia"
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h2>Why Visit Indonesia?</h2>
              <p>
                Indonesia is a tropical paradise with over 17,000 islands, offering stunning beaches, lush jungles, and rich cultural heritage. From the temples of Bali to the Komodo dragons, Indonesia is a traveler's dream.
              </p>
              <ul>
              <li>Unwind on Bali and Lombok's stunning beaches with crystal-clear waters.</li> 
              <li>Discover the historic temples of Borobudur and Prambanan.</li> 
              <li>Explore Raja Ampat's vibrant coral reefs and marine life.</li> 
              <li>Experience the underwater wonders of Raja Ampat's rich biodiversity.</li> 
              <li>Dive into Raja Ampat, a top global destination for diving enthusiasts.</li>
              </ul>
              <Link to="/booking" className="btn btn-primary mt-3">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Things to Do in Indonesia Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Things to Do
            </h6>
            <h1 className="mb-5">Top Activities in Indonesia</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/temple.jpg"
                  alt="Borobudur Temple"
                />
                <h4>Visit Borobudur Temple</h4>
                <p>
                  Explore the world's largest Buddhist temple, a UNESCO World Heritage Site.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/beach.jpg"
                  alt="Bali Beaches"
                />
                <h4>Relax on Bali's Beaches</h4>
                <p>
                  Unwind on the famous beaches of Kuta, Seminyak, and Nusa Dua.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/komodo-dragon.jpg"
                  alt="Komodo Dragons"
                />
                <h4>See Komodo Dragons</h4>
                <p>
                  Visit Komodo Island to see the world's largest lizards in their natural habitat.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/raja-ampat.jpg"
                  alt="Raja Ampat"
                />
                <h4>Dive in Raja Ampat</h4>
                <p>
                  Discover one of the world's most biodiverse marine ecosystems.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/ubud.jpg"
                  alt="Ubud"
                />
                <h4>Explore Ubud</h4>
                <p>
                  Immerse yourself in Bali's cultural heart, known for its art, temples, and rice terraces.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="activity-item text-center p-4">
                <img
                  className="img-fluid rounded mb-3"
                  src="assets/img/hiking.jpg"
                  alt="Mount Bromo"
                />
                <h4>Hike Mount Bromo</h4>
                <p>
                  Witness the breathtaking sunrise over this active volcano in East Java.
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
            <h1 className="mb-5">Top Hotels in Indonesia</h1>
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
                      Spa, Pool, Free Wi-Fi, Ocean View
                    </p>
                    <div className="nearby-places">
                      <h6 className="text-primary">Nearby Places:</h6>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Seminyak Beach <span className="text-muted">(0.5 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Potato Head Beach Club <span className="text-muted">(1 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Petitenget Temple <span className="text-muted">(1.5 km)</span>
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
                      Free Breakfast, Free Wi-Fi, Rooftop Bar
                    </p>
                    <div className="nearby-places">
                      <h6 className="text-primary">Nearby Places:</h6>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Ubud Monkey Forest <span className="text-muted">(0.8 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Ubud Art Market <span className="text-muted">(1 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Tegalalang Rice Terrace <span className="text-muted">(5 km)</span>
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
                          Nusa Dua Beach <span className="text-muted">(0.2 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Water Blow <span className="text-muted">(1 km)</span>
                        </li>
                        <li>
                          <i className="fa fa-map-marker-alt text-primary me-2" />
                          Bali Collection <span className="text-muted">(2 km)</span>
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
            <h1 className="mb-5">Getting Around Indonesia</h1>
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
                Indonesia offers a variety of transportation options to help you explore the archipelago:
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
            <h1 className="mb-5">Explore Indonesia Through Our Gallery</h1>
          </div>
          <div className="row g-4 gallery">
            <div className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="gallery-item">
                <img
                  className="img-fluid"
                  src="assets/img/package-2.jpg"
                  alt="Borobudur Temple"
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
                  src="assets/img/hiking.jpg"
                  alt="Bali Beaches"
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
                  src="assets/img/raja-ampat.jpg"
                  alt="Komodo Island"
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
                  src="assets/img/ubud.jpg"
                  alt="Raja Ampat"
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

export default Indonesia;