import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Divider, Layout, Menu } from "antd";

import { ProductCategorySwitcher } from "../../components/product-category-switcher";
import { useDashbaordLayoutContext } from "./DashboardLayoutContext";

// -----------------------------------------------------------------

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "1", <HomeOutlined />),
  getItem("Module 1", "sub1", <MailOutlined />, [
    getItem("Sub Module 1", "2"),
    getItem("Common Module 1", "3"),
  ]),
  getItem("Module 2", "sub2", <AppstoreOutlined />, [
    getItem("Sub Module 2", "4"),
  ]),
  getItem("Common Module 2", "5", <SettingOutlined />),
];

export const Sidebar = () => {
  const { collapsed, updateContextValue: updateDashboardLayout } =
    useDashbaordLayoutContext();

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed) => updateDashboardLayout({ collapsed })}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        <ProductCategorySwitcher />
      </div>

      <Divider style={{ borderColor: "#ffffff40", marginTop: 0 }} />

      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Layout.Sider>
  );
};
