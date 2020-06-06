import React from "react";
import { mount } from "enzyme";

import CommentList from "../CommentList";
import Root from "../../Root";

let wrapped;

beforeEach(() => {
  const initailState = {
    comments: ["Comment 1", "Comment 2"],
  };

  wrapped = mount(
    <Root initailState={initailState}>
      <CommentList comments={["lala", "ksks"]} />
    </Root>
  );
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2);
});

it("shows the text for each comment", () => {
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
