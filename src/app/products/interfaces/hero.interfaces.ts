export enum Color{
  RED,BLUE,BLACK,GREEN,YELLOW,WHITE
}

export interface Hero {
  name: string,
  canFly: boolean,
  color: Color
}
