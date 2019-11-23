interface IParkingDataBase {
  id: string;
  num: number;
  light_num: number;

  roads: number[];
  entranses: number[];
  coop_target: string;

  unit_price: number;
  unit_period: number;

  hourly_prices: Map<string, number>;
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
  system: IDisplayValue<number>;
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
