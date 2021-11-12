import './topbar.scss';
import { ContactPhone, MarkEmailRead } from '@mui/icons-material';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            profile.
          </a>
          <div className="itemContainer">
            <ContactPhone className="icon" />
            <span>651-408-2114</span>
          </div>
          <div className="itemContainer">
            <MarkEmailRead className="icon" />
            <span>seng.vang1@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
