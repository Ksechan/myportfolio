import HomeBadge from '../homeBadge/homeBadge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div>
      <HomeBadge />
      <div className="contact-container text-color-white">
        <div className="contact-grow-container1">
          <div className=" contact-grow1">
            <span className="contact-title">Contact</span>
            <p className="contact-desc">
              문의사항이 있으시다면 아래연락처를 통해 연락 부탁드립니다.
            </p>
          </div>
        </div>

        <ul className="contact-list">
          <div className="contact-grow-container2">
            <li className="contact-grow2">
              <span>
                <FontAwesomeIcon icon={faMobileAlt} className="contact-icon" />
                <br />
                +82 10-3356-9426
              </span>
            </li>
          </div>

          <div className="contact-grow-container2">
            <a
              href="mailto:rlatpcks77@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-grow2"
            >
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <br />
                <span>rlatpcks77@gmail.com</span>
              </li>
            </a>
          </div>

          <div className="contact-grow-container2">
            <a
              href="https://github.com/rlatpks77"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-grow2"
            >
              <li>
                <FontAwesomeIcon icon={faGithub} className="contact-icon" />
                <br />
                <span>https://github.com/rlatpks77</span>
              </li>
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
