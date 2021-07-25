const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should sum two numbers', async () => {
    const user = await User.create({
      name: 'Lucas',
      email: 'email1@gmail.com',
      password_hash: '123132112'
    })

    console.log(user);

    expect(user.email).toBe('email1@gmail.com');
  });

});