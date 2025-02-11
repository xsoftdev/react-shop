import { Outlet } from "react-router-dom"
import TopBar from "../components/common/topbar/TopBar.jsx";
import Header from "../components/common/header/index/index.jsx";
const defaultLayout = () => {
    return (
        <>
            <TopBar />
            <Header />
            <Outlet />
        </>
    )
}

export default defaultLayout;