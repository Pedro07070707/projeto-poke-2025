import './Menu.css'

const Menu = () => {
  return (
    <div>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Active
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home2">
            Home2
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/home3">
            Home3
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Disabled
          </a>
        </li>
      </ul>
    </div>
  );
};


export default Menu