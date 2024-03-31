import React from "react";
import { Carousel } from "react-responsive-carousel";
import { ImQuotesLeft } from "react-icons/im";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Testimonials = () => {
  return (
    <div className="a_testimonials">
      <Carousel showStatus={false} showThumbs={false}>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 position-relative">
                <div className="a_testimonial_quotes">
                  <ImQuotesLeft size={30} />
                </div>
                <p className="text-start">
                  We at Jio MAMI Mumbai Film Festival with Star are proud of our
                  partnership with BMS. They turned around the registration to
                  the festival and the on ground management of delegates at our
                  venues altering visitor experience at the festival which is
                  the cornerstone of engagement at any LIVE event. BMS is an
                  integral part of building MAMI and its growth in the last 6
                  years. Despite being a huge corporate their commitment to
                  independent institutions in cultural spaces is unflinching.
                  Our gratitude to Ashish Hemrajani and his team at BMS for
                  their faith and support.”
                </p>
                <div className="d-flex gap-4 align-items-center">
                  <div className="a_left">
                    <div className="a_img_box">
                      <img src="Image/ShowsCard/smrit.avif" alt="" />
                    </div>
                  </div>
                  <div className="a_right">
                    <h6 className="fw-bold text-start">Smriti Kiran</h6>
                    <h6 className="fw-bold text-start mt-2">
                      Artistic Director - Mumbai Academy of Moving
                    </h6>
                    <h6 className="fw-bold text-start mt-2">Image (MAMI)</h6>
                    <h6 className="fw-bold text-start mt-2">
                      Jio MAMI Mumbai Film Festival with Star
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="a_testimonial_img">
                <img src="Image/ShowsCard/jio.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 position-relative">
                <div className="a_testimonial_quotes">
                  <ImQuotesLeft size={30} />
                </div>
                <p className="text-start">
                  It’s been eight fantastic years of RED FM working with
                  Bookmyshow for listing and promoting its events and IPs
                  through BMS. It has never felt like a client-vendor
                  relationship. Both the brands have been equal partners,
                  bringing incredible synergies to the projects. And both being
                  leaders in their respective industries, RED FM and BMS have
                  always set examples for other brands to follow.”
                </p>
                <div className="d-flex gap-4 align-items-center">
                  <div className="a_right">
                    <h6 className="fw-bold text-start">Rajat Uppal</h6>
                    <h6 className="fw-bold text-start mt-2">
                      National Marketing Head - RED FM
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="a_testimonial_img">
                <img src="Image/ShowsCard/red-fmm.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 position-relative">
                <div className="a_testimonial_quotes">
                  <ImQuotesLeft size={30} />
                </div>
                <p className="text-start">
                  Apart from being market leaders and pioneers of the
                  entertainment segment, Bookmyshow has also helped evolve
                  Indian markets to consume fresh and different content. Sunburn
                  and Bookmyshow’s association are years strong, and we will
                  continue to work together, and grow together. Bookmyshow today
                  not just offers to be a ticketing platform for Sunburn, put a
                  partner with many more integrated offerings like marketing,
                  planning and on ground operations support. We at Sunburn are
                  proud and grateful to be associated with Bookmyshow!”
                </p>
                <div className="d-flex gap-4 align-items-center">
                  <div className="a_left">
                    <div className="a_img_box">
                      <img src="Image/ShowsCard/kar.avif" alt="" />
                    </div>
                  </div>
                  <div className="a_right">
                    <h6 className="fw-bold text-start">Karan Singh</h6>
                    <h6 className="fw-bold text-start mt-2">
                      COO - Percept Live &
                    </h6>
                    <h6 className="fw-bold text-start mt-2">
                      CEO - Sunburn Percept Live Pvt. Ltd.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="a_testimonial_img">
                <img src="Image/ShowsCard/perceptn.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <div className="px-5 position-relative">
                <div className="a_testimonial_quotes">
                  <ImQuotesLeft size={30} />
                </div>
                <p className="text-start">
                  The NCPA shares a cherished 13 year bond with BMS, its online
                  ticketing partner that has helped art lovers book their seats
                  for their favourite shows in a seamless manner. The presence
                  of a team from Bookmyshow in the NCPA premises on the day of
                  the event further ensures the smooth-functioning of
                  ticket-related formalities.”
                </p>
                <div className="d-flex gap-4 align-items-center">
                  <div className="a_right">
                    <h6 className="fw-bold text-start">NCPA- National Centre for the</h6>
                    <h6 className="fw-bold text-start mt-2">
                    Performing Arts.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5">
              <div className="a_testimonial_img">
                <img src="Image/ShowsCard/ncpas.avif" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Testimonials;
