import React, {ReactNode, useState} from 'react';
import * as S from "./App.styled"
import Logo from './icons/file-text.svg'
import {Link} from 'react-scroll'

let json:any;
let jsonFilename:string="";

let menu:ReactNode[] = [];


function download(){
    return `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(json)
    )}`
}
function fileName(){
    const d = new Date();
    return jsonFilename.slice(0,-5)+"(edit: "+d.toISOString()+").json";
}

function App() {
    const [fileLoaded, setFileLoaded] = useState(false);
    const [updated, update] = useState(0);

    async function handleUpload(event:any) {
        json = JSON.parse(await event.target.files[0].text());
        jsonFilename = await event.target.files[0].name;
        setFileLoaded(true);
    }

    const handleChange = (event:any) => {
        update(updated+1)
        json[event.currentTarget.name] = event.currentTarget.value
    }

    const generateFormEditor = () => {
        menu = [];
        let ret:ReactNode[] = []
        Object.keys(json).map(function(key, index) {
            if(key.charAt(0)! === '#' && key.charAt(1)! === '#'){
                menu.push(<Link to={key} smooth={true} duration={200}><S.MenuItem type={"H2"} >{key.substring(2)}</S.MenuItem></Link>)
                ret.push(
                    <S.JSONListItemWrapper>
                        <S.JSONListItemH2 id={key}>{key.substring(2)}</S.JSONListItemH2>
                    </S.JSONListItemWrapper>
                )
            }
            else if(key.charAt(0)! === '#'){
                menu.push(<Link to={key} smooth={true} duration={200}><S.MenuItem type={"H1"} >{key.substring(1)}</S.MenuItem></Link>)
                ret.push(
                    <S.JSONListItemWrapper>
                        <S.JSONListItemH1 id={key}>{key.substring(1)}</S.JSONListItemH1>
                    </S.JSONListItemWrapper>
                )
            }
        else
            {
                ret.push(
                    <S.JSONListItemWrapper>
                        <S.JSONListItem>
                            <S.JSONListItemTitle>{key}: </S.JSONListItemTitle>
                            <S.JSONListItemInput defaultValue={json[key]} rows={3} name={key} onChange={handleChange}/>
                        </S.JSONListItem>
                    </S.JSONListItemWrapper>

                );
            }

        });
        return ret

    }

  return (
    <S.Wrapper className="App">
      <S.Content>
          <S.Header>
              <S.IconWrapper>
                  <S.Icon>
                      <img src={Logo} alt={"logo"}/>
                  </S.Icon>
              </S.IconWrapper>
              <S.Title>JSON editor</S.Title>
          </S.Header>
      </S.Content>
        <S.Content>
            <S.FileWrapper loaded={fileLoaded}>
                <div id="upload-box">
                    <input type="file" onChange={handleUpload} />
                </div>
            </S.FileWrapper>
        </S.Content>
        <S.JSONWrapper>
            <S.JSONList>
                {fileLoaded? generateFormEditor() : ""}
            </S.JSONList>
        </S.JSONWrapper>
        <S.DownloadA fileLoaded={fileLoaded}
            type="button"
            href={download()}
            download={fileName()}
                     key={updated}
        >
            <S.DownloadButton>Download</S.DownloadButton>
        </S.DownloadA>
        {fileLoaded && <Menu list={menu}/>}
    </S.Wrapper>
  );
}

export default App;

type MenuProps = {
    list:ReactNode[]
}
const Menu = ({list}:MenuProps) => {
    const [open,setOpen] = useState(true)
    return(
        <S.Menu open={open}>
            <S.MenuHeader>
                <S.MenuTitle>Menu</S.MenuTitle>
                <S.MenuBurger open={open} onClick={() => {
    setOpen(!open)
}}/>
            </S.MenuHeader>
            {list.map(x => x)}
        </S.Menu>
    )
};
