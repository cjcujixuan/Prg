import {Link} from 'react-router-dom';
const RouterHome= () => {
    return(
        <div>
            <h1>Home Page</h1>
            <h2>切換至 <Link to="/products">Products</Link></h2>
        </div>
    );
    
};
export default RouterHome;