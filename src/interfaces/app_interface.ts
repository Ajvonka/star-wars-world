export interface IResult {
  count: number;
  next: string;
  previous: string;
  results: IPeople[];
}

export interface IPeople {
  name: string;
  height: string;
  mass: string;
  gender: string;
  url: string;
}
