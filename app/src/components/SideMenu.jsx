import { Menu, ConfigProvider } from "antd";
import { FileOutlined, PieChartOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Dashboard", "home", <PieChartOutlined />),
  getItem("Guideline", "docs", <FileOutlined />),
];

const pathKeys = {
  home: "/",
  docs: "/docs",
};

const SideMenu = () => {
  const { pathname } = useLocation();
  const px = Object.values(pathKeys).findIndex((p) => p === pathname);
  const path = Object.keys(pathKeys)[px] || "home";
  const [selectedKeys, setSelectedKeys] = useState([path]);
  const navigate = useNavigate();

  const handleOnClick = ({ key }) => {
    if (key === "home") {
      navigate("/");
    } else {
      navigate(`/${key}`);
    }
  };

  useEffect(() => {
    if (!selectedKeys?.includes(path)) {
      setSelectedKeys([path]);
    }
  }, [selectedKeys, path]);

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          colorPrimaryBg: "#10273B",
          colorBgBase: "#324556",
          colorPrimary: "#F5F1F1",
          colorTextBase: "#FFFFFF",
        },
      }}
    >
      <Menu
        selectedKeys={selectedKeys}
        mode="inline"
        items={items}
        onClick={handleOnClick}
        onSelect={({ selectedKeys: keys }) => setSelectedKeys(keys)}
      />
    </ConfigProvider>
  );
};

export default SideMenu;
