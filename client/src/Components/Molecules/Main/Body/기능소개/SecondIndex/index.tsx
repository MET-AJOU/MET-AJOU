import React from "react";

const SecondIndex = () => {
  return (
    <div className="secondIndex">
      <img src="/asset/Main/index02.png" alt="목차2" width="100%" height="500px" />
      <div className="SecondIndex_Text_Container">
        <div className="title">2. Experience/Event</div>
        <p>대면활동을 대체하는 것에서 더 나아가 메타버스에서만</p>
        <p>경험할 수 있는 이벤트를 체험해보세요:</p>
        <p>팀플, 동아리 활동과 같은 소규모 모임부터</p>
        <p> 캠퍼스 투어, 학과 행사같은 대규모 모임까지</p>
        <p>온라인 상에서 즐길 수 있어요!</p>
      </div>
    </div>
  );
};

export default React.memo(SecondIndex);
