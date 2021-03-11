import React, { useState } from 'react';
import Image from 'next/image';
import { Table, Modal, Checkbox, Button } from 'antd';
import './index.less';
const query = [
  {
    title: 'Left Outer Join',
    img: '/sql-join/left-outer-join.png',
    description: 'All from Table A, matching from Table B',
  },
  {
    title: 'Right Outer Join',
    img: '/sql-join/right-outer-join.png',
    description: 'All from Table B, matching from Table A',
  },
  {
    title: 'Inner Join',
    img: '/sql-join/inner-join.png',
    description: 'Only matching rows from both table',
  },
  {
    title: 'Full Outer Join',
    img: '/sql-join/full-outer-join.png',
    description: 'All rows from both table',
  },
  {
    title: 'Left Anti Join',
    img: '/sql-join/left-anti-join.png',
    description: 'Rows only in Table A (and not in Table B)',
  },
  {
    title: 'Right Anti Join',
    img: '/sql-join/right-anti-join.png',
    description: 'Rows only in Table B (and not in Table A)',
  },
  {
    title: 'Full Anti Join',
    img: '/sql-join/full-anti-join.png',
    description:
      'Rows only in Table A (and not in Table B) combined with Rows only in Table B (and not in Table A)',
  },
];

const table1 = [
  {
    id: '1',
    name: 'Quang',
    isJoined: false,
  },
  {
    id: '2',
    name: 'Quang',
    isJoined: true,
  },
  {
    id: '3',
    name: 'Quang',
    isJoined: true,
  },
  {
    id: '4',
    name: 'Quang',
    isJoined: true,
  },
  {
    id: '5',
    name: 'Quang',
    isJoined: true,
  },
];
const table2 = [
  {
    id: '1',
    email: 'nas@gmail.com',
    isJoined: true,
  },
  {
    id: '2',
    email: 'ntquang@gmail.com',
    isJoined: true,
  },
  {
    id: '3',
    email: 'ntquang@gmail.com',
    isJoined: true,
  },
  {
    id: '4',
    email: 'ntquang@gmail.com',
    isJoined: true,
  },
  {
    id: '5',
    email: 'ntquang@gmail.com',
    isJoined: false,
  },
];
const table3 = [
  {
    id: '2',
    name: 'Quang',
    email: 'ntquang@gmail.com',
  },
  {
    id: '3',
    name: 'Quang',
    email: 'ntquang@gmail.com',
  },
  {
    id: '4',
    name: 'Quang',
    email: 'ntquang@gmail.com',
  },
  {
    id: '5',
    name: 'Quang',
    email: 'ntquang@gmail.com',
  },
];
const columns1 = [
  {
    title: 'Customer ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Customer Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'IsJoined',
    dataIndex: 'isJoined',
    key: 'isJoined',
    render: isJoined => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        {isJoined ? <div>&#10003;</div> : ''}
      </div>
    ),
  },
];
const columns2 = [
  {
    title: 'Customer ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'IsJoined',
    dataIndex: 'isJoined',
    key: 'isJoined',
    render: isJoined => (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        {isJoined ? <div>&#10003;</div> : ''}
      </div>
    ),
  },
];
const columns3 = [
  {
    title: 'Customer ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Customer Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
];
const tableField = ['id', 'name', 'email', 'gender'];
const Join = () => {
  const [open, setOpen] = useState(false);
  const [join, setJoin] = useState(query[0]);

  const showField = () => {
    setOpen(true);
  };

  return (
    <div>
      <Modal visible={open} style={{ width: 'auto' }} onCancel={() => setOpen(false)}>
        Table fields:
        {tableField.map((item, index) => (
          <div style={{ display: 'flex', paddingLeft: 50 }}>
            <Checkbox />

            <div style={{ width: '50%', paddingLeft: 10 }}>{item}</div>
          </div>
        ))}
      </Modal>
      <div style={{ display: 'flex', justifyContent: 'space-around', height: 75, marginTop: 20 }}>
        {query.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: join === item ? 'rgb(242, 200, 17)' : 'rgb(179, 179, 179)',
              width: 180,
              borderRadius: 5,
              border: 'solid white',
              cursor: 'pointer',
            }}
            onClick={() => setJoin(item)}
          >
            <div>{item.title}</div>
            <Image src={item.img} width="65" height="40" />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <p>{join.description}</p>
      </div>
      <div style={{ width: '100%', height: 700, display: 'flex' }}>
        <div style={{ width: '30%', padding: 50 }}>
          <Button onClick={() => showField()}>Choose</Button>
          <Table pagination={false} className="table" columns={columns1} dataSource={table1} />
        </div>
        <div
          style={{ width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <Image src={join.img} width="260" height="160" />
          <div style={{ marginTop: 50 }}>
            <Table pagination={false} columns={columns3} dataSource={table3} />
          </div>
        </div>
        <div style={{ width: '30%', padding: 50 }}>
          <Table pagination={false} className="table" columns={columns2} dataSource={table2} />
        </div>
      </div>
    </div>
  );
};
export default Join;
