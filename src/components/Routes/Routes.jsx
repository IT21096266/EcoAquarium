import React from 'react'
import { Routes, Route } from "react-router-dom";

// import { AddressForm, AddressList, AddressUpdateForm, Home, LoginPage, SignUpPage, CreateContainer, SpearParts, OnlineItemList,
//           SupplierForm, SupplierList,SupplierUpdate, StockList, StockForm, StockUpdateForm, StockSearch, Mytickets, StockReport,
//           Adminticket, TicketForm, EmployeeForm, EmployeeList, EmployeeUpdate, EmployeeSalary } from '../../pages'

import { MainContainer } from '../index'

const AppRoutes = () => {

  return (
    <Routes>
      <Route path="/*" element={<MainContainer />} />
    </Routes>
  )
}
export default AppRoutes