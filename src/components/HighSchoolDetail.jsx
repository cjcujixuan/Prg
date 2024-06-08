import React from 'react';
import { useParams } from 'react-router-dom';

const HighSchoolDetail = () => {
    const { highSchoolId } = useParams();

    console.log('High school ID:', highSchoolId);


    return (
        <div>
        <h1>高中詳細信息</h1>
        <p>高中名稱: {`${highSchoolId}`}</p>
        <p>地址: {`${highSchoolId.address}`}</p>

    </div>
    );
};

export default HighSchoolDetail;
