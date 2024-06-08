import { Link } from 'react-router-dom';
import React from 'react';
import { useLoaderData } from "react-router-dom"
import ResultsList from './ResultsList';
// import ResultsList2 from './ResultsList2';
const RouterHome = () => {
    const results = useLoaderData();
    // const results2 = useLoaderData();
    return (
        <ResultsList results={results} />,
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h3><Link to="/university">大學資訊頁面</Link></h3>
              <h2>世界大學各國占比</h2>
              <iframe title="世界大學各國占比" src="https://public.opendatasoft.com/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJwaWUiLCJmdW5jIjoiQ09VTlQiLCJ5QXhpcyI6InRvdGFsX3Njb3JlIiwic2NpZW50aWZpY0Rpc3BsYXkiOnRydWUsImNvbG9yIjoicmFuZ2UtY3VzdG9tIiwicG9zaXRpb24iOiJjZW50ZXIifV0sInhBeGlzIjoiY291bnRyeSIsIm1heHBvaW50cyI6NTAsInNvcnQiOiIiLCJzZXJpZXNCcmVha2Rvd24iOiIiLCJjb25maWciOnsiZGF0YXNldCI6InNoYW5naGFpLXdvcmxkLXVuaXZlcnNpdHktcmFua2luZyIsIm9wdGlvbnMiOnsic29ydCI6IndvcmxkX3JhbmsiLCJyZWZpbmUueWVhciI6IjIwMTgifX0sInNlcmllc0JyZWFrZG93blRpbWVzY2FsZSI6IiJ9XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&static=false&datasetcard=false" width="100%" height="400" frameborder="0"></iframe>
              <h3><Link to="/highSchool">高中資訊頁面</Link></h3>
              <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                  <div style={{ width: '50%' }}>
                      <h2>合作高中K-12學校的起始年級占比</h2>
                      <iframe title="合作高中K-12學校的起始年級占比" src="https://public.opendatasoft.com/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6InVzLXB1YmxpYy1zY2hvb2xzIiwib3B0aW9ucyI6eyJyZWZpbmUubGV2ZWwiOiJISUdIIn19LCJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJwb2xhciIsImZ1bmMiOiJDT1VOVCIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6InJhbmdlLWN1c3RvbSJ9XSwieEF4aXMiOiJzdF9ncmFkZSIsIm1heHBvaW50cyI6MjAwLCJzb3J0IjoiIiwic2VyaWVzQnJlYWtkb3duIjoiIiwic2VyaWVzQnJlYWtkb3duVGltZXNjYWxlIjoiIn1dLCJ0aW1lc2NhbGUiOiIiLCJkaXNwbGF5TGVnZW5kIjp0cnVlLCJhbGlnbk1vbnRoIjp0cnVlfQ%3D%3D&static=false&datasetcard=false" width="100%" height="400" frameborder="0"></iframe>
                  </div>
                  <div style={{ width: '50%' }}>
                      <h2>合作高中K-12學校的畢業年級占比</h2>
                      <iframe title="合作高中K-12學校的畢業年級占比" src="https://public.opendatasoft.com/chart/embed/?dataChart=eyJxdWVyaWVzIjpbeyJjb25maWciOnsiZGF0YXNldCI6InVzLXB1YmxpYy1zY2hvb2xzIiwib3B0aW9ucyI6eyJyZWZpbmUubGV2ZWwiOiJISUdIIn19LCJjaGFydHMiOlt7ImFsaWduTW9udGgiOnRydWUsInR5cGUiOiJwb2xhciIsImZ1bmMiOiJDT1VOVCIsInNjaWVudGlmaWNEaXNwbGF5Ijp0cnVlLCJjb2xvciI6InJhbmdlLWN1c3RvbSJ9XSwieEF4aXMiOiJlbmRfZ3JhZGUiLCJtYXhwb2ludHMiOjIwMCwic29ydCI6IiIsInNlcmllc0JyZWFrZG93biI6IiIsInNlcmllc0JyZWFrZG93blRpbWVzY2FsZSI6IiJ9XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&static=false&datasetcard=false" width="100%" height="400" frameborder="0"></iframe>
                  </div>
              </div>
          </div>
      );
    // return <ResultsList2 results2={results2} />;
}
export default RouterHome;
export const  ResultsLoader = async () => {
    // 呼叫API 取得產品資料
    const response = await fetch("https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/shanghai-world-university-ranking/records?limit=100 ");
    // 如果回傳的HTTP 狀態碼不是200 OK，就回傳錯誤訊息
    if (!response.ok) {
        return { isErrored: true, message: "取得資料發生錯誤...", }
    } else {
        // 取得產品資料，並轉換成JSON 格式
        const data = await response.json();
        return data.results;
    }
};