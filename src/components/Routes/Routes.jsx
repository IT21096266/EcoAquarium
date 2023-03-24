import React from "react";
import { Routes, Route } from "react-router-dom";

import { DiseaseList, AddDisease, DiseaseUpdate, AddTreatment, Create, Upload, ViewPosts, } from '../../pages'

import { MainContainer } from "../index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainContainer />} />
      <Route path="/diseaseList" element={<DiseaseList />} />
      <Route path="/diseaseUpdate" element={<DiseaseUpdate />} />
      <Route path="/addDisease" element={<AddDisease />} />
      <Route path="/diseaseList/diseaseUpdate/:diseaseID" element={<DiseaseUpdate />} />
      <Route path='/addtreatment' element={<AddTreatment/> }/>
      <Route path="/create" element={<Create />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/viewposts" element={<ViewPosts />} />    
    
    </Routes>
  );
};
export default AppRoutes;
