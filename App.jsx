import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [showCopyright, setShowCopyright] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Isha</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#hero">Hero Section</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#three-column">Three-Column Section</a>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-primary"
                  onClick={() => setShowCopyright(true)}
                >
                  Copyright
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
        }}
      >
        <div>
          <h1>Welcome to My Hero Section</h1>
          <p>This is a brief description of the hero section.</p>
        </div>
      </section>

      {/* Three-Column Section */}
      <section id="three-column" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 text-center">
              <img src="https://via.placeholder.com/150" alt="Column 1" className="img-fluid mb-3" />
              <h3>Column 1</h3>
              <p>Short description for column 1.</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="https://via.placeholder.com/150" alt="Column 2" className="img-fluid mb-3" />
              <h3>Column 2</h3>
              <p>Short description for column 2.</p>
            </div>
            <div className="col-md-4 text-center">
              <img src="https://via.placeholder.com/150" alt="Column 3" className="img-fluid mb-3" />
              <h3>Column 3</h3>
              <p>Short description for column 3.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-center text-white py-3">
        <p>&copy; 2025 Siddhant Rawat. All rights reserved.</p>
      </footer>

      {/* Copyright Popup */}
      {showCopyright && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          onClick={() => setShowCopyright(false)}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Copyright Information</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCopyright(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>&copy; 2025 Isha. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
