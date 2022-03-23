/* eslint-disable react/no-array-index-key */
import { AboutValuesContainer, AboutValuesTitle, ItemContainer, ListContainer } from "./styles";

const AboutValues = () => {
  return (
    <AboutValuesContainer>
      <AboutValuesTitle>
        우리의 가치
        <p>어쩌고 저쩌고</p>
      </AboutValuesTitle>

      <ListContainer>
        {CARD_LIST.map((item, idx) => (
          <ItemContainer key={idx}>
            <img src={item.src} alt="이미지" />
            <p>{item.title}</p>
            <br />
            <span>{item.text}</span>
          </ItemContainer>
        ))}
      </ListContainer>
    </AboutValuesContainer>
  );
};

export default AboutValues;

const CARD_LIST = [
  {
    src: "/asset/Main/planet01.png",
    title: "value1",
    text: "asdf",
  },
  {
    src: "/asset/Main/planet01.png",
    title: "value2",
    text: "asfdsfdafdsfadadfsfadsfadsafd",
  },
  {
    src: "/asset/Main/planet01.png",
    title: "value3",
    text: "asdfsfadasfdasfdsfdsafd",
  },
  {
    src: "/asset/Main/planet01.png",
    title: "value4",
    text: "asfdafdsfasdsafdfsadfsadsfadsaas",
  },
];
