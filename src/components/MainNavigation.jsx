import { Link } from "react-router-dom";
import './MainNavigation.css'; // 引入CSS檔案

const MainNavigation = () => {
    return (
        <header>
            <ul className="nav-list">
                <li>
                    <Link to="/">首頁</Link>
                </li>
                <li>
                    <Link to="/university">科技大學</Link>
                </li>
                <li>
                    <Link to="/highSchool">高中</Link>
                </li>
            </ul>
        </header>
    );
}

export default MainNavigation;
