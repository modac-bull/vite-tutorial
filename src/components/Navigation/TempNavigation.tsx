import React from "react";
import { useRef, useState, useEffect } from "react";

import { css, styled } from "twin.macro";

// import PAGE_MENU from "../../data/page.json"; // 페이지 메뉴
import PAGE_MENU from "@data/page.json"; // 페이지 메뉴
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";

interface Groups {
  id: string;
  title: string;
  menu: Menu[];
}

interface Menu {
  id: string;
  title: string;
  link: string;
}

export default function TempNavigation() {
  const menu = useRef();
  const [openStatus, setOpenStatus] = useState(false);
  const [menuList, setMenuList] = useState<Groups[]>([]);

  function menuClick() {
    openStatus ? setOpenStatus(false) : setOpenStatus(true);
    console.log(openStatus);
  }

  useEffect(() => {
    setMenuList(Object.values(PAGE_MENU));
  }, [PAGE_MENU]);

  console.log("메뉴리스트", menuList);
  return (
    <Container>
      <MenuBtn onClick={menuClick}>임시 메뉴</MenuBtn>
      {!isEmpty(menuList)
        ? menuList.map((menu, idx) => {
            console.log("menu", menu);
            return (
              <Menus key={idx}>
                <div>
                  <div tw="bg-yellow-500">{menu.title}</div>
                </div>
                {menu.menu &&
                  menu.menu.map((submenu, idx) => {
                    console.log(submenu);
                    return (
                      <div key={idx}>
                        <div tw="pl-[25px] bg-violet-300">
                          <Link to={submenu.link && submenu.link}>
                            {submenu.title}
                          </Link>
                        </div>
                      </div>
                    );
                  })}
              </Menus>
            );
          })
        : " 비어 있음"}
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  font-size: 14px;
  background-color: #f8f8f8;
  transition: left 0.2s;
  z-index: 999;
`;
const MenuBtn = styled.div`
  position: absolute;
  bottom: 0;
  left: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40px;
  height: 60px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  cursor: pointer;
`;
const Menus = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  ul {
    padding-left: 15px;
  }
`;
