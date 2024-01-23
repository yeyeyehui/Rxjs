import { interval, Subject } from "rxjs";

import { takeUntil } from "rxjs/operators";

const source$ = interval(1000);

const stop$ = new Subject();

// 这段代码会每隔 1000 毫秒在控制台输出一个数字，直到 stop$ Observable 发出值
// 一旦 stop$ Observable 发出值，就会停止发出数字，并取消订阅源 Observable。
source$.pipe(takeUntil(stop$)).subscribe(console.log);

// 在某个时刻停止发出数字
setTimeout(() => stop$.next(100), 3000);
