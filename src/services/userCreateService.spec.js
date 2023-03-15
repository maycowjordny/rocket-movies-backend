const UserCreateService = require("./UserCreateService")
const UserReposiroyInMemory = require("../repositories/UserReposiroyInMemory")
it("user should be create", async () => {
    const user = {
        name: "User Test",
        email: "user@test.com",
        password: "123"
    }
    const userReposiroyInMemory = new UserReposiroyInMemory()
    const userCreateService = new UserCreateService(userReposiroyInMemory)
    const userCreated = await userCreateService.execute(user)

    expect(userCreated).toHaveProperty("id")

})