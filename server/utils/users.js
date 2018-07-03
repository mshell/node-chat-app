

class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {
      id,
      name,
      room
    }
    this.users.push(user);
    return user;
  }


  getUser(id) {
    var user = this.users.filter((user) => user.id === id);
    var name = user.length === 0 ? false : user[0].name;
    return name;
  }


  removeUser (id) {
      var user = this.getUser(id);

      if (user) {
        this.users = this.users.filter((user) => user.id !== id);
      }
      return user;
    }



  getUserList(room) {
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}
module.exports = {
  Users
};
// var me = new Person('Martin', 65);
// var description = me.getUserDescription();
// console.log(description);
