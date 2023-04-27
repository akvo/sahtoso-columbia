import { useState } from "react";
import { Layout } from "antd";
import { Link, Route, Routes } from "react-router-dom";
import { PDF_URL, POWER_BI_URL } from "./config";
import { Logo, ResponsiveInlineFrame, SideMenu } from "./components";
import './App.css';

const { Sider } = Layout;

const RouteList = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<ResponsiveInlineFrame src={POWER_BI_URL} />}
      />
      <Route path="/docs" element={<ResponsiveInlineFrame src={PDF_URL} />} />
    </Routes>
  );
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Link to="/">
          <Logo />
        </Link>
        <SideMenu />
      </Sider>
      <Layout className="site-layout">
        <RouteList />
      </Layout>
    </Layout>
  );
};
export default App;
