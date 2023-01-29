import { Color, DirectionalLight, HemisphereLight, Scene } from "three";
import { Cube } from "../object/Cube";

export class Scene1 extends Scene {
  constructor() {
    super();
    this.background = new Color("skyblue").convertSRGBToLinear();
    this.create();
    this.loadedModel = null;
  }

  create() {
    this.brick = new Cube(2, new Color("rgb(255,0,0)"));
    this.add(this.brick);
    const ambientLight = new HemisphereLight(0xffffbb, 0x080820, 0.5);
    const light = new DirectionalLight(0xffffff, 1.0);
    this.add(light, ambientLight);
  }

  update() {
    if (this.loadedModel) {
      this.loadedModel.scene.rotation.x += 0.01;
      this.loadedModel.scene.rotation.y += 0.01;
      this.loadedModel.scene.rotation.z += 0.01;
    }
  }
}
