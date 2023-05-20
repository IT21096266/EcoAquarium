import React from "react";
import { Routes, Route } from "react-router-dom";
import { DiseaseList, AddDisease, DiseaseUpdate, DiseasePDF, Model, DiseaseView, DiseaseDetails, AddTreatment, Create, Upload, ViewPosts,
  TreatmentList, TreatmentUpdate, TreatmentView, Calculator, Map, TreatmentPDF, UploadContent } from '../pages/index'
import { MainContainer } from "../components/index";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainContainer />} />
      <Route path="/diseaseList" element={<DiseaseList />} />
      <Route path="/addDisease" element={<AddDisease />} />
      <Route path="/diseaseUpdate" element={<DiseaseUpdate />} />
      <Route path="/diseaseList/diseaseUpdate/:diseaseID" element={<DiseaseUpdate />} />
      <Route path="/diseasePDF" element={<DiseasePDF />} />
      <Route path="/model" element={<Model />} />
      <Route path="/diseaseView" element={<DiseaseView />} />
      <Route path="/diseaseDetails" element={<DiseaseDetails />} />
      <Route path="/diseaseView/diseaseDetails/:diseaseID" element={<DiseaseDetails />} />
      <Route path="/create" element={<Create />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/viewposts" element={<ViewPosts />} />  
      <Route path="/calculator" element={<Calculator/>}/>
      {/* Treatment */}
      <Route path="/map" element={<Map/>} />
      <Route path="/treatmentlist" element={<TreatmentList/>}/>  
      <Route path='/addtreatment' element={<AddTreatment/> }/>
      <Route path="/treatmentupdate" element={<TreatmentUpdate />} />
      <Route path="/treatmentlist/treatmentupdate/:treatID" element={<TreatmentUpdate />} />
      <Route path="/treatmentview" element={<TreatmentView/>}/> 
      <Route path="/treatmentpdf" element={<TreatmentPDF/>}/> 
      <Route path="/uploadC" element={<UploadContent/>}/> 
    </Routes>
  );
};
export default AppRoutes;
