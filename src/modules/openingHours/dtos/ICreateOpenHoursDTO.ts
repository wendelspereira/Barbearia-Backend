interface IDoW {
  DoW:
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "satuday";
}

interface IOpeningHours {}

interface ICreateOpenHoursDTO {
  openinghours: [
    { dow: [
      {hours: [{ opening: string; closure: string }]}
    ]}
  ];
}

interface IListOpenHoursDTO {
  openinghours: IOpeningHours[];
}

export { ICreateOpenHoursDTO, IListOpenHoursDTO };
