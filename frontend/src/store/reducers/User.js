const initialState = {
  id: 0,
  name: "Foo Bar",
  email: "foo@bar.com",
  points: 0,
};

function UserReducer(state = initialState, action) {
  switch (action) {
    case "ADD":
      let currState = [...state];

      const fetchedUser = {
        id: 1,
        name: "Bar Foo",
        email: "bar@foo.com",
        points: 10,
      };

      currState.push(fetchedUser);
      return currState;

    default:
      return state;
  }
}

export default UserReducer;
