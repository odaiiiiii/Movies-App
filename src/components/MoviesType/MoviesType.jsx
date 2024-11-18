import React, { useEffect } from 'react';
import './MoviesType.css';

const MoviesType = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.card'); // حدد جميع الصناديق
    const observerOptions = {
      threshold: 0.5, // يحدث التأثير عندما يظهر 50% من الصندوق
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // إضافة الكلاس عند التمرير
        }
      });
    }, observerOptions);

    cards.forEach((card) => observer.observe(card)); // راقب كل صندوق
  }, []);

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk="
        crossOrigin="anonymous"
      />

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="card l-bg-cherry">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-bomb"></i>
                </div>
                <div className="mb-4">
                  <h2 className="card-title mb-0">Action</h2>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h5 className="d-flex align-items-center mb-0 countMovie">
                      Over 900 films
                    </h5>
                  </div>
                  <div className="col-4 text-right"></div>
                </div>
                <div className="progress mt-1 " data-height="8" style={{ height: '8px' }}>
                  <div
                    className="progress-bar l-bg-green"
                    role="progressbar"
                    data-width="25%" // يجب أن تكون نصية دائمًا
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '25%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="card l-bg-blue-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-theater-masks"></i>
                </div>
                <div className="mb-4">
                  <h2 className="card-title mb-0">Drama</h2>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h5 className="d-flex align-items-center mb-0 countMovie">
                      Over 650 films
                    </h5>
                  </div>
                  <div className="col-4 text-right"></div>
                </div>
                <div className="progress mt-1 " data-height="8" style={{ height: '8px' }}>
                  <div
                    className="progress-bar l-bg-green"
                    role="progressbar"
                    data-width="25%" // يجب أن تكون نصية دائمًا
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '25%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="card l-bg-green-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-laugh"></i>
                </div>
                <div className="mb-4">
                  <h2 className="card-title mb-0">Comedy</h2>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h5 className="d-flex align-items-center mb-0 countMovie">
                      Over 450 films
                    </h5>
                  </div>
                  <div className="col-4 text-right"></div>
                </div>
                <div className="progress mt-1 " data-height="8" style={{ height: '8px' }}>
                  <div
                    className="progress-bar l-bg-orange"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '25%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6">
            <div className="card l-bg-orange-dark">
              <div className="card-statistic-3 p-4">
                <div className="card-icon card-icon-large">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="mb-4">
                  <h2 className="card-title mb-0">Science Fiction</h2>
                </div>
                <div className="row align-items-center mb-2 d-flex">
                  <div className="col-8">
                    <h5 className="d-flex align-items-center mb-0 countMovie">
                      Over 300 films
                    </h5>
                  </div>
                  <div className="col-4 text-right"></div>
                </div>
                <div className="progress mt-1 " data-height="8" style={{ height: '8px' }}>
                  <div
                    className="progress-bar l-bg-cyan"
                    role="progressbar"
                    data-width="25%"
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: '25%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesType;
