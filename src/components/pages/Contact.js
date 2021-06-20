import React from "react";

export default function Contact() {
  return (
    <section id="contactme">
      <h2>contact me</h2>
      <form
        action="mailto:zoechalk1@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <input
          type="submit"
          value="i promise i'll check my email"
          id="button"
        ></input>
      </form>
    </section>
  );
}
