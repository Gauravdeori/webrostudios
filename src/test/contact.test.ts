import { describe, expect, it } from "vitest";
import { validateContact } from "@/lib/contact";

describe("contact form validation", () => {
  it("requires name, valid email and a 10+ char message", () => {
    const e = validateContact({ name: "", email: "bad", message: "hi" });
    expect(Object.keys(e).sort()).toEqual(["email", "message", "name"]);
  });
  it("accepts a valid submission without phone", () => {
    expect(
      validateContact({ name: "Gaurav", email: "g@x.in", message: "Need a website please" }),
    ).toEqual({});
  });
});
