import * as THREE from "three";
// 导入轨道控制器，对物体进行操作
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

export const init = () => {
  // 第一步新建一个场景
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, // 视角 越大，看到的东西越多
    window.innerWidth / window.innerHeight, // 宽高比
    0.1, // 近平面
    1000 // 远平面
  );
  camera.position.z = 5;
  camera.position.y = 1;
  camera.position.x = 1;

  // 添加世界坐标辅助器
  const axesHelper = new THREE.AxesHelper(5);
  scene?.add(axesHelper);

  const renderer = new THREE.WebGLRenderer();
  // 设置画布的大小
  renderer.setSize(window.innerWidth, window.innerHeight);
  //这里 其实就是canvas 画布  renderer.domElement
  document.body.appendChild(renderer.domElement);

  // 添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  // 设置带阻尼的惯性
  controls.enableDamping = true;

  const geometry = new THREE.BoxGeometry(); //创建一个立方体几何对象Geometry
  const material = new THREE.MeshBasicMaterial({ color: 0xff3200 }); //材质对象Material
  const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  scene.add(mesh); //网格模型添加到场景中

  mesh.position.set(2,0,0);
  mesh.scale.set(0.2,0.2,0.2);

  const render = () => {
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  };

  const animate = () => {
    controls.update();
    requestAnimationFrame(animate.bind(this));
    // mesh.rotation.x += 0.01;
    // mesh.rotation.y += 0.01;
    render();
  };

  animate();
};
