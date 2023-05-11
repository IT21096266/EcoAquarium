import React from 'react'
import { Routes, Route } from "react-router-dom";
import { DiseaseList, AddDisease, DiseaseUpdate, AddTreatment, Create, Upload, ViewPosts, Model} from '../pages/index'
import { MainContainer } from '../components/index'

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
      <Route path="/model" element={<Model />} /> 
    
    </Routes>
  )
}
export default AppRoutes