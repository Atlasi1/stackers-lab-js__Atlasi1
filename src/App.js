import Header from "./components/header/Header";
import {AlbumContainer} from "./components/album/styled";
import data from "./data";
import Album from "./components/album/Album";

function App() {
  return (
      <div className="App">
          <Header/>
          <AlbumContainer>
              {data.map((item, index) =>
                  <Album name={item.name} tracklist={item.tracklist} imageSrc={item.image} key={index}></Album>
              )}
          </AlbumContainer>
      </div>
  );
}

export default App;
