class NpcTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      npcHeaders: props.npcHeaders,
      npcData: props.npcData,
    };
  }

  render() {

    var headers = [];

    for (var x = 0; x < this.state.npcHeaders.length; x++) {
      headers.push(<th>{this.state.npcHeaders[x]}</th>)
    }


    return (
      <table>
        <thead>
          {headers}
        </thead>
        <tbody>
          {this.state.npcData}
        </tbody>
      </table>
    );
  }
}

function Npc(props) {
  var row = [];
  var data = [];
  for (var x = 0; x < props.npcData.length; x++) {
    data.push(<td>{props.npcData[x]}</td>)
  }
  return (
    <tr id={props.race + props.count}>{data}</tr>
  );
}
