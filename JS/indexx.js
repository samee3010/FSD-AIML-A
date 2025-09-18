function register(cb) {
  setTimeout(() => {
    console.log("Register end");
    cb();
  }, 4000);
}

function sendSMS(cb) {
  setTimeout(() => {
    console.log("Send SMS end");
    cb();
  }, 3000);
}

function login(cb) {
  setTimeout(() => {
    console.log("Login end");
    cb();
  }, 2000);
}

function getData(cb) {
  setTimeout(() => {
    console.log("Get Data end");
    cb();
  }, 8000);
}

function calculateData(cb) {
  setTimeout(() => {
    console.log("Display Data end");
    cb();
  }, 3000);
}

function logout(cb) {
  setTimeout(() => {
    console.log("Logout end");
    cb();
  }, 1000);
}

register(() => {
  sendSMS(() => {
    login(() => {
      getData(() => {
        calculateData(() => {
          logout(() => {
            console.log("All tasks completed");
          });
        });
      });
    });
  });
});