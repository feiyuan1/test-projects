import Toast from '@com/toast/Toast'
const obj = {}

obj.install = function (Vue) {
  //1.构造器
  const ToastConstructor = Vue.extend(Toast);
  //2.创建实例
  const toast = new ToastConstructor();
  //3.手动创建元素 将toast对象挂在到元素上
  toast.$mount(document.createElement('div'))
  //4.将元素添加到document中
  document.body.appendChild(toast.$el)
  //5.赋值到$toast中
  Vue.prototype.$toast = toast

}

export default obj