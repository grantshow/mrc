
var Mrc = React.createClass({
  getInitialState: function() {
    return {
      stack: null,
      blinds: null,
      players: 9
    }
  },
  handleChange: function(e) {
    var state = {}
    state[e.target.name] = e.target.value
    this.setState(state)

    this.calculateStatus()
  },
  calculateStatus: function() {
    var stack = this.state.stack
    var blinds = this.state.blinds
    var players = this.state.players

    if (stack && blinds) {

      // Do some maths
      if (players && players > '0') {
        var mratio = Math.floor((stack/blinds)*(players/9));
      } else {
        var mratio = Math.floor(stack/blinds);
      }

      // Set the zone
      if (mratio > 19) {
        var zone = 'green'
      } if (mratio >= 10 && mratio < 20) {
        var zone = 'yellow'
      } if (mratio >= 6 && mratio < 10) {
        var zone = 'orange'
        var zdisplay = mratio
      } if (mratio >= 1 && mratio < 6) {
        var zone = 'red'
        var zdisplay = mratio
      } if (mratio < 1) {
        var zone = 'dead'
        var zdisplay = mratio
      }

      this.setState({zone: zone, mratio: mratio})
    }
  },
  render: function() {

    if (this.state.stack && this.state.blinds) {
      var answer = (
        <div>
          <div>Your mratio is {this.state.mratio}</div>
          <div>Your zone is {this.state.zone}</div>
        </div>
      )
    } else {
      var answer = <div>Unknown...</div>
    }

    return (
      <form class="mzcalc">
          {answer}

          <div class="form-group">
              <label>Stack</label>
              <input class="text-input stack" name='stack' onChange={this.handleChange} value={this.state.stack} type="text" pattern="\d*" /><br />
          </div>

          <div class="form-group">
              <label>Blinds</label>
              <input class="text-input blinds" name='blinds' onChange={this.handleChange} value={this.state.blinds} type="text" pattern="\d*" /><br />
          </div>

          <div class="form-group">
              <label class="players-label">Players</label>
              <input class="text-input players" name='players' onChange={this.handleChange} value={this.state.players} type="text" pattern="\d*" /><br />
          </div>

          <p><a id="calculate" a href="#">Calculate</a></p>
      </form>
    )
  }
})


React.render(<Mrc />, document.getElementById('mrc'))
