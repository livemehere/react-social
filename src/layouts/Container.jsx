import React from 'react';
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import { Link } from 'react-router-dom';
import { logOut } from '../services/auth';

const Container = ({ children }) => {
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 'bold' }}>Konstagram</h1>
        <div>
          <Menu
            menuButton={
              <div style={{ width: '30px' }}>
                <img src="/images/avatar.webp" alt="avatar" style={{ width: '100%', borderRadius: '50%' }} />
              </div>
            }
          >
            <MenuItem>
              <Link to={`/info/${1}`}>내 정보</Link>
            </MenuItem>
            <MenuItem>
              <Link to={`?userid=${1}`}>내 게시글</Link>
            </MenuItem>
            <MenuItem onClick={() => logOut()}>로그아웃</MenuItem>
          </Menu>
        </div>
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default Container;
