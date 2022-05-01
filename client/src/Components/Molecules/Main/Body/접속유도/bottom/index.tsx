const HomeBottomInfo = () => {
  return (
    <div className="last">
      <img src="/asset/Main/08.png" alt="하단 그라데이션" width="100%" height="600px" />
      <div className="last_Text_Container">
        <div className="title colorFont">여러분이 상상하는 메타버스 속 아주대학교는 어떤 모습인가요?</div>
        <div className="text">이곳 저곳을 돌아다니며 새로운 친구도 사귀고 동아리실에 모여 팀 회의도 진행해보세요</div>
        <div className="text">
          <span className="colorFont">MET:AJOU</span>는 현실의 경험 그 이상을 제공합니다!
        </div>
        <div className="text container">
          지금 바로 접속하세요 !<span>{/* <StartButton /> */}</span>
        </div>
      </div>
    </div>
  );
};

export default HomeBottomInfo;
