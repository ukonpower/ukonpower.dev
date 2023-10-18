import * as THREE from 'three';
import * as ORE from 'ore-three';
import { Component, ComponentOptions } from '../Component';

export class MainBox extends Component {

	constructor( opt?: ComponentOptions ) {

		super( opt );

	}

	protected onSetTarget( target: THREE.Object3D<THREE.Event> ): void {

		let mesh = target as THREE.Mesh;
		mesh.material = new THREE.MeshNormalMaterial();

	}

}
