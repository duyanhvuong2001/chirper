import { useState } from "react";
import { connect } from "react-redux";
import { handleAddTweet } from "../actions/tweets";
import { useNavigate } from "react-router-dom";
const NewTweet = (props) => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { dispatch, id } = props;
  const handleChange = (e) => {
    const text = e.target.value;

    setText(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddTweet(text, id));
    setText("");

    if (!id) {
      navigate("/");
    }

    
  };

  const MAX_LENGTH = 280;
  const tweetLeft = 280 - text.length;
  return (
    <div>
      <h3 className="center">Compose new Tweet</h3>
      <form className="new-tweet" onSubmit={handleSubmit}>
        {
          //Redirect to / when submitted
        }
        <textarea
          placeholder="What's on your mind?"
          value={text}
          onChange={handleChange}
          className="textarea"
          maxLength={MAX_LENGTH}
        />
        {tweetLeft <= 100 && <div className="tweet-length">{tweetLeft}</div>}
        <button className="btn" type="submit" disabled={text === ""}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default connect()(NewTweet);
