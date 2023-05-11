import React from "react";
import { Routes, Route } from "react-router-dom";
import { DiseaseList, AddDisease, DiseaseUpdate, AddTreatment, Create, Upload, ViewPosts,TreatmentList,TreatmentUpdate, TreatmentView, 
         Calculator, Model, Map } from '../pages/index'
import { MainContainer } from "../components/index";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainContainer />} />
      <Route path="/diseaseList" element={<DiseaseList />} />
      <Route path="/diseaseUpdate" element={<DiseaseUpdate />} />
      <Route path="/addDisease" element={<AddDisease />} />
      <Route path="/diseaseList/diseaseUpdate/:diseaseID" element={<DiseaseUpdate />} />
      <Route path='/addtreatment' element={<AddTreatment/> }/>
      <Route path="/treatmentupdate" element={<AddDisease />} />
      <Route path="/treatmentlist/treatmentupdate/:treatID" element={<TreatmentUpdate />} />
      <Route path="/create" element={<Create />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/model" element={<Model />} /> 
      <Route path="/viewposts" element={<ViewPosts />} />  
      <Route path="/treatmentlist" element={<TreatmentList/>}/>  
      <Route path="/map" element={<Map/>} />
      <Route path="/calculator" element={<Calculator/>}/>
      <Route path="/treatmentview" element={<TreatmentView/>}/> 
    </Routes>
  );
};
export default AppRoutes;
