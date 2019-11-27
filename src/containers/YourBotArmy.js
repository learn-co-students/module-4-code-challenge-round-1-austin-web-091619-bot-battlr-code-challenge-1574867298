import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.armyRobots.map(robot => (<BotCard
              cardClicked={this.props.cardClicked}
              id={robot.id}
              name={robot.name}
              health={robot.health}
              damage={robot.damage}
              armor={robot.armor}
              bot_class={robot.bot_class}
              catchphrase={robot.catchphrase}
              pic={robot.avatar_url} />))}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
