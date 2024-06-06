import React from 'react';
import { useParams } from 'react-router-dom';

const HighSchoolDetail = () => {
    const { highSchoolId } = useParams();

    return (
        <div>
            <h1>高中詳細信息</h1>
            <p>高中名稱: {highSchoolId}</p>
            {/* 在這裡可以添加更多大學詳細信息的內容 */}
        </div>
    );
};

export default HighSchoolDetail;
