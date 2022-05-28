interface IDays {
    days: "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "satuday"
}

interface IOpeningHours {
    openingHours: [
        {day: IDays, hours: [{opening: string, closure: string}]}
    ]
}


interface ICreateOpenHoursDTO {
    openinghours: IOpeningHours
}


export {ICreateOpenHoursDTO}