import { User } from "./user.entity";

describe('User Entity', () => {
  it("Should create a user", () => {
    const person = User.create({
      email: 'foo@f.com',
      password: 'complexPassword',
      name: 'Foo'
    });
    
    expect(person.props.name).toBe("Foo");
    expect(person.props.password.value).toBe("complexPassword");
    expect(person.props.email.value).toBe("foo@f.com");

  });

  it("Should not create a user because email is invalid", () =>{
    
    expect(() =>  User.create({
        email: 'foof.com',
        password: 'complexPassword',
        name: 'Foo'
      })
    ).toThrowError(/Email not valid/)

  })

  it("Should not create a user because password is invalid", () =>{
    expect(() =>  User.create({
      email: 'foo@f.com',
      password: 'comp1',
      name: 'Foo'
    })
  ).toThrowError(/Password not valid/)
  })
});
