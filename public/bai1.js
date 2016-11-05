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
  save(){
    var noiDung = this.refs.txt.value;
    var id = this.props.id;
    var note = this;

    // $.post("/update", {id: id, noiDung: noiDung}, function(data){
    //   that.setState({mang: data});
    //   note.setState({onEdit: false});
    // });

    $.post("/update", {id: id, noiDung: noiDung},
    (data)=>
      {
        that.setState({mang: data});
        this.setState({onEdit: false});
      }
    );

  },
  cancel(){
    this.setState({onEdit: false});
  },
  update(){
    this.setState({onEdit: true});
  },
  getInitialState(){
    return {onEdit: false}
  },
  delete(){
    $.post("/delete", {id: this.props.id}, function(data){
      that.setState({mang: data});
    });
  },
  render(){
    var xhtml = this.state.onEdit?
      <input defaultValue={this.props.children} ref="txt"/>:
      <h3>{this.props.children}</h3>;

    var htmlControl = !this.state.onEdit?
    <div>
      <button onClick={this.delete}>Xóa</button>
      <button onClick={this.update}>Sửa</button>
    </div>:
    <div>
      <button onClick={this.save}>Lưu</button>
      <button onClick={this.cancel}>Hủy</button>
    </div>
    return (
      <div className="div-note">
        {xhtml}
        {htmlControl}
      </div>
    );
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
            <Note id={index}>{monHoc}</Note>
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
