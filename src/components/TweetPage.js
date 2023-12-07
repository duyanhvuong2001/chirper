import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";
import { useParams } from "react-router-dom";
const TweetPage = (props) => {
  console.log(props);
  const { id } = useParams();

  const { replies } = getReplies(id, props.tweets);
  return (
    <div>
      <Tweet id={id} />
      <NewTweet id={id} />
      {replies.length !== 0 && <h3 className="center">Replies</h3>}
      <ul>
        {replies.map((replyId) => (
          <li key={replyId}>
            <Tweet id={replyId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

const getReplies = (id, tweets) => {
  return {
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort((a, b) => {
          return tweets[b].timestamp - tweets[a].timestamp;
        }),
  };
};

const mapStateToProps = ({ tweets }) => {
  return {
    tweets,
  };
};
export default connect(mapStateToProps)(TweetPage);
