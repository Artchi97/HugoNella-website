import "../styles/SocialMedia.css";

export default function SocialMedia() {
  return (
    <ul className="social-media-items">
      <li className="social-media-item">
        <a
          href="https://www.facebook.com/hodowlahugonella"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
      </li>
      <li className="social-media-item">
        <a
          href="https://www.instagram.com/hodowlahugonella/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </li>
      <li className="social-media-item">
        <a
          href="https://www.tiktok.com/@hugonella"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-tiktok"></i>
        </a>
      </li>
    </ul>
  );
}
