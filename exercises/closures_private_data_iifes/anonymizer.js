let Account = (function () {
  let users = {}

  function _generateRandomDisplayName() {
    const DISPLAY_NAME_LENGTH = 16;
    const CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let newDisplayName = '';
    for (let index = 0; index < DISPLAY_NAME_LENGTH; index++) {
      let randomCharIdx = Math.floor(Math.random() * CHARS.length);
      newDisplayName += CHARS[randomCharIdx];
    }
    return newDisplayName;
  }

  return {
    init(email, password, firstName, lastName) {
      let user = {
        email, 
        password, 
        firstName, 
        lastName
      }
      this.displayName = _generateRandomDisplayName();
      users[this.displayName] = user;
      return this;
    },
    reanonymize(providedPassword) {
      if (users[this.displayName].password === providedPassword) {
        let prevDisplayName = this.displayName;
        let user = users[prevDisplayName];
        delete users[prevDisplayName];
        this.displayName = _generateRandomDisplayName();
        users[this.displayName] = user;
        return true;
      }
      return 'Invalid Password';
    },
    resetPassword(providedPassword, newPassword) {
      if (users[this.displayName].password === providedPassword) {
        users[this.displayName].password = newPassword;
        return true;
      }
      return 'Invalid Password';
    },
    firstName(providedPassword) {
      if (users[this.displayName].password === providedPassword) {
        return users[this.displayName].firstName;
      }
      return 'Invalid Password';
    },
    lastName(providedPassword) {
      if (users[this.displayName].password === providedPassword) {
        return users[this.displayName].lastName;
      }
      return 'Invalid Password';
    },
    email(providedPassword) {
      if (users[this.displayName].password === providedPassword) {
        return users[this.displayName].email;
      }
      return 'Invalid Password';
    }
  }
})();

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));            // logs true
console.log(displayName === fooBar.displayName);   // logs false

let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
console.log(fooBar.firstName('abc'));              // Should log foo
console.log(fooBar.email('abc'));                  // Should log foo@bar.com
console.log(bazQux.firstName('123456'));           // Should log baz