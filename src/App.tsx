import React, { useState } from "react";
import * as S from "./App.styled";
import Logo from "./icons/file-text.svg";
import { Link } from "react-scroll";
import Section from "./Section";

export let json: any;

export function keyToLinkString(key: string) {
  return "menuitem" + key.replaceAll("-", "");
}

function App() {
  const [update, setUpdate] = useState(0);
  const [fileName, setFileName] = useState("");

  function createFileName() {
    const d = new Date();
    return fileName.slice(0, -5) + "(edit: " + d.toISOString() + ").json";
  }

  async function handleUpload(event: any) {
    json = JSON.parse(await event.target.files[0].text());
    const name = await event.target.files[0].name;
    setTimeout(async () => {
      setFileName(name);
    }, 100);
    console.log({ json });
  }

  function download() {
    return `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(json)
    )}`;
  }

  function handleSectionOnChange(
    sectionKey: string,
    propertyKey: string,
    value: string
  ) {
    json[sectionKey][propertyKey] = value;
    setUpdate(update + 1);
  }

  return (
    <S.Wrapper className="App">
      <S.Content>
        <S.Header>
          <S.IconWrapper>
            <S.Icon>
              <img src={Logo} alt={"logo"} />
            </S.Icon>
          </S.IconWrapper>
          <S.Title>JSON editor</S.Title>
        </S.Header>
      </S.Content>
      {!fileName && (
        <S.Content>
          <S.FileWrapper>
            <div id="upload-box">
              <input type="file" onChange={handleUpload} />
            </div>
          </S.FileWrapper>
        </S.Content>
      )}
      {!!fileName && (
        <>
          <S.JSONWrapper>
            <S.JSONList>
              {Object.keys(json).map((s) => (
                <Section sectionKey={s} onChange={handleSectionOnChange} />
              ))}
            </S.JSONList>
          </S.JSONWrapper>
          <S.DownloadA
            type="button"
            href={download()}
            download={createFileName()}
          >
            <S.DownloadButton>Download</S.DownloadButton>
          </S.DownloadA>
          <Menu keys={Object.keys(json)} />
        </>
      )}
      {update}
    </S.Wrapper>
  );
}

export default App;

type MenuProps = {
  keys: string[];
};
const Menu = ({ keys }: MenuProps) => {
  const [open, setOpen] = useState(true);
  return (
    <S.Menu open={open}>
      <S.MenuHeader>
        <S.MenuTitle>Menu</S.MenuTitle>
        <S.MenuBurger
          open={open}
          onClick={() => {
            setOpen(!open);
          }}
        />
      </S.MenuHeader>
      {keys.map((key) => (
        <Link to={keyToLinkString(key)} smooth={true} duration={200}>
          <S.MenuItem type={"H1"}>{key}</S.MenuItem>
        </Link>
      ))}
    </S.Menu>
  );
};
