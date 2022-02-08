import React, { useState, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const MapPage = () => {
  const [dis, setDis] = useState(2);

  const scene = new THREE.Scene();

  // 모델 불러오기
  const loader = new GLTFLoader();
  // 모델 함수
  loader3D(loader, scene, "./models/chair.glb");
  loader3D(loader, scene, "./models/counter.glb");
  loader3D(loader, scene, "./models/sofa.glb");
  loader3D(loader, scene, "./models/table.glb");
  // loader3D(loader,scene,'./models/char.glb')

  // 조명
  const light = new THREE.DirectionalLight(0xffffff, 1);
  // 조명 위치
  light.position.set(2, 2, 5);
  // 조명 추가
  scene.add(light);

  const size = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  const camera = new THREE.PerspectiveCamera(
    80,
    size.width / size.height,
    0.1,
    100
  );
  // 카메라 바라보는 시선 위치? (좌,우 : 커질수록 오른쪽으로) , (위,아래 : 커질수록 올라감) , (거리 : 커질수록 멀어짐)
  scene.add(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.gammmaOutput = true;

  document.body.innerHTML = "";
  document.body.appendChild(renderer.domElement);

  let diss = 5;
  function animate() {
    diss -= 0.01;
    camera.position.set(0, 0.5, diss);
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }

  animate();

  // 내 의도는 키 이벤트 발생 => dis 수정 => camera위치 이동
  // useLayoutEffect(() => {
  //   camera.position.set(0,0.5,dis)
  //   scene.add(camera)
  //   renderer.render(scene, camera)
  // },[dis])

  useEffect(() => {
    window.addEventListener("keydown", move);
  }, [dis]);

  useEffect(() => {
    document.body.innerHTML = "";
    document.body.appendChild(renderer.domElement);
  }, []);

  function move(e) {
    if (e.key === "ArrowUp") {
      setDis((prev) => prev + 0.1);
    }
    if (e.key === "ArrowDown") {
      setDis((prev) => prev - 0.1);
    }
  }

  return null;
};

export default MapPage;

function loader3D(loader, scene, url) {
  // load가 비동기라서 requestAnimationFrame이 들어감
  // 동기적으로 할 수 있으면 requestAnimationFrame안해도 될거같은데
  loader.load(
    url,
    function (glb) {
      const root = glb.scene;
      root.scale.set(0.12, 0.12, 0.12);
      scene.add(root);

      if (glb.animations !== []) {
        let mixer = new THREE.AnimationMixer(root);
        console.log(glb.animations);
        console.log(glb);
        const action = mixer.clipAction(glb.animations[0]);
        action.play();
      }
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.log(error);
    }
  );
}
