import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const position = [33.97063895342292, -6.837051627682918];

function Footer({ dark, updateDark }) {

  return (
    <>
      <footer
        className={` ${
          dark
            ? "footer text-dark p-2 bg-transparent"
            : "bg-dark footer  text-success p-2 "
        }`}
      >
        
        <div className="container-fluid">
            
    
          <div className="row">
            
            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3  p-2">
              <h6 className="text-uppercase mb-4 fw-bold fst-italic">
                {"<"} ELMACHHOUNE in the Map{"/>"}
              </h6>
              <MapContainer
                center={[33.97063895342292, -6.837051627682918]}
                zoom={14}
                scrollWheelZoom={false}
                className="rounded"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://yelmouss.com">Yelmouss</a>'
                />
                <Marker position={position}>
                  <Popup>
                    ELMACHHOUNE. <br /> Location.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-center ">
              <h6 className="text-uppercase mb-4 font-weight-bold p-2 rounded">
                {"<"} Infos Contact {"/>"}
              </h6>
              <hr />
              <p>
                <i className="fas fa-home mr-3"></i> Rabat, Takadoum 10200, MA
              </p>
              <p>
                <i className="fas fa-envelope mr-3"></i>  business.elmachhoune@mail.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 212 649 455 082
              </p>
            </div>
          </div>
        </div>

        <div className="card-footer text-center fw-bold">
          © 2023 Copyright :{" "}
          <a
            className="text-warning"
            target={"_blank"}
            href="https://github.com/ELMACHHOUNE/"
            rel="noreferrer"
          >
            elmachhoune.com
          </a>
        </div>
        <a
          href="https://wa.me/+212649455082"
          className="float"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-whatsapp my-float"></i>
        </a>

      </footer>
    </>
  );
}

export default Footer;
