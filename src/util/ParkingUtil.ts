import {
  IParkingDisplayData,
  IParkingData
} from "../declaration/interface/ParkingData";

export default class ParkingUtil {
  public static convertParkingDataForDisplay(
    parkings: IParkingData[]
  ): IParkingDisplayData[] {
    const res = parkings.map(parking => {
      let system = "";
      switch (parking.system) {
        case 0:
          system = "車の下のやつ";
          break;
        case 1:
          system = "バー";
          break;
        default:
          system = "その他";
      }
      return {
        id: parking.id,
        num: parking.num,
        light_num: parking.light_num,

        has_roof: {
          value: parking.has_roof,
          display: parking.has_roof ? "有" : "無"
        },
        can_park_in: {
          value: parking.can_park_in,
          display: parking.can_park_in ? "可" : "不可"
        },
        multi_floors: {
          value: parking.multi_floors,
          display: parking.multi_floors ? "立体" : "平面"
        },
        system: {
          value: parking.system,
          display: system
        },
        roads: parking.roads.sort((a, b) => a - b),
        entranses: parking.entranses.sort((a, b) => a - b),
        coop: {
          value: parking.coop,
          display: parking.coop ? "有" : "無"
        },
        coop_target: parking.coop_target,
        coordinates: {
          x: parking.coordinates
            ? parking.coordinates.length > 1
              ? parking.coordinates[0]
              : 0
            : 0,
          y: parking.coordinates
            ? parking.coordinates.length > 1
              ? parking.coordinates[1]
              : 0
            : 0
        }
      };
    });
    return res;
  }
}
