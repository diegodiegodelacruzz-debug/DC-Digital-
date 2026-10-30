import * as THREE from 'three'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js'

export async function initLogo3D(selector: string) {
  const host = document.querySelector<HTMLElement>(selector)
  if (!host) return

  const scene = new THREE.Scene()

  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)
  camera.position.set(0, 0, 8.5)

  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
  })

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.25

  host.replaceChildren(renderer.domElement)
  renderer.domElement.style.width = '100%'
  renderer.domElement.style.height = '100%'
  renderer.domElement.style.display = 'block'
  renderer.domElement.style.touchAction = 'none'

  scene.add(new THREE.AmbientLight(0xffffff, 1.5))

  const blueLight = new THREE.PointLight(0x168fff, 100)
  blueLight.position.set(-4, 4, 5)
  scene.add(blueLight)

  const greenLight = new THREE.PointLight(0x00ff91, 75)
  greenLight.position.set(4, -2, 3)
  scene.add(greenLight)

  const whiteLight = new THREE.DirectionalLight(0xffffff, 3)
  whiteLight.position.set(2, 5, 8)
  scene.add(whiteLight)

  const object = new THREE.Group()
  scene.add(object)

  const plate = new THREE.Group()
  object.add(plate)

  function roundedShape(w: number, h: number, r: number) {
    const s = new THREE.Shape()
    const x = -w / 2
    const y = -h / 2

    s.moveTo(x + r, y)
    s.lineTo(x + w - r, y)
    s.quadraticCurveTo(x + w, y, x + w, y + r)
    s.lineTo(x + w, y + h - r)
    s.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
    s.lineTo(x + r, y + h)
    s.quadraticCurveTo(x, y + h, x, y + h - r)
    s.lineTo(x, y + r)
    s.quadraticCurveTo(x, y, x + r, y)
    return s
  }

  const bodyGeometry = new THREE.ExtrudeGeometry(
    roundedShape(4.1, 4.1, 0.3),
    {
      depth: 0.34,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.07,
      bevelSegments: 5,
      curveSegments: 12
    }
  )

  const body = new THREE.Mesh(
    bodyGeometry,
    [
      new THREE.MeshStandardMaterial({
        color: 0x172127,
        metalness: 0.88,
        roughness: 0.27
      }),
      new THREE.MeshStandardMaterial({
        color: 0x4a7476,
        metalness: 0.95,
        roughness: 0.2
      })
    ]
  )

  plate.add(body)

  const frontZ = 0.43

  const borderGeometry = new THREE.ShapeGeometry(
    roundedShape(3.92, 3.92, 0.26)
  )

  const border = new THREE.Mesh(
    borderGeometry,
    new THREE.MeshStandardMaterial({
      color: 0x23443f,
      metalness: 0.85,
      roughness: 0.3,
      side: THREE.DoubleSide
    })
  )

  border.position.z = frontZ
  plate.add(border)

  const loader = new FontLoader()
  const font = await loader.loadAsync('/fonts/dc-bold.typeface.json')

  const dcGeometry = new TextGeometry('DC', {
    font,
    size: 1.62,
    depth: 0.19,
    curveSegments: 16,
    bevelEnabled: true,
    bevelThickness: 0.045,
    bevelSize: 0.035,
    bevelSegments: 5
  })

  dcGeometry.computeBoundingBox()
  dcGeometry.center()

  const dc = new THREE.Mesh(
    dcGeometry,
    new THREE.MeshStandardMaterial({
      color: 0xf0f3f5,
      metalness: 0.72,
      roughness: 0.2
    })
  )

  dc.position.set(0, 0.25, frontZ + 0.035)
  plate.add(dc)

  const digitalGeometry = new TextGeometry('DIGITAL', {
    font,
    size: 0.34,
    depth: 0.10,
    curveSegments: 8,
    bevelEnabled: true,
    bevelThickness: 0.018,
    bevelSize: 0.012,
    bevelSegments: 3
  })

  digitalGeometry.computeBoundingBox()

  const digitalWidth =
    digitalGeometry.boundingBox!.max.x -
    digitalGeometry.boundingBox!.min.x

  digitalGeometry.translate(-digitalWidth / 2, 0, 0)

  const digital = new THREE.Mesh(
    digitalGeometry,
    new THREE.MeshStandardMaterial({
      color: 0xe7f0ed,
      metalness: 0.8,
      roughness: 0.23
    })
  )

  digital.position.set(0, -1.30, frontZ + 0.04)
  plate.add(digital)

  const circuitMaterial = new THREE.MeshStandardMaterial({
    color: 0x00dc85,
    emissive: 0x008c45,
    emissiveIntensity: 1.5,
    metalness: 0.65,
    roughness: 0.25
  })

  function circuit(points: THREE.Vector3[]) {
    const curve = new THREE.CatmullRomCurve3(points)

    const geometry = new THREE.TubeGeometry(
      curve,
      36,
      0.027,
      8,
      false
    )

    plate.add(new THREE.Mesh(geometry, circuitMaterial))

    const sphereGeometry = new THREE.SphereGeometry(0.075, 16, 12)

    for (const point of [points[0], points[points.length - 1]]) {
      const node = new THREE.Mesh(sphereGeometry, circuitMaterial)
      node.position.copy(point)
      plate.add(node)
    }
  }

  const z = frontZ + 0.055

  circuit([
    new THREE.Vector3(-1.72, 1.25, z),
    new THREE.Vector3(-1.2, 1.25, z),
    new THREE.Vector3(-0.95, 0.95, z),
    new THREE.Vector3(-0.65, 0.95, z)
  ])

  circuit([
    new THREE.Vector3(1.72, 1.25, z),
    new THREE.Vector3(1.25, 1.25, z),
    new THREE.Vector3(0.95, 0.95, z),
    new THREE.Vector3(0.65, 0.95, z)
  ])

  circuit([
    new THREE.Vector3(-1.72, -0.45, z),
    new THREE.Vector3(-1.25, -0.45, z),
    new THREE.Vector3(-1.0, -0.75, z),
    new THREE.Vector3(-0.65, -0.75, z)
  ])

  circuit([
    new THREE.Vector3(1.72, -0.45, z),
    new THREE.Vector3(1.25, -0.45, z),
    new THREE.Vector3(1.0, -0.75, z),
    new THREE.Vector3(0.65, -0.75, z)
  ])

  // Detalles metálicos en la parte posterior
  const backDetails = new THREE.Group()
  backDetails.position.z = -0.015
  backDetails.rotation.y = Math.PI
  plate.add(backDetails)

  const backMaterial = new THREE.MeshStandardMaterial({
    color: 0x247d61,
    metalness: 0.85,
    roughness: 0.3
  })

  for (let i = -2; i <= 2; i++) {
    const line = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.025, 0.025),
      backMaterial
    )
    line.position.set(0, i * 0.35, 0)
    backDetails.add(line)
  }

  // Controles táctiles
  let dragging = false
  let lastX = 0
  let lastY = 0
  let velocityX = 0
  let velocityY = 0

  renderer.domElement.addEventListener('pointerdown', event => {
    dragging = true
    lastX = event.clientX
    lastY = event.clientY
    renderer.domElement.setPointerCapture(event.pointerId)
  })

  renderer.domElement.addEventListener('pointermove', event => {
    if (!dragging) return

    velocityY = (event.clientX - lastX) * 0.009
    velocityX = (event.clientY - lastY) * 0.009

    object.rotation.y += velocityY
    object.rotation.x += velocityX

    lastX = event.clientX
    lastY = event.clientY
  })

  renderer.domElement.addEventListener('pointerup', () => {
    dragging = false
  })

  renderer.domElement.addEventListener('pointercancel', () => {
    dragging = false
  })

  const resize = () => {
    const width = host.clientWidth
    const height = host.clientHeight
    if (!width || !height) return

    camera.aspect = width / height
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }

  const observer = new ResizeObserver(resize)
  observer.observe(host)
  resize()

  let previous = 0

  renderer.setAnimationLoop(time => {
    const delta = Math.min((time - previous) / 1000, 0.05)
    previous = time

    if (!dragging) {
      object.rotation.y += velocityY
      object.rotation.x += velocityX

      velocityY *= 0.94
      velocityX *= 0.94

      object.rotation.y += delta * 0.10
    }

    object.rotation.x = THREE.MathUtils.clamp(
      object.rotation.x,
      -1.35,
      1.35
    )

    renderer.render(scene, camera)
  })

  return () => {
    observer.disconnect()
    renderer.setAnimationLoop(null)
    renderer.dispose()
    scene.traverse(child => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material]
        materials.forEach(material => material.dispose())
      }
    })
  }
}
