import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouterHome from './components/RouterHome';
import RouterProducts from './components/RouterProducts';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';
import ProductDetail from './components/ProductDetail';
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <RouterHome /> },
            { path: '/products', element: <RouterProducts /> },
            { path: '/products/:productId', element: <ProductDetail /> }
        ]
    }
]);
function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
            {/* react-router-dom 套件 裡面的 元件'RouterProvider'
            並沒有實際寫到它的程式碼 */}
            {/* 指引到對應的頁面的元件是RouterProvider，它的屬性是router={} */}
        </div>
    );
}
export default App;
