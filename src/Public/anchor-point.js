//锚点
import React from 'react';
import 'antd/dist/antd.css';
import { BackTop } from 'antd';

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
  visibilityHeight:'10px'
};

export default function anchorpoint(params) {
    
    return (
        <>
          <BackTop>
                <div style={style}>回顶</div>
           </BackTop>
        </>
    );

}

