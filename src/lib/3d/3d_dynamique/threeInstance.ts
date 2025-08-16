import * as THREE from 'three'
import type * as THREEType from 'three'
import type { Object3D } from 'three'

import { LineMaterial, LineSegmentsGeometry, OrbitControls, Wireframe, BufferGeometryUtils } from 'three/examples/jsm/Addons.js'

const BoxGeometry = THREE.BoxGeometry
const Mesh = THREE.Mesh
const MeshPhongMaterial = THREE.MeshPhongMaterial

const EdgesGeometry = THREE.EdgesGeometry
type Object3DJSON = THREEType.Object3DJSON
export {
  THREE, type THREEType,
  OrbitControls,
  BoxGeometry,
  Mesh,
  MeshPhongMaterial,
  type Object3D,
  type Object3DJSON,
  EdgesGeometry,
  LineMaterial,
  LineSegmentsGeometry,
  Wireframe,
  BufferGeometryUtils,
}
