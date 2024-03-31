import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';
import { Routes, Route } from "react-router-dom"
import { Header } from "./Header"
import { Movies } from "./Pages/Movies/Movies"
import { Activities } from "./Pages/Activities/Activities"
import { Events } from "./Pages/Events/Events"
import { Plays } from "./Pages/Plays/Plays"
import { Sports } from "./Pages/Sports/Sports"
import { Footer } from "./Footer/Footer"
import { Stream } from "./Pages/Stream/Stream"
import { Shows } from "./Pages/Shows/Shows"
import { Corporates } from "./Pages/Corporates/Corporates"
import { Offers } from "./Pages/Offers/Offers"
import { GiftCards } from "./Pages/GiftCards/GiftCards"


function App() {
    return (
        <>
            <div className='bg-light'>
                <Header />
                <Routes>
                    <Route path="/" element={<Movies />}></Route>
                    <Route path="/activities" element={<Activities />}></Route>
                    <Route path="/events" element={<Events />}></Route>
                    <Route path="/plays" element={<Plays />}></Route>
                    <Route path="/sports" element={<Sports />}></Route>
                    <Route path="/stream" element={<Stream />}></Route>
                    <Route path="/list-your-shows" element={<Shows />}></Route>
                    <Route path="/corporates" element={<Corporates />}></Route>
                    <Route path="/offers" element={<Offers />}></Route>
                    <Route path="/gift-cards" element={<GiftCards />}></Route>
                    <Route path="*" element={<h4>Page Not Found</h4>}></Route>
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App