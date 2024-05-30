const {
  createUserDB,
  getUserDB,
  getUserIdDB,
} = require("../repository/user.repository");

const createUser = async (name, surname, email, password) => {
  const user = await createUserDB(name, surname, email, password);
  return user;
};

const getUser = async () => {
  const user = await getUserDB();
  return user;
};

const getUserId = async (id) => {
  const user = await getUserIdDB(id);
  return user;
};


const updateUserById = async (id, name, surname, email, password) => {
    const data = await updateUserByIdDB(id, name, surname, email, password);
    return data
}
module.exports = { createUser, getUser,getUserId,updateUserById };
