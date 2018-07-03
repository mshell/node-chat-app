const expect = require('expect');
const {
  Users
} = require('./users');
var users;

describe('Users', () => {
  beforeEach(() => {
    users = new Users();
    users.users = [{
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      },
      {
        id: '2',
        name: 'Jen',
        room: 'React Course'
      },
      {
        id: '3',
        name: 'Julie',
        room: 'Node Course'
      }
    ]
  });
  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Martin',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });
  it ('should remove a user', () => {
    var id = '1';
    var res = users.removeUser(id);
    expect(res).toBe('Mike');
    expect(users.getUserList('Node Course')).toExclude('Mike');
  });

  it ('should not remove a user', () => {
    var res=users.removeUser('66');
    expect (res).toBeFalsy();
  });
  it ('should find user', () => {
    var res = users.getUser('2');
    expect (res).toEqual('Jen');
  });
  it ('should not find user', () => {
    var res = users.getUser('97');
    expect (res).toBeFalsy();
  });
  it('should return names for Node Course', () => {
    var userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Mike', 'Julie']);
  });
  it('should return names for React Course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Jen']);
  });
})
