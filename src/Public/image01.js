import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';

const { Meta } = Card;

export default function image01(props) {
    const [data,setData]=useState('张哥');
    return (
          <>
                <Card
                 hoverable
                 style={{ margin:'0 auto',width: 240,height:'95%' }}
                 cover={<img data-description={props.description} data-moviedirector={props.moviedirector} title={props.title} style={{height:'300px'}} data-index={data} alt={props.alt === undefined ? '网络卡顿或资源路径失效' : 'props.alt'} src={props.url} />}
                >
                        <Meta  title={props.title} description={props.description} />
                </Card>
          </>

    );
}
