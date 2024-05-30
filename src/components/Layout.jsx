import { Outlet } from "react-router-dom";
import ParticleBg from "./../components/ParticleBg";
import Sidebar from "./../components/Sidebar";
export const Layout = () => {
    return (
        <div id="particles" className="">
            <Sidebar></Sidebar>
            <ParticleBg></ParticleBg>
            <Outlet />
        </div>
    );
};

export default Layout;
