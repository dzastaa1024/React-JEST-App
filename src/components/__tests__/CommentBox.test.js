import React from "react";
import { mount, ReactWrapper } from "enzyme";
import CommentBox from "../CommetBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a text area and button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

it("has a text area that users can type in", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" },
  });
  wrapped.update();

  expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
});

it("when form is submitted, text area gets emtied", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" },
  });
  wrapped.update();
  wrapped.find("form").simulate("submit");
  wrapped.update();
  wrapped.find("textarea").prop();

  expect(wrapped.find("textarea").prop("value")).toEqual("");
});
