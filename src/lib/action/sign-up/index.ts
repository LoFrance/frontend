export const actionSignUp = async (email: string) => {
  try {
    const res = await fetch(`/api/users`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    return res.status;
  } catch (e) {
    return e;
  }
};
