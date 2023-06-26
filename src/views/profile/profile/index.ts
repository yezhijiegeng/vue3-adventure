import { Foo } from "foo";
import * as bar from "bar";
let f: Foo;
bar.bar();

/* import * as moment from "moment";

declare module "moment" {
  export function foo(): moment.CalendarKey;
}
 */

// foo({});

import { foo } from "@/types/node-plugin/index";
foo(global.process);
