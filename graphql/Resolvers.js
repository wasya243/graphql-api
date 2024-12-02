const User = require('../models/User');

const resolvers = {
    getUser: async ({ id }) => {
        try {
          const user = await User.findById(id);
          return user;
        } catch (err) {
          throw new Error("Error retrieving user");
        }
    },
    getUsers: async () => {
        try {
          const users = await User.find();
          return users;
        } catch (err) {
          throw new Error("Error retrieving users");
        }
    },
    createUser: async ({ firstName, lastName, email }) => {
        try {
          const user = new User({ firstName, lastName, email });
          await user.save();
          return user;
        } catch (err) {
          throw new Error("Error creating user");
        }
    },
    updateUser: async ({ id, firstName, lastName, email }) => {
        try {
          const user = await User.findByIdAndUpdate(
            id,
            { firstName, lastName, email },
            { new: true }
          );
          return user;
        } catch (err) {
          throw new Error("Error updating user");
        }
    },
    deleteUser: async ({ id }) => {
        try {
          const user = await User.findByIdAndDelete(id);
          return user;
        } catch (err) {
          throw new Error("Error deleting user");
        }
    },
};

module.exports = resolvers;
