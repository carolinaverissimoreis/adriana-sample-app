import { Outlet } from "react-router-dom";
import { Layout } from "antd";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Breadcrumbs } from "./Breadcrumbs";
import { ContentContainer } from "./ContentContainer";

export const DashboardLayoutUI = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />

      <Layout>
        <Header />

        <Layout.Content style={{ margin: "0 16px" }}>
          <Breadcrumbs />

          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};
