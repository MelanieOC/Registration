
class Model {
  constructor() {
    this.players = null;
    this.inputValue = null;
  }
  addPlayer(text) {
    this.players.push({
      name: text.value,
      score: 0,
      id: this.players.length + 1
    })
    text.value = '';
    this.notify();
  }
  decrease(player) {
    player.score--;
    this.notify();
  }
  increase(player) {
    player.score++;
    this.notify();
  }
  totalPoints() {
    return this.players.map(item => item.score).reduce((total, item) => total + item);
  }
  subscribe(render) {
    this.render = render;
  }
  notify() {
    this.render();
  }
}

const CreateLi = ({ text }) => {
  return (
    <li>
      {text}
      <label>Confirmed<input type="checkbox" /></label>
      <button>remove</button>
    </li>
  );
}
/*function createLI(text) {
  const li = document.createElement('li');
  li.textContent = text;
  const label = document.createElement('label');
  label.textContent = 'Confirmed';
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  label.appendChild(checkbox);
  li.appendChild(label);
  const button = document.createElement('button');
  button.textContent = 'remove';
  li.appendChild(button);
  return li;
}*/
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
          <CreateLi text={'hola'} />
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

//model.subscribe(render);
render(); 