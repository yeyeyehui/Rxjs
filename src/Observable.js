import { Observable } from "rxjs";

// 订阅
const observer = {
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
};

const source$ = new Observable((subscriber) => {
  // 发布
  subscriber.next(1);

  // 发布
  subscriber.next(2);

  // 发布
  subscriber.next(3);

  // 发布
  subscriber.complete();
});

// 订阅
source$.subscribe(observer);
