import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
class BotsPage extends React.Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      armyRobots: []
    }
  }

  componentDidMount(){
    fetch( "https://bot-battler-api.herokuapp.com/api/v1/bots" )
      .then((response) => {return response.json()})
      .then((robotData) => { this.setState({
        robots: robotData
      })
    })
  }

  cardClicked = (id) => {
    if(!this.state.armyRobots.find(robot => robot.id === id))
    this.setState({
      armyRobots: [...this.state.armyRobots, this.state.robots.find(robot => robot.id === id)]
    })
    else{
      this.setState({
        armyRobots: this.state.armyRobots.filter(robot => robot.id !== id)
      })
    }

  }



  render() {
    return (
<div>
      <div>
      {<YourBotArmy cardClicked={this.cardClicked} armyRobots={this.state.armyRobots}/>}
      </div>
      <div>
      {<BotCollection cardClicked={this.cardClicked} robots={this.state.robots}/>}
      </div>
</div>
    );
  }

}

export default BotsPage;
