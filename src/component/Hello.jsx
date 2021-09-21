const Hello = ({ user }) => {
  return user.name ? <h1>{user.name}</h1> : <button>Login</button>;
};

export default Hello;
