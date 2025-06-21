export interface IBook {
    title: String,
    author:String,
    genre:"FICTION" | "NON_FICTION" |"SCIENCE" | "HISTORY" | "BIOGRAPHY" | "FANTASY",
    isbn:String,
    description:String,
    copies:number,
    available:boolean

}