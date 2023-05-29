import React from "react";
import Header from "./components/Header";
import News from "./components/News";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            news : [
                {
                    id: 1,
                    title: 'Мы открылись!!!',
                    description: "УРА"
                },
                {
                    id: 2,
                    title: 'Скидочки',
                    description: "УРА"
                }
            ]
        }
    }
  render() {
    return (
        <div>
          <Header/>
          <main>
            <News news={this.state.news}/>
          </main>
        </div>
    );
  }
}

export default App;
