import Deck from "../components/Deck";

function Projects(props) {
  const { user } = props;
  return (
    <div>
      <Deck user={user} />
    </div>
  );
}

export default Projects;
