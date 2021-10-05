import styled from "styled-components";

export const Wrapper = styled.div``;

export const Title = styled.div<{ name: string }>`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 16px;
`;

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
