import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      // do your stuff
      if (action.type === ADD_ARTICLE) {
        const foundWord = forbiddenWords.filter((word) =>
          action.payload.title.includes(word)
        );

        if (foundWord.length) {
          alert(
            "The word '" +
              foundWord +
              "' is not allowed!\r\nThe following words are not allowed: " +
              forbiddenWords +
              ".\r\nPlease try again."
          );
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}
