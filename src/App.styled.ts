import styled from "styled-components";
import { type } from "os";

export const Wrapper = styled.div``;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`;

export const Header = styled.div`
  margin-top: 60px;
  display: flex;
  place-content: center;
`;

export const IconWrapper = styled.div``;

export const Icon = styled.div``;

export const Title = styled.div`
  font-family: Poppins, sans-serif;
  margin: auto 0;
  font-size: 32px;
`;

export const FileWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: center;
`;
export const JSONWrapper = styled.div`
  margin-top: 60px;
`;

export const JSONList = styled.div``;

export const JSONListItemWrapper = styled.div`
  &:nth-child(odd) {
    background-color: #fdfdfd;
  }
`;

export const JSONListItem = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  min-height: 42px;
  justify-content: space-between;
`;

export const JSONListItemTitle = styled.div`
  margin: auto 0;
  font-family: Poppins, sans-serif;
  max-width: 270px;
`;

export const JSONListItemInput = styled.textarea`
  resize: vertical;
  padding-left: 16px;
  min-height: 24px;
  width: 50%;
  margin: auto 0;
  border-radius: 8px;
  border: 2px solid rgba(255, 100, 100, 0.3);

  &:focus {
    outline: none;
    border: 2px solid rgba(255, 100, 100, 1);
  }
`;

export const JSONListItemH1 = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 16px;
`;

export const JSONListItemH2 = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 8px;
`;

export const DownloadA = styled.a`
  margin: 0 auto;
  margin-bottom: 120px;
  margin-top: 60px;
  width: 120px;
  height: 50px;
  display: block;
`;

export const DownloadButton = styled.button`
  cursor: pointer;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  color: white;
  font-family: Poppins, sans-serif;
  height: 100%;
  width: 100%;

  background: rgba(255, 100, 100, 1);
  box-shadow: 0 6px 5px -3px rgba(14, 14, 44, 0.1),
    inset 0px -1px 0px rgba(14, 14, 44, 0.2);
  border-radius: 50px;
  padding: 16px;

  &:hover {
    background: rgb(236, 91, 91);
  }

  &:active {
    background: rgb(210, 80, 80);
  }
`;

export const Menu = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 10;
  width: fit-content;
  height: ${(props) => (props.open ? "auto" : "24px")};
  transition: height 100ms linear;
  top: 0;
  background-color: #fff;
  padding: 16px;
  margin: 16px;
  border-radius: 16px;
  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const MenuTitle = styled.div``;
export const MenuBurger = styled.div<{ open: boolean }>`
  cursor: pointer;
  box-sizing: border-box;
  margin-top: 4px;
  height: 24px;
  width: 24px;
  background-color: ${(props) => (props.open ? "none" : "rgba(255,100,100)")};
  position: relative;
  border-bottom: 22px solid white;

  &:before {
    border-radius: 3px;
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    top: 7px;
    background-color: rgba(255, 100, 100);
    transform: ${(props) => (props.open ? "rotate(45deg)" : "0")};
    transition: transform 100ms;
  }

  &:after {
    border-radius: 3px;
    position: absolute;
    content: "";
    height: 2px;
    width: 100%;
    top: ${(props) => (props.open ? "7px" : "14px")};
    background-color: rgba(255, 100, 100);
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "0")};
    transition: transform 100ms;
  }
`;

export const MenuItem = styled.div<{ type: string }>`
  margin-bottom: 2px;
  margin-left: ${(props) => (props.type === "H1" ? "0" : "40px")};
  user-select: none;
  font-weight: 500;
  line-height: 24px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
