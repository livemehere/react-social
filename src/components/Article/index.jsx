import React, { useState, useCallback } from 'react';
import { Skeleton, Divider } from 'antd';
import styled from 'styled-components';
import { EllipsisOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Article = () => {
  const [loading] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [isOwner] = useState(true);

  const toggleMenu = useCallback(
    e => {
      e.stopPropagation();
      setShowMenu(prev => !prev);
    },
    [showMenu]
  );

  const handleClickArticleWrapper = useCallback(() => {
    setShowMenu(false);
  }, []);
  return (
    <ArticleWrapper onClick={handleClickArticleWrapper}>
      <Header>
        <div className="profile">
          <img src="/images/avatar.webp" alt="profile" />
          <h5>
            <Link to={`/profile/${'userID'}`}>username</Link>
          </h5>
        </div>
        <MenuWrapper isOwner={isOwner}>
          <EllipsisOutlined style={{ fontSize: '25px', cursor: 'pointer' }} onClick={toggleMenu} />
          {showMenu && (
            <div className="list">
              <MenuItem>수정</MenuItem>
              <Divider style={{ margin: 0 }} />
              {isOwner && <MenuItem style={{ color: 'red' }}>삭제</MenuItem>}
            </div>
          )}
        </MenuWrapper>
      </Header>
      <div>
        <div>slides images</div>
        <div>INFO</div>
      </div>
      <Skeleton loading={loading} avatar active />
    </ArticleWrapper>
  );
};

export default Article;

const ArticleWrapper = styled.div`
  width: 100%;
  height: 300px;
  margin-bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  & .profile {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 5px;
    }

    h5 {
      font-size: 1.1em;
      margin: 0;
    }
  }
`;

const MenuWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & .list {
    position: absolute;
    background-color: #fff;
    bottom: ${({ isOwner }) => (isOwner ? '-60px' : '-30px')};
    right: 0;
    width: 100px;
  }
`;

const MenuItem = styled.div`
  text-align: center;
  padding: 5px 0;
  &:hover {
    background-color: #d2d2d2;
    cursor: pointer;
  }
`;
