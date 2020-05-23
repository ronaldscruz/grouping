export function addUser(user) {
  return {
    type: "ADD_USER",
    payload: user,
  };
}
