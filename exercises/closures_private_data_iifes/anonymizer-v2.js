let Account = (function () {
  return (function () {
    let password;
    let userFirstName;
    let userLastName;
    let userEmail;

    function generateDisplayName() {
      const NUMBERS_AND_LETTERS = '0123456789abcdefghijklmnopqrstuvwxyz';
      const DISPLAY_NAME_LENGTH = 16;
      let displayName = '';
      while (displayName.length < DISPLAY_NAME_LENGTH) {
        let randomIdx = Math.floor(Math.random() * NUMBERS_AND_LETTERS.length);
        let randomChar = NUMBERS_AND_LETTERS[randomIdx];
        displayName += randomChar;
      }
      return displayName;
    }

    function isPasswordCorrect(providedPassword) {
      return password === providedPassword;
    }

    return {
      init: function (initEmail, initPassword, initFirstName, initLastName) {
        password = initPassword;
        userFirstName = initFirstName;
        userLastName = initLastName;
        userEmail = initEmail;

        this.displayName = generateDisplayName();

        return this;
      },

      resetPassword: function (providedPassword, newPassword) {
        if (!isPasswordCorrect(providedPassword)) {
          return 'Invalid Password';
        }
        password = newPassword;
        return true;
      },

      reanonymize: function (providedPassword) {
        if (!isPasswordCorrect(providedPassword)) {
          return 'Invalid Password';
        }
        this.displayName = generateDisplayName();
        return true;
      },

      firstName: function (providedPassword) {
        if (!isPasswordCorrect(providedPassword)) {
          return 'Invalid Password';
        }
        return userFirstName;
      },

      lastName: function (providedPassword) {
        if (!isPasswordCorrect(providedPassword)) {
          return 'Invalid Password';
        }
        return userLastName;
      },

      email: function (providedPassword) {
        if (!isPasswordCorrect(providedPassword)) {
          return 'Invalid Password';
        }
        return userEmail;
      }
    };
  })();
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));   // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc'));// logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.email('abc'));                  // logs 'Invalid Password'
console.log(bazQux.firstName('123456'));           // logs 'baz'
console.log(bazQux.email('123456'));               // logs 'baz@qux.com'