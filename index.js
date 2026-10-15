function createLoginTracker(userInfo) {
    
    let attemptCount = 0;

    return (passwordAttempt) => {
      
        if (attemptCount > 3) {
            return "Account locked due to too many failed login attempts";
        }
        attemptCount++;

      
        if (passwordAttempt === userInfo.password) {
            if (attemptCount <= 3) {
                return "Login successful";
            }
        } else {
            if (attemptCount <= 3) {
                
                return `Login failed. Attempt ${attemptCount}`;
            }
          }
        }
    };
