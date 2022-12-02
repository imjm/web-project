import React from 'react';
import { Menu } from 'antd';
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.SubMenu title={<span style={{ fontWeight: 'bold' }}>게시판</span>}>
    <Menu.Item key="board:1" style={{ fontWeight: 'bold' }}><a href='/posts'>전체 게시판</a></Menu.Item>
      <MenuItemGroup title="육해공">
        <Menu.Item key="board:2" style={{ fontWeight: 'bold' }}>육군 게시판</Menu.Item>
        <Menu.Item key="board:3" style={{ fontWeight: 'bold' }}>공군 게시판</Menu.Item>
        <Menu.Item key="board:4" style={{ fontWeight: 'bold' }}>해군 게시판</Menu.Item>
      </MenuItemGroup>
    </Menu.SubMenu>
  </Menu>
  )
}

export default LeftMenu