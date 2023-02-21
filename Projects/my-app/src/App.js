import logo from './logo.svg';
import './App.css';

function App() {

  const Header = ({name, followers, following, description, avatar})=>{
    return (
      <div>
        <div class="bg-container">
        <div class="container">
          <div class="text-center py-5">
            <img src={"https://bootdey.com/img/Content/avatar/".concat(avatar)} alt class="ui-w-100 rounded-circle"/>
            <div class="col-md-8 col-lg-6 col-xl-5 p-0 mx-auto">
              <h4 class="font-weight-bold my-4 text-white">{name}</h4>
              <div class="text-muted mb-4">
                {description}
              </div>
            </div>
          <div class="text-center">
          <a href="#" class="d-inline-block text-dark">
            <strong class="text-white">{followers} </strong>
            <span class="text-muted">followers</span>
          </a>
          <a href="#" class="d-inline-block text-dark ml-3">
            <strong class="text-white">{following} </strong>
            <span class="text-muted">following</span>
          </a>
        </div>
      </div>
      </div>
    <hr class="m-0"/>
    <ul class="nav nav-tabs bg-tabs-content tabs-alt justify-content-center">
    <li class="nav-item">
      <a class="nav-link py-4 active" href="#">Posts</a>
    </li>
    <li class="nav-item">
      <a class="nav-link py-4" href="#">Likes</a>
    </li>
    <li class="nav-item">
      <a class="nav-link py-4" href="#">Followers</a>
    </li>
    <li class="nav-item">
      <a class="nav-link py-4" href="#">Following</a>
    </li>
  </ul>
  </div>  
  </div>
    )
  }

  return (
    <div className="App">
      <Header name={'Ziyad Shuaib'} avatar="avatar7.png" followers={110} following={5} description="A very rich nigerian man who's venturing into the startup ecosystem!"/>
    </div>
  );
}

export default App;
