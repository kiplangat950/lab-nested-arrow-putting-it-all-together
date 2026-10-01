


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
function createLoginTracker(userInfo) {
    let attemptCount = 0;

    return (passwordAttempt) => {
      if (passwordAttempt >= 3) {
        return "Account locked";
      }


      attemptCount++;

      if (passwordAttempt === userInfo.password) {
        return "login successful";
      }
      else {

      if (attemptCount >= 3) {
        return "Account locked due to too many failed login attempts";
      }

      return `Login failed. Attempt ${attemptCount}`;
    }
  };
}