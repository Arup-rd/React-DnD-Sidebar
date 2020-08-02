import React, { useRef } from "react";
import { Draggable } from "react-beautiful-dnd";
import { MenuOutlined, MoreOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Collapse, List } from "antd";

const TaskCard = (props) => {
  const { Panel } = Collapse;
  const { title, child, id, index } = props;

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

  const panelIcon = () => (
    <Dropdown overlay={menu} placement="bottomCenter">
      <MoreOutlined />
    </Dropdown>
  );

  const MenuIcon = () => <MenuOutlined />;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Collapse
            expandIconPosition="left"
            bordered={false}
            expandIcon={() => <MenuOutlined />}
            style={{
              marginTop: "10px",
            }}
          >
            <Panel
              header={title}
              key="1"
              extra={panelIcon()}
              style={{ backgroundColor: "#dddd" }}
            >
              <List
                dataSource={child}
                renderItem={(item) => (
                  <List.Item
                    extra={panelIcon()}
                    style={{
                      backgroundColor: "#ffff",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <List.Item.Meta avatar={MenuIcon()} title={item.title} />
                  </List.Item>
                )}
              />
            </Panel>
          </Collapse>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

// {
//   child
//     ? child.map((child) => (
//       <Collapse
//         expandIconPosition="left"
//         bordered={false}
//         expandIcon={() => <MenuOutlined />}
//         style={{
//           marginTop: "10px",
//         }}
//       >
//         <Panel header={"d"} key="1" extra={panelIcon()} />
//       </Collapse>
//     ))
//     : null
// }
