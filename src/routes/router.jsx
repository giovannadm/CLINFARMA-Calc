import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/homePage';
import Layout from '../components/layout/layout';
import AboutUsPage from "../pages/aboutUsPage";
import HowToUsePage from "../pages/howToUsePage";
import ScoresPage from "../pages/scoresPage";

const routes = [
    {
        path: '/',
        element: <HomePage />,
        isIndex: true,
    },
    {
        path: '/about-us',
        element: <AboutUsPage />,
    },
    {
        path: '/scores',
        element: <ScoresPage />,
    },
    {
        path: '/how-to-use',
        element: <HowToUsePage />,
    },
]


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {routes.map(route => (
                        <Route
                            key={route.path}
                            index={!!route.isIndex}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

