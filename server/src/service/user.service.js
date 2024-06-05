const { createUserDB,getUserDB,getUserIdDB,deleteUserDB,authUserDB } = require("../repository/user.repository");

const authUser = async (email, password) => {
  const user = await authUserDB(email, password);
  if(!user.length) throw new Error('You are not registred')
  return user
};

const createUser = async (name, surname, email, password) => {
  const user = await createUserDB(name, surname, email, password);
  return user
};

const getUser = async () => {
    const user = await getUserDB();
    return user;
  };
  
  const getUserId = async (id)  => {
    const user = await getUserIdDB(id);
    return user;
  };


async function deleteUser(id)
 {
    const user = await deleteUserDB(id)


    if (!user.length) throw new Error('Id is not found')

    return user
}


module.exports = {createUser, deleteUser,getUser,getUserId,authUser}