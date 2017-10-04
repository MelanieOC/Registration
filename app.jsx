
class Model {
  constructor() {
    this.invitees = ['hola', 'maria'];
    this.inputValue = null;
  }
  addInvite(text) {
    this.players.push(text);
    text.value = '';
    this.notify();
  }
  decrease(player) {
    player.score--;
    this.notify();
  }
  removeInvite(text) {
    this.invitees = this.invitees.filter(item => item != text);
    this.notify();
  }
  subscribe(render) {
    this.render = render;
  }
  notify() {
    this.render();
  }
}

const CreateLi = ({ text, model }) => {
  return (
    <li key={Utils.uuid()}>
      {text}
      <label>Confirmed<input type="checkbox" /></label>
      <button onClick={() => model.removeInvite(text)}>remove</button>
    </li>
  );
}

const Application = ({ model }) => {
  return (
    <div className="wrapper">
      <header>
        <h1>RSVP</h1>
        <p> Registration App </p>
        <form id="registrar">
          <input type="text" name="name" placeholder="Invite Someone" />
          <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
      <div className="main">
        <h2>Invitees</h2>
        <ul id="invitedList">
          {model.invitees.map(item => <CreateLi text={item} model={model} />)}
        </ul>
      </div>
    </div>
  );
}


let model = new Model();
let render = () => {
  ReactDOM.render(
    <Application model={model} />,
    document.getElementById('container')
  );
};

model.subscribe(render);
render(); 