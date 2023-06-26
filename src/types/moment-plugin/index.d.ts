import * as moment from "moment";
declare module "moment" {
  export function foo(): moment.CalendarKey;
}
