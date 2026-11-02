import { component$ } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";

export default component$(() => {
  return (
    <>
      <h1>About</h1>
      <Link href="/">Home</Link>
    </>
  );
});
