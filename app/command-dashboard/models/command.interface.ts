import {Bread} from "../../bread-dashboard/models/bread.interface";

export interface Command{
  id : number,
  price : number,
  date : number,
  customer : number,
  state : string
  breads : Bread[]
}
