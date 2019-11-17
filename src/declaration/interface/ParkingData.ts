interface IParkingDataBase {
  id: string;
  num: number;
  light_num: number;

  roads: number[];
  entranses: number[];
  coop_target: string;
}

export interface IParkingData extends IParkingDataBase {
  has_roof: boolean;
  can_park_in: boolean;
  multi_floors: boolean;
  system: number;
  coop: boolean;
  coordinates: number[];
}

export interface IParkingDisplayData extends IParkingDataBase {
  has_roof: IDisplayValue<boolean>;
  can_park_in: IDisplayValue<boolean>;
  multi_floors: IDisplayValue<boolean>;
  system: IDisplayValue<string>;
  coop: IDisplayValue<boolean>;
  coordinates: ICoordinates;
}

interface IDisplayValue<T> {
  value: T;
  display: string;
}

interface ICoordinates {
  x: number;

  y: number;
}
