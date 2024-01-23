import { of } from "rxjs";
import { map } from "rxjs/operators";

// 循环123，使用map重新赋值再打印， 只支持同步值的转
of(1, 2, 3)
  .pipe(map((val) => val * 2))
  .subscribe(console.log);
