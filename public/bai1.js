var that;

function al(){
  alert(123);
}

function addText(ten){
  that.state.mang.unshift(ten);
  that.setState(that.state);
  ReactDOM.unmountComponentAtNode(document.getElementById('placeToAdd'));
}

var txt = 'Khoa Pham abc';

var InputDiv = React.createClass(
  {
    add(){
        var text = this.refs.txt.value;
        $.post('/add', {noiDung: text}, function(data){
            that.setState({mang: data});
        });
    },
    render: function(){
      return(
        <div>
          <input type="text" ref= "txt" placeholder="Enter your note" /><br/><br/>
          <button onClick={this.add}> Save </button>
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
      this.state.mang.push("PHP");
      this.setState(this.state);
    },
    getInitialState(){
      that = this;
      return {mang: []}
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

$.get("/info", function(data){
    that.setState({mang: data});
});

function addNewNote(){
  ReactDOM.render(<InputDiv/>, document.getElementById('placeToAdd'));
}

var ABC = React.createClass(
  {
    change(){
      this.setState({onEdit: !this.state.onEdit});
    },
    getInitialState(){
      return {onEdit: true}
    },
    render(){
      var xhtml;
      if(this.state.onEdit){
        xhtml = <input type="text" defaultValue={this.props.children}/>
      }else{
        xhtml = <p>{this.props.children}</p>
      }
      return(
        <div>
          {xhtml}
          <button onClick={this.change}>Change</button>
        </div>
      )
    }
  }
);

//ReactDOM.render(<ABC>dafdsafd</ABC>, document.getElementById('root2'));
