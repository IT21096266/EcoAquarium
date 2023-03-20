import React from 'react'
import { Routes, Route } from "react-router-dom";

import { DiseaseList } from '../../pages'

import { MainContainer } from '../index'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/*" element={<MainContainer />} />
      <Route path="/diseaseList" element={<DiseaseList />} />
    </Routes>
  )
}
export default AppRoutes