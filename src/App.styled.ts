import styled from "styled-components"

export const Wrapper = styled.div`
  
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
`

export const Header = styled.div`
  margin-top: 60px;
  display: flex;
  place-content: center;
`

export const IconWrapper = styled.div`
  
`

export const Icon = styled.div`
  
`

export const Title = styled.div`
  font-family: Poppins, sans-serif;
  margin: auto 0;
  font-size: 32px;
`

export const FileWrapper = styled.div<{loaded:boolean}>`
        margin-top: 16px;
  display: ${props => props.loaded? "none":"flex"};
  justify-content: center;
  
`
export const JSONWrapper = styled.div`
  margin-top: 60px;
`

export const JSONList = styled.div`

`

export const JSONListItemWrapper = styled.div`

  &:nth-child(odd){
    background-color: #fdfdfd;
  }
`

export const JSONListItem = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  min-height: 42px;
  justify-content: space-between;
  
`

export const JSONListItemTitle = styled.div`
  margin: auto 0;
  font-family: Poppins, sans-serif;
  max-width: 270px;
`

export const JSONListItemInput = styled.textarea`
        padding-left: 16px;
  min-height: 24px;
  width: 50%;
  margin: auto 0;
  border-radius: 8px;
  border: 2px solid rgba(255,100,100,0.3);
  &:focus{
    outline: none;
    border: 2px solid rgba(255,100,100,1);
  }
`

export const JSONListItemH1 = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 16px;
`

export const JSONListItemH2 = styled.div`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 8px;
  
`

export const DownloadA = styled.a<{fileLoaded:boolean}>`
  margin: 0 auto;
  margin-bottom: 120px;
  margin-top: 60px;
  width: 120px;
  height: 50px;
  display: ${props => props.fileLoaded? "block":"none"};
`

export const DownloadButton = styled.button`
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
`


