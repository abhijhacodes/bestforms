import "./styles.css";
import {Link} from 'react-router-dom';
export const LandingPage = (): JSX.Element => {
  return (
    <main>
      <div className="left__panel">
        <div className="left__content">
          <h1>Modern way of collecting user&#x27;s data</h1>
          <h3>Collect data in the way your users enjoy</h3>
          <div className="buttons__container">
          <Link to='/login' className="link"><button>Get started</button></Link>
            <button>See how it works</button>
          </div>
        </div>
      </div>
      <div className="right__panel">
        <div className="poster__image"></div>
      </div>
    </main>
  );
};
