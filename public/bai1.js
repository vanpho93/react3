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
    render: function(){
      return(
        <div>
          <input type="text" ref= "txt" placeHolder="Enter your note" /><br/><br/>
          <button onClick={()=>{addText(this.refs.txt.value)}}> Save </button>
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

var ABC = React.createClass(
  {
    getInitialState(){
      return {onEdit: true}
    },
    render(){
      var xhtml;
      var txt = this.props.children;
      if(this.state.onEdit){
        return <input type="text" defaultValue="{txt}"/>
      }else{
        return <p>{this.props.children}</p>
      }
    }
  }
);

ReactDOM.render(<ABC>dafdsafd</ABC>, document.getElementById('root2'));
