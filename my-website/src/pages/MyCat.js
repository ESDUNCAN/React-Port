import Deck from "../components/Deck";

function myCat(props) {
  const { user } = props;
  return (
    <div>
      <Deck user={user} />
    </div>
  );
}

export default myCat;
