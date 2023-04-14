import { Menu, ConfigProvider } from "antd";
import { FileOutlined, PieChartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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

const SideMenu = () => {
  const navigate = useNavigate();

  const handleOnClick = ({ key }) => {
    if (key === "home") {
      navigate("/");
    } else {
      navigate(`/${key}`);
    }
  };

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
        defaultSelectedKeys={["home"]}
        mode="inline"
        items={items}
        onClick={handleOnClick}
      />
    </ConfigProvider>
  );
};

export default SideMenu;
