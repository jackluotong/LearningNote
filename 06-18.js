//数组
var arr = [1, 2, 3, 1, 2]
arr.push(1)
//console.log('this is a test array \r' + [...new Set(arr)]) //数组过滤
arr.splice(1, 2, 9) //第一位数字表示要索引，第二位表示要删除的位数，第三位表示索引数被替换
console.log(arr)
//闭包
function a() {
  let q = 1

  function b() {
    console.log('this is a closure.' + this.q) //this指向直接调用者
    // for (let i = 0; i<4; i++)  {
    //   setTimeout(() => {
    //     console.log(i);

    //   }, 100);//注释：ctrl +k ，ctrl+c
    // }
  }
  return b()
}
a()
//定时器，间隔器

//作用域 链

//组件化 模块化

//this的理解

//vue

//路由跳转方式
//<router-link to='home'>
// router.push('/home');

//promise
var promise = new Promise((resolve, reject) => {
  if (success) {
    resolve(value)
  } else {
    reject(error)
  }
})
promise.then(function(value) {
  console.log('success');

}, function(value) {
  console.log('failure.');
})
//箭头函数

//数组

let [a1, b1, c1] = [1, 2, 3]
console.log(a1);
let {
  a11,
  c11,
  d11
} = {
  a11: 12,
  c11: 5,
  d11: 6
}
console.log(a11, c11, d11)
let arr1 = [122, 12, 121]
let result = arr1.map((item) => {
  return item * item;
})
console.log(result);
//reduce 求平均数
function computer(array) {
  //let score = [89, 12, 34, 23, 45, 55];
  let result1 = array.reduce(function(tmp, item, index) {
    return tmp + item;
  })
  console.log(result1 / array.length)
}
let arr12 = [12, 12, 12, 12, 12, 1212, 21121, 21121]
computer(arr12)

//

// var computer = function re(arr) {
//   arr.reduce(function(temp, item, index) {
//     return temp + item;
//   })
// }
// let result1 = computer.re([1, 2, 4, 1, 1, 2, 1])
// console.log(result1);

//函数封装
function fi(array) {
  let result = array.filter(item => {
    if (item % 3 == 0) {
      console.log(item + ':\rcan be division:');
    }
  })
}
fi([12, 5, 2, 1, 6, 1111])

function foreach(arr) {
  arr.forEach((item, index) => {
    console.log(index + ':' + item);
  })
}
let arr111 = [123213, 1231, 12, 12]
foreach(arr111)

let str = 'git://www.baidu.com/23448';

function check(str) {
  if (str.startsWith('http://')) {
    alert('普通地址');
  } else if (str.startsWith('https://')) {
    alert('加密地址');
  } else if (str.startsWith('git://')) {
    document.write('git地址');
  } else {
    document.write('其它');
  }
}
check(str)
// function check(str) {
//   if (str.startWith('12')) {
//     alert('yes.');
//   }
// }
// check('12231')
//promise
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
}).then(value => {
  console.log('value', value)
}, reason => {
  console.log('reason', reason);
})

new Promise((resolve, reject) => {
  setTimeout(() => { //过一会显示出来
    console.log(111);
  }, 10000);
})

function show(str, time) {
  setTimeout(() => {
    console.log(str);
  }, time);
}
show('you are a man', 1000)

function show1(str, time) {
  setInterval(() => { //间隔计时器
    alert(str)
  }, time);
}
//show1('YOU ARE A MAN PLEASE!', 1000000)
new Promise((resolve, reject) => {
  console.log('have a nice day.');
  resolve(1)
})
//事件委托代理
//原始方法
// document.addEventListener('DOMContentLoaded', function() {
//   let app = document.getElementById('todo-app');
//   let items = app.getElementsByClassName('item');
//   for (let item of items) {
//     item.addEventListener('click', function() {
//       alert('you clicked on item: ' + item.innerHTML);
//     })
//   }
// })
//委托代理
document.addEventListener('DOMContentLoaded', function() {
  let app = document.getElementById('todo-app');
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
      let item = e.target;
      // alert('you clicked on item: ' + item.innerHTML)
    }
  })
})
//闭包问题
const arr0 = [123213, 12, 1, 12, 122]
for (let i = 0; i < arr0.length; i++) {
  setTimeout(() => {
    console.log('The index of this number is:\r' + i);

  }, 10000);
}
//节流 防抖
function throttle(fn, interval) {
  // last为上一次触发回调的时间
  let last = 0

  // 将throttle处理结果当作函数返回
  return function() {
    // 保留调用时的this上下文
    let context = this
    // 保留调用时传入的参数
    let args = arguments
    // 记录本次触发回调的时间
    let now = +new Date()

    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔的阈值
    if (now - last >= interval) {
      // 如果时间间隔大于我们设定的时间间隔阈值，则执行回调
      last = now;
      fn.apply(context, args);
    }
  }
}

// 用throttle来包装scroll的回调
const better_scroll = throttle(() => console.log('触发了滚动事件'), 10000)

document.addEventListener('scroll', better_scroll)

// function debounce(fn, delay) {
//   // 定时器
//   let timer = null

//   // 将debounce处理结果当作函数返回
//   return function() {
//     // 保留调用时的this上下文
//     let context = this
//     // 保留调用时传入的参数
//     let args = arguments

//     // 每次事件被触发时，都去清除之前的旧定时器
//     if (timer) {
//       clearTimeout(timer)
//     }
//     // 设立新定时器
//     timer = setTimeout(function() {
//       fn.apply(context, args)
//     }, delay)
//   }
// }

// // 用debounce来包装scroll的回调
// const better_scroll = debounce(() => console.log('触发了滚动事件'), 1000)

// document.addEventListener('scroll', better_scroll)

//操作dom
// var container = document.getElementById('list');
// var html = [];
// for (var i = 0; i < 3; i++) {
//   html.push('<li>' + (i + 1) + '</li>');
// }
// container.innerHTML = html.join('');



// var container = document.getElementById('list');
// for (var i = 0; i < 3; i++) {
//   var item = document.createElement('li');
//   item.innerText = i + 1;
//   container.appendChild(item);
// }



// var li = document.getElementById('list');
// for (var i = 0; i < 4; i++) {
//   var item = document.createElement('li');
//   item.innerText = i + 1;
//   li.appendChild(item)
// }
obj = {
  name: 'a',
  getName: () => {
    console.log(this.name);
  }
}
var fn = obj.getName;
obj.getName();