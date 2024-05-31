import { Outlet } from "react-router-dom";
import ParticleBg from "./../components/ParticleBg";
export const Layout = () => {
    return (
        <div id="particles" className="">
            <ParticleBg></ParticleBg>
            <Outlet />
        </div>
    );
};

export default Layout;
