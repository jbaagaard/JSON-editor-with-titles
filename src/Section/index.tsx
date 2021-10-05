import * as S from "./Section.styled";
import { json, keyToLinkString } from "../App";
import { Link } from "react-scroll";
import React from "react";

interface SectionProps {
  sectionKey: string;
  onChange: (sectionKey: string, propertyKey: string, value: string) => void;
}

const Section = ({ sectionKey, onChange }: SectionProps) => {
  console.log({ sectionKey: sectionKey });
  function handleInputChange(value: any, key: string) {
    onChange(sectionKey, key, value);
  }

  return (
    <S.Wrapper>
      <Link to={keyToLinkString(sectionKey)} smooth={true} duration={200}>
        <S.Title name={keyToLinkString(sectionKey)}>{sectionKey}</S.Title>
      </Link>
      {Object.keys(json[sectionKey]).map((propKey) => (
        <S.JSONListItemWrapper>
          <S.JSONListItem>
            <S.JSONListItemTitle>{propKey}: </S.JSONListItemTitle>
            <S.JSONListItemInput
              defaultValue={json[sectionKey][propKey]}
              rows={3}
              onChange={(value) => {
                handleInputChange(value.currentTarget.value, propKey);
              }}
            />
          </S.JSONListItem>
        </S.JSONListItemWrapper>
      ))}
    </S.Wrapper>
  );
};

export default Section;
