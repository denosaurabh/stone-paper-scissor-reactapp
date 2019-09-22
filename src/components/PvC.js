import React from "react"

class PvC extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    style1(top) {
      return {
        position: 'absolute',
        top: top + 'px',
        left: 100 + 'px'
      }
    }

    render() {
        return (
            <main>
                  <input 
                    type="text"
                    name="name1"
                    placeholder="player-1"
                    value={this.props.name1}
                    onChange={this.props.handleChange}
                    style={ this.style1(100) }

                  /> 
        

            <div className="box box-1">
              <img src={ this.props.imgURL1 } alt="paper" />
              <label> { this.props.player1 } <sub> { this.props.scorePlayer1 } </sub> </label>
              <select onChange={ this.props.handleChoice } name="choice" >
                  <option>Stone</option>
                  <option>Paper</option>
                  <option>Scissor</option>
              </select>
            </div>

            <button className="play" onClick={ this.props.handleClick }> Play </button>

            <div className="box box-2">
              <img src={ this.props.imgURL2 } alt="Stone" />
              <label> { this.props.player2 } <sub> { this.props.scorePlayer2 } </sub> </label>
            </div>

            <div className="buttons">
              <button className="Restart" onClick={this.props.restartButton}> Restart </button>
              <button className="End-Game" onClick={this.props.endGame}> End Game </button>
            </div>

          </main>
        )
    }
}

export default PvC