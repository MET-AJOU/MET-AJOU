import React from "react";

const FirstIndex = () => {
  return (
    <div className="firstIndex">
      <img src="/asset/Main/FirstInfo/index01.png" alt="목차1" width="100%" height="500px" />
      <div className="FirstIndex_Text_Container">
        <div className="title">1. Campus in Online</div>
        <p>온라인 가상공간의 아주대학교 캠퍼스를 만나보세요:</p>
        <p>아주대학교의 아름다운 교정과 건축물들</p>
        <p>그리고 귀여운 아주냥이 까지 만나볼 수 있습니다!</p>
        <p>몰랐던 학교에대한 정보도 알아갈 수 있어요!</p>
        <div className="FirstIndex_Img_Container">
          <img src="/asset/Main/FirstInfo/cat.png" alt="아주냥이" width="200px" height="200px" />
          <img src="/asset/Main/FirstInfo/catText.png" alt="아주냥이" width="200px" height="200px" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(FirstIndex);
