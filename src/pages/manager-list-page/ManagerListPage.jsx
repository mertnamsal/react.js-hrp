import React from "react";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import "./managerListPage.scss";
import TableAdmin from "../../components/table-admin/TableManager";

const ManagerListPage = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="admin-right">
        <Header />
        
      </div> 
   
    </div>
  )
}
export default ManagerListPage
