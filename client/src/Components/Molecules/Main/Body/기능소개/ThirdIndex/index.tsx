import React from "react";

const ThirdIndex = () => {
  return (
    <div className="thirdIndex">
      <img src="/asset/Main/index03.png" alt="목차3" width="100%" height="500px" />
      <div className="ThirdIndex_Text_Container">
        <div className="title">3. My Page</div>
        <p>학교 생활에 필요한 정보들을 한데 모아 관리할 수 있어요:</p>
        <p>시간표, 공지사항 등 개인 일정 뿐만 아니라</p>
        <p>메타버스 속 자신의 캐릭터와 친구들을 관리해보세요!</p>
      </div>
    </div>
  );
};

export default React.memo(ThirdIndex);
