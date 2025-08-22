import UserProfile from "./components/userProfile/userProfile.jsx";

const user = {
  firstName: "john",
  lastName: "Doe",
  skills: "node.js and React",
};
const user2 = {
  firstName: "Mark",
  lastName: "Doe",
  skills: "HTML and CSS",
};

function App() {
  return (
    <>
      <UserProfile
        firstName={user.firstName}
        lastName={user.lastName}
        skills={user.skills}
      />
      <UserProfile
        firstName={user2.firstName}
        lastName={user2.lastName}
        skills={user2.skills}
      />
    </>
  );
}

export default App;
