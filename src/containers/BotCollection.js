import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {




  render(){
  	return (


<div>
{!this.props.specs ?
      <div className="ui four column grid">
    		<div className="row">
    		  { this.props.robots.map(robot => (<BotCard

            armyRobots={this.props.armyRobots}
            cardClicked={this.props.cardClicked}
            id={robot.id}
            name={robot.name}
            health={robot.health}
            damage={robot.damage}
            armor={robot.armor}
            bot_class={robot.bot_class}
            catchphrase={robot.catchphrase}
            pic={robot.avatar_url} />))

            }
    		</div>
  	  </div>
      :
      <div className="ui four column grid">
    		<div className="row">

            {this.props.robots.map(robot => (<BotSpecs
              showAllBots={this.props.showAllBots}

              cardClicked={this.props.cardClicked}
              id={robot.id}
              name={robot.name}
              health={robot.health}
              damage={robot.damage}
              armor={robot.armor}
              bot_class={robot.bot_class}
              catchphrase={robot.catchphrase}
              pic={robot.avatar_url} />))

              }







    		</div>
  	  </div>
    }
    </div>
  	);
  }

};

export default BotCollection;
