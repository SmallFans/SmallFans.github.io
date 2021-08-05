1.同步方式： 当把data中的name修改之后，此时会触发name的 setter 中的 dep.notify 通知依赖本data的render watcher去 update，update 会把 flushSchedulerQueue 函数传递给 nextTick，render watcher在 flushSchedulerQueue 函数运行时 watcher.run 再走 diff -> patch 那一套重渲染 re-render 视图，这个过程中会重新依赖收集，这个过程是异步的；所以当我们直接修改了name之后打印，这时异步的改动还没有被 patch 到视图上，所以获取视图上的DOM元素还是原来的内容。
2.setter前： setter前为什么还打印原来的是原来内容呢，是因为 nextTick 在被调用的时候把回调挨个push进callbacks数组，之后执行的时候也是 for 循环出来挨个执行，所以是类似于队列这样一个概念，先入先出；在修改name之后，触发把render watcher填入 schedulerQueue 队列并把他的执行函数 flushSchedulerQueue 传递给 nextTick ，此时callbacks队列中已经有了 setter前函数 了，因为这个 cb 是在 setter前函数 之后被push进callbacks队列的，那么先入先出的执行callbacks中回调的时候先执行 setter前函数，这时并未执行render watcher的 watcher.run，所以打印DOM元素仍然是原来的内容。
3.setter后： setter后这时已经执行完 flushSchedulerQueue，这时render watcher已经把改动 patch 到视图上，所以此时获取DOM是改过之后的内容。
4.Promise方式： 相当于 Promise.then 的方式执行这个函数，此时DOM已经更改。
5.setTimeout方式： 最后执行macro task的任务，此时DOM已经更改。

备注：前文提过，在依赖收集原理的响应式化方法 defineReactive 中的 setter 访问器中有派发更新 dep.notify() 方法，这个方法会挨个通知在 dep 的 subs 中收集的订阅自己变动的 watchers 执行 update