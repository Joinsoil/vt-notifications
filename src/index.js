const path = require('path');
path.resolve(__dirname, './dist')
const VTNotification = require(path.resolve(__dirname, "./VTNotification.vue"));
const VTNotificationGroup = require(path.resolve(__dirname, "./VTNotificationGroup.vue"));
const methods = require(path.resolve(__dirname, './notifications.js'));

let installed = false;

module.exports = {
  install(Vue) {
    if (installed) return
    Vue.component('notification', VTNotification)
    Vue.component('notificationGroup', VTNotificationGroup)
    Vue.prototype.$notify = (data, timeout) => methods.notify(data, timeout)
    installed = true
  }
}
