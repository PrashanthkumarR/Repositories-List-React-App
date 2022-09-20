import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RepositoriesListTable from "./components/RepoListTable";
import list from './shared/Repolist'


const App =()=> {

  return (
    <div className="appcontainer">
      <h1>Repositories List</h1>
      <RepositoriesListTable   list={list.slice(0,2)} initialStatus={'Show More'} initialSize={2}/>
    </div>
  );
}

export default App;
