const path = require('path');
const VTNotification = require("./VTNotification.vue");
const VTNotificationGroup = require("./VTNotificationGroup.vue");
const methods = require("./notifications.js");

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
