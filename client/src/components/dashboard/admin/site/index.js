import React from 'react';
import DashboardLayout from 'hoc/dashboardLayout';
import SiteVars from './siteVars';

const ManagaSite = () => {
  return (
    <DashboardLayout title='Manage site'>
      <SiteVars />
    </DashboardLayout>
  );
};

export default ManagaSite;
