import { interval } from "rxjs";

import { bufferTime, bufferCount } from "rxjs/operators";

// 定时器1秒执行一次，缓存三秒内的值，值缓存在数组中发布
// interval(1000).pipe(bufferTime(3000)).subscribe(console.log);

// 定时器1秒执行一次，缓存3个数量的值，值缓存在数组中发布
interval(1000).pipe(bufferCount(4)).subscribe(console.log);
