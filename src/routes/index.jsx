import { Routes, Route } from 'react-router-dom';

import Home from '../component/Home';
import Location from '../component/Location';
import DetailCharacter from '../component/DetailCharacter';
import CharbyLocation from '../component/CharbyLocation';

function RoutesIndex() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<Location />} />
            <Route path="/character/:id" element={<DetailCharacter />} />
            <Route path="/location/:id" element={ <CharbyLocation /> } />
        </Routes>
    );
}

export default RoutesIndex;