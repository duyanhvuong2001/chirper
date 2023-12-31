import { saveLikeToggle, saveTweet } from "../utils/api";
export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

const addTweet = (tweet) => {
  return {
    type: ADD_TWEET,
    tweet,
  };
};

export const receiveTweets = (tweets) => {
  return {
    type: RECEIVE_TWEETS,
    tweets,
  };
};

export const toggleTweet = ({ id, authedUser, hasLiked }) => {
  return {
    type: TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked,
  };
};

export const handleToggleTweet = (info) => {
  return (dispatch) => {
    dispatch(toggleTweet(info));

    return saveLikeToggle(info).catch((e) => {
      console.warn("Error in handle toggle tweet");
      dispatch(toggleTweet(info));
      alert("There was an error liking the tweet. Try again");
    });
  };
};

export const handleAddTweet = (text, replyingTo) => {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveTweet({ text, author: authedUser, replyingTo }).then((tweet) => {
      dispatch(addTweet(tweet));
    });
  };
};
