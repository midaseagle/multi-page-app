import { Form, redirect } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const message = formData.get("message");
  // Process form data here
  return redirect("/thank-you");
};

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <Form method="post">
        <label>Name: <input type="text" name="name" required /></label>
        <label>Message: <textarea name="message" required></textarea></label>
        <button type="submit">Send</button>
      </Form>
    </div>
  );
};

export default Contact;
