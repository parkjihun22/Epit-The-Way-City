// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './pages/Main/Main';

import Brand1 from './pages/Brand/Brand1';
import Brand2 from './pages/Brand/Brand2';

import BusinessGuide1 from './pages/BusinessGuide/BusinessGuide1';
import BusinessGuide2 from './pages/BusinessGuide/BusinessGuide2';
import BusinessGuide3 from './pages/BusinessGuide/BusinessGuide3';

import LocationEnvironment1 from './pages/LocationEnvironment/LocationEnvironment1';
import LocationEnvironment2 from './pages/LocationEnvironment/LocationEnvironment2';

import ComplexGuide1 from './pages/ComplexGuide/ComplexGuide1';
import ComplexGuide2 from './pages/ComplexGuide/ComplexGuide2';
import ComplexGuide3 from './pages/ComplexGuide/ComplexGuide3';

import FloorPlan1 from './pages/FloorPlan/FloorPlan1';
import FloorPlan2 from './pages/FloorPlan/FloorPlan2';
import FloorPlan3 from './pages/FloorPlan/FloorPlan3';
import FloorPlan4 from './pages/FloorPlan/FloorPlan4';
import FloorPlan5 from './pages/FloorPlan/FloorPlan5';
import FloorPlan6 from './pages/FloorPlan/FloorPlan6';
import FloorPlan7 from './pages/FloorPlan/FloorPlan7';
import FloorPlanVideos from './pages/FloorPlan/FloorPlanVideos';
import Emodel from './pages/FloorPlan/Emodel';

import Interior1 from './pages/Interior/Interior1';
import Interior2 from './pages/Interior/Interior2';
import Interior3 from './pages/Interior/Interior3';

import SalesInfoGuide from './pages/SalesInfo/SalesInfoGuide';
import SalesInfoAnnouncement from './pages/SalesInfo/SalesInfoAnnouncement';
import SalesInfoStampTax from './pages/SalesInfo/SalesInfoStampTax';
import SubscriptionGuide from './pages/SalesInfo/SubscriptionGuide';

import Press from './pages/Promotion/Press';
import PressDetail from './pages/Promotion/PressDetail';
import PressWrite from './pages/Promotion/PressWrite';
import Customer from './pages/Promotion/Customer';

import RouteSEO from './components/SEO/RouteSEO';

function App() {
  return (
    <BrowserRouter>
      <RouteSEO />

      <Routes>
        {/* 메인 */}
        <Route path="/" element={<Main />} />

        {/* 브랜드소개 */}
        <Route path="/Brand/intro" element={<Brand1 />} />
        <Route path="/Brand/video" element={<Brand2 />} />

        {/* 사업안내 */}
        <Route
          path="/BusinessGuide/intro"
          element={<BusinessGuide1 />}
        />
        <Route
          path="/BusinessGuide/plan"
          element={<BusinessGuide2 />}
        />
        <Route
          path="/BusinessGuide/documents"
          element={<BusinessGuide3 />}
        />

        {/* 입지환경 */}
        <Route
          path="/LocationEnvironment/intro"
          element={<LocationEnvironment1 />}
        />
        <Route
          path="/LocationEnvironment/primium"
          element={<LocationEnvironment2 />}
        />

        {/* 단지안내 */}
        <Route
          path="/ComplexGuide/intro"
          element={<ComplexGuide1 />}
        />
        <Route
          path="/ComplexGuide/detailintro"
          element={<ComplexGuide2 />}
        />
        <Route
          path="/ComplexGuide/community"
          element={<ComplexGuide3 />}
        />

        {/* 타입안내 */}
        {/* 59㎡A */}
        <Route
          path="/FloorPlan/59A"
          element={<FloorPlan1 />}
        />

        {/* 59㎡B */}
        <Route
          path="/FloorPlan/59B"
          element={<FloorPlan2 />}
        />

        {/* 75㎡A - 기존 라우트 주소 유지 */}
        <Route
          path="/FloorPlan/84A"
          element={<FloorPlan3 />}
        />

        {/* 75㎡B - 기존 라우트 주소 유지 */}
        <Route
          path="/FloorPlan/84B"
          element={<FloorPlan4 />}
        />

        {/* 84㎡A - 기존 라우트 주소 유지 */}
        <Route
          path="/FloorPlan/114A"
          element={<FloorPlan5 />}
        />

        {/* 84㎡B - 기존 라우트 주소 유지 */}
        <Route
          path="/FloorPlan/114B"
          element={<FloorPlan6 />}
        />

        {/* 112㎡ - 신규 페이지 */}
        <Route
          path="/FloorPlan/120A"
          element={<FloorPlan7 />}
        />

        {/* 세대안내 영상 */}
        <Route
          path="/FloorPlan/videos"
          element={<FloorPlanVideos />}
        />

        {/* E-모델하우스 */}
        <Route
          path="/FloorPlan/Emodel"
          element={<Emodel />}
        />

        {/* 인테리어 */}
        <Route
          path="/Interior/59A"
          element={<Interior1 />}
        />
        <Route
          path="/Interior/84A"
          element={<Interior2 />}
        />
        <Route
          path="/Interior/84B"
          element={<Interior3 />}
        />

        {/* 분양안내 */}
        <Route
          path="/SalesInfo/guide"
          element={<SalesInfoGuide />}
        />
        <Route
          path="/SalesInfo/SubscriptionGuide"
          element={<SubscriptionGuide />}
        />
        <Route
          path="/SalesInfo/announcement"
          element={<SalesInfoAnnouncement />}
        />
        <Route
          path="/SalesInfo/StampTax"
          element={<SalesInfoStampTax />}
        />

        {/* 홍보센터 */}
        <Route
          path="/Promotion/Press"
          element={<Press />}
        />
        <Route
          path="/Promotion/Press/Admin"
          element={<PressWrite />}
        />
        <Route
          path="/Promotion/PressWrite"
          element={<PressWrite />}
        />
        <Route
          path="/Promotion/Press/:id"
          element={<PressDetail />}
        />
        <Route
          path="/Promotion/Customer"
          element={<Customer />}
        />

        {/* 기존 외부 URL 호환용 라우트 */}
        <Route
          path="/:site/press"
          element={<Press />}
        />
        <Route
          path="/:site/press/admin"
          element={<PressWrite />}
        />
        <Route
          path="/:site/press/:id"
          element={<PressDetail />}
        />
        <Route
          path="/:site/customer"
          element={<Customer />}
        />

        {/* Not Found */}
        <Route path="/*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;