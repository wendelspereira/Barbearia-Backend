interface IDays {
  days:
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "satuday";
}

interface IOpeningHours {
  day: IDays;
  hours: [{ opening: string; closure: string }];
}

interface ICreateOpenHoursDTO {
  openinghours: IOpeningHours[];
}

interface IListOpenHoursDTO {
  openinghours: IOpeningHours[];
}

export { ICreateOpenHoursDTO, IListOpenHoursDTO };
