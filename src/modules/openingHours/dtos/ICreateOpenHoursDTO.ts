interface IHours {
  opening: string;
  closure: string;
}

interface ICreateOpenHoursDTO {
  dow:
    | "sunday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday"
    | "satuday";
  hours: IHours[];
}

export { ICreateOpenHoursDTO };

// [
//   {
//     dow: "sunday",
//     hours: [
//       { opening: "08:00", closure: "12:00" },
//       { opening: "14:00", closure: "17:00" },
//     ],
//   },
//   {
//     dow: "tuesday",
//     hours: [
//       { opening: "08:00", closure: "12:00" },
//       { opening: "14:00", closure: "17:00" },
//     ],
//   },
// ];
