import { BrowserRouter } from "react-router-dom";

import AppRoutes from './app.routes';

// import ScrollToTop from "../utils/ScrollToTop";

// import AOS from 'aos';
// import 'aos/dist/aos.css';

export default function Routes() {
    // useEffect(() => {
    //     AOS.init();
    // }, []);

    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}