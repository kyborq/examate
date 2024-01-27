import { Outlet } from "react-router-dom";
import { Layout } from "../layouts";

export const Root = () => {
  return (
    <Layout centered>
      <Outlet />
    </Layout>
  );
};
