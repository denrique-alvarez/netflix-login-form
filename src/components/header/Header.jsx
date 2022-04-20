import "./styles.css";

import { Form } from "./form/Form";
import { SubHeader } from "./sub-header/SubHeader";

export const Header = () => {
  return (
    <header>
      <div className="login-form-container">
        <Form />
        <SubHeader />
      </div>
    </header>
  );
};
