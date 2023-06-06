import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";

function Feedbackitem({ item }) {
  const { deleteFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className="close">
        <FaTimes color="purple" onClick={() => deleteFeedback(item.id)} />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default Feedbackitem;
