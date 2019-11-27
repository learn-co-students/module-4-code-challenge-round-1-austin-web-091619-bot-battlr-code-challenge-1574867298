import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.robots.map(robot => (<BotCard
            cardClicked={this.props.cardClicked}
            id={robot.id}
            name={robot.name}
            health={robot.health}
            damage={robot.damage}
            armor={robot.armor}
            bot_class={robot.bot_class}
            catchphrase={robot.catchphrase}
            pic={robot.avatar_url} />))}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
