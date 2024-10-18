import { AboutUs } from '../AboutUs/AboutUs';
import { Clients } from '../Clients/Clients';
import { Contact } from '../Contact/Contact';
import { Hero } from '../Hero/Hero';
import { References } from '../References/References';
import { Services } from '../Services/Services';
import { Slogan } from '../Slogan/Slogan';
import './Homepage.css';

function Homepage() {
  return (
    <main className="Homepage">
        <Hero/>
        <AboutUs/>
        <Slogan/>
        <Services/>
        <Clients/>
        <References/>
        <Contact/>
    </main>
  );
}

export {Homepage};