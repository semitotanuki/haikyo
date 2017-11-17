(function(){

  var width = window.innerWidth,
      height = window.innerHeight;

  //scene

  var scene = new THREE.Scene();

  //mesh

  var geometry = new THREE.SphereGeometry( 5, 60, 40 );
    geometry.scale( - 1, 1, 1 );

  var material = new THREE.MeshBasicMaterial( {
       map: THREE.ImageUtils.loadTexture( 'PANO.jpg' )
  } );

  sphere = new THREE.Mesh( geometry, material );
  scene.add( sphere );

  //camera

  var camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
  camera.position.set(0,0,0.1);
  camera.lookAt(sphere.position);



  //render

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(width,height);
  renderer.setClearColor({color: 0x000000});
  document.getElementById('stage').appendChild(renderer.domElement);
  renderer.render(scene,camera);

  //control

  var controls = new THREE.OrbitControls(camera,renderer.domElement);

  function render(){
    requestAnimationFrame(render);
   
    //画面リサイズ対応
    window.addEventListener( 'resize', onWindowResize, false );
    renderer.render(scene,camera);
    controls.update();
  }
  render();


  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
  }


})();