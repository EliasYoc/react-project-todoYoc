import "./EmptyList.css";
const EmptyList = ({ isEmpty }) => {
  //cada ves que entra se dscarga la imagen
  return (
    <div className={`empty-list ${isEmpty}`}>
      <img
        autoPlay
        loop
        src="https://cdn.discordapp.com/attachments/857670411369447464/903356778887127090/SquidGame-512px-14.gif"
        alt="todo list"
      />
      <h3>No tienes tareas pendientes</h3>
    </div>
  );
};

export default EmptyList;
