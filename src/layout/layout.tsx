import { Layout } from "antd";
import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default AppLayout;
