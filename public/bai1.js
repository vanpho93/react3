function al(){
  alert(123);
}

var txt = 'Khoa Pham abc';

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
  {
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
          <button onClick={addNewNote}>Add a new Note</button>
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
  alert('Them note');
}
