import { Divider, Layout, Menu } from 'antd';

import { useDashbaordLayoutContext } from '../DashboardLayoutContext';
import { ProductCategorySwitcher } from './product-category-switcher';
import { useMenuItems } from './useMenuItems';

// -----------------------------------------------------------------

export const Sidebar = () => {
  const { collapsed, updateContextValue: updateDashboardLayout } =
    useDashbaordLayoutContext();

  const { items } = useMenuItems();

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed) => updateDashboardLayout({ collapsed })}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        {!collapsed && <ProductCategorySwitcher />}
      </div>

      <Divider style={{ borderColor: '#ffffff40', marginTop: 0 }} />

      <Menu
        theme="dark"
        defaultSelectedKeys={['1']}
        mode="inline"
        items={items}
      />
    </Layout.Sider>
  );
};
