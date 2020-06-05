import commentsReducer from "../comments";
import { SAVE_COMMENT } from "../../actions/types";

it("handlers actions of type SAVE_COMMENT"),
  () => {
    const action = {
      type: SAVE_COMMENT,
      payload: "New Comment",
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(["New Comment"]);
  };

it("handlers actions with unknow type"),
  () => {
    const newState = commentsReducer([], { type: "LAKAKA" });

    expect(newState).toEqual([]);
  };
