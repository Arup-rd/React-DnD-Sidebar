import React from "react";
import { Collapse, Menu, Dropdown } from "antd";
import { CaretRightOutlined, BarsOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const { Panel } = Collapse;

  const genExtra = () => (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
      <BarsOutlined
        onClick={(event) => {
          event.stopPropagation();
        }}
      />
    </Dropdown>
  );

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );

  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <Collapse
      bordered={false}
      expandIcon={({ isActive }) => (
        <CaretRightOutlined rotate={isActive ? 90 : 0} />
      )}
      className="site-collapse-custom-collapse"
    >
      <Panel
        header="This is panel header 1"
        key="1"
        className="site-collapse-custom-panel"
        extra={genExtra()}
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header="This is panel header 2"
        key="2"
        className="site-collapse-custom-panel"
        extra={genExtra()}
      >
        <p>{text}</p>
      </Panel>
      <Panel
        header="This is panel header 3"
        key="3"
        className="site-collapse-custom-panel"
        extra={genExtra()}
      >
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default Sidebar;
