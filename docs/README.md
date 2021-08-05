<home-sideBar/>




<!-- 相对路径 -->
[首页](./README.md)  
[配置参考](./vue/nextTick.md)
<!-- 绝对路径 -->
[指南](/vue/nextTick.md)
<!-- URL -->
[GitHub](https://github.com) 

```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'
const line2 = 'This is line 2'
const line3 = 'This is line 3'
export const config: UserConfig = {
  title: '你好， VuePress',

  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
}
```
```
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```


### 浏览器总论|浏览器工作原理总论
![An image](./.vuepress/public/img/brower/browerImg.png)
>我们看到的页面都是图片形式（位图），然后经过显卡转换为我们可以识别的光信号
### 状态机|有限状态机
每一个状态优势一个机器
  在每一个机器里，我们可以计算、存储、输出
  所有机器接受的输入是一致的
  状态机的每一个机器本身没有状态，如果我们用函数来表示，他是纯函数
每一个机器知道下一个状态
  每个机器都有确定的下一个状态(Moore)
  每个机器根据输入决定下一个状态(Mealy)
  ```
  // mealy
  // 每个函数是一个状态
  function state(input) { // 函数参数就是输入
    return next;
  }
  while (input) {
    state = state(input) //把状态机的返回值作为下一个状态
  }
  ```
### 状态机|使用状态机处理字符串
### http请求|http协议解析