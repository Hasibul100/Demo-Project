import { Outlet, useLocation } from 'react-router-dom';
import Header from '../layout/Header';

function Layout() {
    const location = useLocation();

    // যেসব route-এ Header দেখাতে চাই না
    const hideHeaderRoutes = ['/quran', '/quran/:id'];

    const shouldShowHeader = !hideHeaderRoutes.some(route =>
        new RegExp(`^${route.replace(':id', '\\d+')}$`).test(location.pathname)
    );

    return (
        <div>
            {shouldShowHeader && <Header />}
            <Outlet />
        </div>
    );
}

export default Layout;
