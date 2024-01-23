import { Subject } from "rxjs";

// Subject 是一种特殊的 Observable，它既可以订阅数据流，也可以向数据流中提交数据
const source$ = new Subject();

// 订阅
source$.subscribe((val) => console.log("Subject订阅A", val));

// 发布
source$.next(1);

// 发布
source$.next(2);

// 订阅
source$.subscribe((val) => console.log("Subject订阅B", val));

// 发布
source$.next(3);

// 发布
source$.next(4);
