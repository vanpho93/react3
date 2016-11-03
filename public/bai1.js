function al(){
  alert(123);
}

var txt = 'Khoa Pham abc';

var InputDiv = React.createClass(
  {
    render: function(){
      return(
        <div>
          <input type="text" placeHolder="Enter your note" /><br/><br/>
          <button> Save </button>
        </div>
      )
    }
  }
);

var Note = React.createClass({
  render(){
    return(
      <div className="div-note">
        <h3>{this.props.children}</h3>
        <button onClick={al}>{txt}</button>
      </div>
    )
  }
});

var List = React.createClass(
  // github.com/vanpho93/react3
  {
    add(){
      this.setState({mang: this.state.mang.concat("PHP")});
    },
    getInitialState(){
      return {mang: ["Android", "iOS", "Node"]}
    },
    render(){
      var xhtml = this.state.mang.map(function(monHoc, index){
        return (
          <div key={index}>
            <Note>{monHoc}</Note>
          </div>);
      });
      return (
        <div>
          <div id="placeToAdd"></div>
          <button onClick={addNewNote}>Add a new Note</button>
          <button onClick={this.add}>Add acdfdfdfd</button>
          {xhtml}
        </div>
      )

    }
  }
);

ReactDOM.render(
  <div>
    <List/>
  </div>, document.getElementById('root')
);

function addNewNote(){
  ReactDOM.render(<InputDiv/>, document.getElementById('placeToAdd'));
}
