const { User } = require('../../src/app/models');

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const user = await User.create({
      name: 'Test',
      email: 'test@gmail.com',
      password_hash: 'test123123'
    })

    console.log(user);

    expect(user.email).toBe('email1@gmail.com');
  });

});