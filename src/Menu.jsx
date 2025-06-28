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
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" 
            id="navbarDropdown" role="button" data-bs-toggle="dropdown" 
            aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="/viacep">ViaCep</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
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