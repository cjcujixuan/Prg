import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from "./MainNavLink.module.css";

const RouterUniversity = () => {
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let allUniversities = [];
            for (let i = 1; i <= 100; i++) {
                const response = await fetch(`https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/shanghai-world-university-ranking/records?limit=100&refine=year%3A%222018%22&refine=world_rank%3A%22${i}%22`);
                const data = await response.json();
                if (data.results && data.results.length > 0) {
                    const universitiesWithRank = data.results.map(result => ({
                        ...result,
                        world_rank_int: parseInt(result.world_rank, 10)
                    }));
                    allUniversities.push(...universitiesWithRank);
                } else {
                    console.error('No data found for rank:', i);
                }
            }
            const sortedData = allUniversities.sort((a, b) => a.world_rank_int - b.world_rank_int);
            setUniversities(sortedData);
        } catch (fetchError) {
            console.error('Error fetching the university rankings:', fetchError);
            setError('Failed to fetch data. See console for more details.');
        } finally {
            setLoading(false); // 加載完成後設置 loading 為 false
        }
    };

    return (
        <div>

<h1>大學排名表</h1>
<iframe
  title="Shanghai World University Ranking Table"
  src="https://public.opendatasoft.com/explore/embed/dataset/shanghai-world-university-ranking/table/?sort=world_rank&refine.year=2018&static=false&datasetcard=false"
  width="100%" height="400" frameborder="0"
></iframe>

<h2>大學區域分布</h2>
<iframe
  title="Shanghai World University Ranking Map"
  src="https://public.opendatasoft.com/explore/embed/dataset/shanghai-world-university-ranking/map/?sort=world_rank&refine.year=2018&location=2,56.36525,4.21875&basemap=jawg.light&static=false&datasetcard=false&scrollWheelZoom=false"
  width="100%" height="400" frameborder="0"
></iframe>

            <h1>大學排名前100名</h1>
            {loading ? ( // 如果在加載中顯示載入動畫
                <div>Loading...</div>
            ) : (
                <>
                    {error && <p>{error}</p>}
                    <ul className={classes.grid}>
                        {universities.length > 0 ? (
                            universities.map((university, index) => (
                                <li key={index} className={classes.item}>
                                    <Link to={`/university/${university.university_name}`}>
                                        {university.world_rank_int}. {university.university_name} - {university.country}
                                    </Link>
                                </li>
                            ))
                        ) : (
                            <li>暫無數據</li>
                        )}
                    </ul>
                </>
            )}
        </div>
    );
};

export default RouterUniversity;
