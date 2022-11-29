import React from 'react'
import Icon from '@ant-design/icons';

function Footer() {
  return (
    <div style={{
      height: '80px', display: 'flex',
      flexDirection: 'column', alignItems: 'center',
      justifyContent: 'center', fontSize:'1rem'
    }}>
       <p> Ant Design ©2018 Created by Ant UED  <Icon type="smile" /></p>
       
    </div>
  )
}

export default Footer