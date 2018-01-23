import Icon from 'react-icons-kit';
import { location, phone, skype } from 'react-icons-kit/icomoon';
import { ic_mail_outline, ic_play_arrow } from 'react-icons-kit/md';

export const Footer = () => (
    <footer>
      <ul className="footer-nav">
        <li className="footer-nav-block">
          <h3>hot offers</h3>
          <ul>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus.Nam elit magna hend
            </p>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Vestibulum ante ipsum primis in faucibus orci luctus</a></li>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Nam elit magna hendrerit sit amet tincidunt ac</a></li>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Quisque diam lorem interdum vitae dapibus ac scele</a></li>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Donec eget tellus non erat lacinia fermentum</a></li>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Donec in velit vel ipsum auctor pulvin</a></li>
          </ul>
        </li>
        <li className="footer-nav-block">
          <h3>hot offers</h3>
          <ul>
            <p>
              Vestibulum ante ipsum primis in faucibus orci luctus.Nam elit magna hend
            </p>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Vestibulum ante ipsum primis in faucibus orci luctus</a></li>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Nam elit magna hendrerit sit amet tincidunt ac</a></li>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Quisque diam lorem interdum vitae dapibus ac scele</a></li>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Donec eget tellus non erat lacinia fermentum</a></li>
            <li>
              <span className="icon"><Icon size={11} icon={ic_play_arrow} /></span>
              <a href="#">Donec in velit vel ipsum auctor pulvin</a></li>
          </ul>
        </li>
        <li className="footer-nav-block footer-nav-info">
          <h3>Store Information</h3>
          <ul>
            <li>
              <span className="icon"><Icon size={24} icon={location} /></span>
              <span className="info-title">
              <a href="#">Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</a>
            </span>
            </li>
            <li>
              <span className="icon"><Icon size={24} icon={phone} /></span>
              <span className="info-title"><a href="#">Call us now toll free: (800) 2345-6789</a></span>
            </li>
            <li>
              <span className="icon"><Icon size={24} icon={ic_mail_outline} /></span>
              <span className="info-title">
                <a href="#">Customer support: support@example.com</a>
                <a href="#">Press: pressroom@example.com</a>
            </span>
            </li>
            <li>
              <span className="icon"><Icon size={24} icon={skype} /></span>
              <span className="info-title"><a href="#">Skype: sample-username</a>
            </span>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  )
;
