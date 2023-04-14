import { useState } from "react";
import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import ResponsiveEmbed from "react-responsive-embed";
import { PDF_URL, POWER_BI_URL } from "./config";
import { Logo, SideMenu } from "./components";

const { Sider } = Layout;

const RouteList = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ResponsiveEmbed src={POWER_BI_URL} />} />
      <Route path="/docs" element={<ResponsiveEmbed src={PDF_URL} />} />
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
        <Logo />
        <SideMenu />
      </Sider>
      <Layout className="site-layout">
        <RouteList />
      </Layout>
    </Layout>
  );
};
export default App;
