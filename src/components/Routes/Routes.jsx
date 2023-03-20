import React from 'react'
import { Routes, Route } from "react-router-dom";

import { DiseaseList, AddDisease, AddTreatment } from '../../pages'

import { MainContainer } from '../index'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/*" element={<MainContainer />} />
      <Route path="/diseaseList" element={<DiseaseList />} />
      <Route path="/addDisease" element={<AddDisease />} />
      <Route path='/addtreatment' element={<AddTreatment/> }/>
    </Routes>
  )
}
export default AppRoutes