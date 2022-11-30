import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.SubMenu title={<span>게시판</span>}>
    <Menu.Item key="board:1">전체 게시판</Menu.Item>
      <MenuItemGroup title="육해공">
        <Menu.Item key="board:2">육군 게시판</Menu.Item>
        <Menu.Item key="board:3">공군 게시판</Menu.Item>
        <Menu.Item key="board:4">해군 게시판</Menu.Item>
      </MenuItemGroup>
    </Menu.SubMenu>
  </Menu>
  )
}

export default LeftMenu