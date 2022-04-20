import "./styles.css";

export const Form = () => {
  return (
    <form action="Sign In">
      <input className="email" type="text" placeholder="Email" />
      <input className="password" type="password" placeholder="Password" />
      <input type="submit" className="sign-in" href="#" />
    </form>
  );
};
