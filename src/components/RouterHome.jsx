import { Link } from 'react-router-dom';

const RouterHome = () => {
    return (
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
};

export default RouterHome;
