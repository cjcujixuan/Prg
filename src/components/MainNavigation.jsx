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
                    <Link to="/products">商品</Link>
                </li>
            </ul>
        </header>
    );
}

export default MainNavigation;
