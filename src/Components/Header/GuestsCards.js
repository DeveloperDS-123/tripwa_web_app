import Travel from "../../Images/London.png";
import Headphone from "../../Images/headphone.svg";

const GuestsCards = () => {
  return (
    <div className="staying">
      <img src={Travel} alt="travel" />
      <p className="order">Entire cabin . 10 beds</p>
      <div className="Name">
        <p className="ad-button">ADS</p>
        <p className="main_name">Best Western Cedars</p>
      </div>
      <div className="location">
        <p className="location-icon">
          <svg
            width="15"
            height="15"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.1562 5.28125C10.1562 4.31155 9.77104 3.38157 9.08536 2.69589C8.39968 2.01021 7.4697 1.625 6.5 1.625C5.5303 1.625 4.60032 2.01021 3.91464 2.69589C3.22896 3.38157 2.84375 4.31155 2.84375 5.28125C2.84375 6.78113 4.04381 8.736 6.5 11.0776C8.95619 8.736 10.1562 6.78113 10.1562 5.28125ZM6.5 12.1875C3.52056 9.47944 2.03125 7.17681 2.03125 5.28125C2.03125 4.09606 2.50206 2.95942 3.34012 2.12137C4.17817 1.28331 5.31481 0.8125 6.5 0.8125C7.68519 0.8125 8.82183 1.28331 9.65988 2.12137C10.4979 2.95942 10.9688 4.09606 10.9688 5.28125C10.9688 7.17681 9.47944 9.47944 6.5 12.1875Z"
              fill="#9C9C9C"
            />
            <path
              d="M6.5 6.5C6.82323 6.5 7.13323 6.3716 7.36179 6.14304C7.59035 5.91448 7.71875 5.60448 7.71875 5.28125C7.71875 4.95802 7.59035 4.64802 7.36179 4.41946C7.13323 4.1909 6.82323 4.0625 6.5 4.0625C6.17677 4.0625 5.86677 4.1909 5.63821 4.41946C5.40965 4.64802 5.28125 4.95802 5.28125 5.28125C5.28125 5.60448 5.40965 5.91448 5.63821 6.14304C5.86677 6.3716 6.17677 6.5 6.5 6.5ZM6.5 7.3125C5.96128 7.3125 5.44462 7.09849 5.06369 6.71756C4.68276 6.33663 4.46875 5.81997 4.46875 5.28125C4.46875 4.74253 4.68276 4.22587 5.06369 3.84494C5.44462 3.46401 5.96128 3.25 6.5 3.25C7.03872 3.25 7.55538 3.46401 7.93631 3.84494C8.31724 4.22587 8.53125 4.74253 8.53125 5.28125C8.53125 5.81997 8.31724 6.33663 7.93631 6.71756C7.55538 7.09849 7.03872 7.3125 6.5 7.3125Z"
              fill="#9C9C9C"
            />
          </svg>
        </p>
        <p className="location-txt">1 Anzinger Court</p>
      </div>
      <div className="stays">
        <p className="stay-txt">
          $26 <span className="time"> / night</span>
        </p>
        <p className="rating">
          <svg
            width="15"
            height="15"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.75 5.31252C12.8125 5.00002 12.5625 4.62502 12.25 4.62502L8.6875 4.12502L7.0625 0.875023C7 0.750023 6.9375 0.687523 6.8125 0.625023C6.5 0.437523 6.125 0.562523 5.9375 0.875023L4.375 4.12502L0.8125 4.62502C0.625 4.62502 0.5 4.68752 0.4375 4.81252C0.1875 5.06252 0.1875 5.43752 0.4375 5.68752L3 8.18752L2.375 11.75C2.375 11.875 2.375 12 2.4375 12.125C2.625 12.4375 3 12.5625 3.3125 12.375L6.5 10.6875L9.6875 12.375C9.75 12.4375 9.875 12.4375 10 12.4375C10.0625 12.4375 10.0625 12.4375 10.125 12.4375C10.4375 12.375 10.6875 12.0625 10.625 11.6875L10 8.12502L12.5625 5.62502C12.6875 5.56252 12.75 5.43752 12.75 5.31252Z"
              fill="#FFA115"
            />
          </svg>
          <span className="rate">
            4.8 <span className="time"> (28)</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default GuestsCards;
