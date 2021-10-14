import react from 'react';
import HomeBadge from '../homeBadge/homeBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div>
      <HomeBadge />
      <div className="contact-container text-color-white">
        <span className="contact-title">Contact</span>
        <p className="contact-desc">
          문의사항이 있으시다면 아래연락처를 통해 연락 부탁드립니다.
        </p>
        <ul className="contact-list">
          <li>
            <FontAwesomeIcon icon={faMobileAlt} className="contact-icon" />
            <br />
            <span className="contact-info">+82 10-3356-9426</span>
          </li>

          <a href="mailto:rlatpcks77@gmail.com" target="_blank">
            <li>
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <br />
              <span className="contact-info">rlatpcks77@gmail.com</span>
            </li>
          </a>

          <a href="https://github.com/rlatpks77" target="_blank">
            <li>
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
              <br />
              <span className="contact-info">https://github.com/rlatpks77</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
