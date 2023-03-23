import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SlidebarData } from "./SlidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "../../styles/Slidebar/HeaderSlideBar.scss";
import "../../assets/logo_ngang.jpg"

const Nav = styled.div`
  background: #6dde8b;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #8c918c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <div className="title">
            <div className="header-title">
              HỆ THỐNG QUẢN LÍ NHÂN SỰ NOVA SQUARE
            </div>
          </div>
        </Nav>

        <SidebarNav sidebar={sidebar}>
        
          <SidebarWrap>
            <NavIcon to="#">
              <div className="img-nav"></div>
            </NavIcon>
            {SlidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
            <AiIcons.AiOutlineClose onClick={showSidebar} />
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
