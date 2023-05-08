import Vue from "vue";

Vue.prototype.returnErrorAlert = function (error) {
  if (!error.response?.data?.errors) {
    let err = error.response?.data?.msg;
    this.showErrorAlert(err);
  } else {
    let errs = error.response?.data?.errors;
    for (let i = 0; i < errs.length; i++) {
      const result = errs[i];
      this.showErrorAlert(result?.msg);
    }
  }
};
