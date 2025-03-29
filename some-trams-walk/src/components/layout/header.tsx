import React from "react";
import CurrentUser from "./current_user";
import { Space , Layout} from "antd";

const Header = () => {

  const headerStyles: React.CSSProperties = {
    background : "#fff",
    display: "flex",
    justifyContent: "flex-end",
    alignItems : "center",
    padding : "0 24px",
    position: "sticky",
    top: 0,
    zIndex: 999,

  }




  return (
    <Layout.Header style={headerStyles}>
      <Space align="center" size="middle">
        <div>
          <CurrentUser />
        </div>
      </Space>
    </Layout.Header>
    
  );
};

export default Header;
