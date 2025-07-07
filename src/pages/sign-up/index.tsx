import { createSignal } from "solid-js";
import { actionSignUp } from "../../lib/action/sign-up";

const EMAIL_MIN_LENGTH = 8;

export const SignUp = () => {
  const [email, setEmail] = createSignal("");

  const onInputEmail = (event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    const value = target.value;
    setEmail(value);
    console.log(value);
  };

  const onSubmitSignUp = async (event: Event) => {
    event.preventDefault();
    const res = await actionSignUp(email());
    console.log(res);
  };

  return (
    <form onSubmit={onSubmitSignUp}>
      <h1>Sign Up</h1>
      <label for="email">Email</label>
      <input id="email" type="email" onInput={onInputEmail} />
      <button
        disabled={!email() || email().length < EMAIL_MIN_LENGTH}
        type="submit"
      >
        Sign Up
      </button>
    </form>
  );
};
