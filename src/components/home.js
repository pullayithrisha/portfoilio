import './home.css';
import ThrishaImage from '../assets/thrishabg.png';

function Home() {
    return (
        <div className="home-container">
            <div className="text-container">
                <p className="hey">Hey!!!!</p>
                <p className="name">I'm Thrisha</p>
            </div>
            <div className="thrishapic">
                <img src={ThrishaImage} alt="Thrisha" />
            </div>
        </div>
    );
}

export default Home;
