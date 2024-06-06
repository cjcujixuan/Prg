import React from 'react';
import { useParams } from 'react-router-dom';

const UniversityDetail = () => {
    const { universityId } = useParams();

    return (
        <div>
            <h1>大學詳細信息</h1>
            <p>大學名稱: {universityId}</p>
            {/* 在這裡可以添加更多大學詳細信息的內容 */}
        </div>
    );
};

export default UniversityDetail;
