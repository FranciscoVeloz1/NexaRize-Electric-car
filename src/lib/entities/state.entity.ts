class CarStateEntity {
  isOn: boolean;
  mode: "forward" | "parking" | "reverse";
}

export class CarEntity {
  carState: CarStateEntity;
}
