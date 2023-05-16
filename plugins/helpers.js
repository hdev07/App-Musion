import Vue from "vue";

Vue.prototype.paramsToString = (query = {}) => {
  let queryParams = "";

  Object.keys(query).forEach((queryKey, index) => {
    if (query[queryKey] == null) return;
    if (queryParams === "") queryParams += `${queryKey}=${query[queryKey]}`;
    else queryParams += `&${queryKey}=${query[queryKey]}`;
  });

  return queryParams;
};

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
