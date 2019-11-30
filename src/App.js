import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';




class App extends React.Component{
    constructor(props) {
    super(props);
    this.state = {
          valeur1:this.valeur1,
          valeur2:this.valeur2,
          valeur3:this.valeur3,
          valeur4:this.valeur4,
          valeur5:this.valeur5,
          valeur6:this.valeur6,
        };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({valeur1: event.target.value});
    this.setState({valeur2: event.target.value});
  }

  handleSubmit(event) {
    var xValue=Math.random(this.valeur1)*100;
    var xValue2=Math.random(this.valeur2)*100;
    var xValue3=Math.random(this.valeur3)*100;
    var xValue4=Math.random(this.valeur4)*100;
    var xValue5=Math.random(this.valeur5)*100;
    var xValue6=Math.random(this.valeur6)*100;

    document.getElementById('res1').value= Math.floor(xValue/2)+1;
    document.getElementById('res2').value= Math.floor(xValue2/2)+1;
    document.getElementById('res3').value= Math.floor(xValue3/2)+1;
    document.getElementById('res5').value= Math.floor(xValue5/2)+1;
    document.getElementById('res4').value= Math.floor(xValue4/2)+1;
    document.getElementById('res6').value= Math.floor(xValue6/2)+1;

    event.preventDefault();
  }



  render() {
  return (
    <div className="App">
      <header className="App-header">
<div class="form-group">
        <form onSubmit={this.handleSubmit}>
          <Container fluid={true}>
          <div class="input-group mb-3">
            <Row>
              <Col>
            <label class="form-control" for="res1">num 1</label>
            </Col>


              <Col>
          <input class="form-control" type="text" id="res1" value={this.state.value} onChange={this.valeur1} />
            </Col>
        </Row>
        </div>
        <div class="input-group mb-3">
          <Row>
            <Col>
          <label class="form-control" for="res2">num 2</label>
          </Col>
            <Col>
          <input class="form-control" type="text" id="res2" value={this.state.value} onChange={this.valeur2} />
          </Col>
        </Row>
        </div>
        <div class="input-group mb-3">
          <Row>
            <Col>
          <label class="form-control" for="res3">num 3</label>
          </Col>
            <Col>
          <input class="form-control" type="text" id="res3" value={this.state.value} onChange={this.valeur3} />
          </Col>
        </Row>
        </div>
        <div class="input-group mb-3">
          <Row>
            <Col>
          <label class="form-control" for="res4">num 4</label>
          </Col>
            <Col>
          <input class="form-control" type="text" id="res4" value={this.state.value} onChange={this.valeur4} />
          </Col>
        </Row>
        </div>
        <div class="input-group mb-3">
          <Row>
            <Col>
          <label class="form-control" for="res5">num 5</label>
          </Col>
            <Col>
          <input class="form-control" type="text" id="res5" value={this.state.value} onChange={this.valeur5} />
          </Col>
        </Row>
        </div>
        <div class="input-group mb-3">
          <Row>
            <Col>
          <label class="btnred form-control" style={{background:"#2b3845",color:"#fff"}} for="res6">num 6</label>
          </Col>
            <Col>
          <input class="form-control" style={{background:"#2b3845",color:"#fff"}} type="text" id="res6" value={this.state.value} onChange={this.valeur6} />
          </Col>
        </Row>
        </div>
          <div class="input-group mb-3">
          <Row>
          <Col>
              <input class="btn btn-primary btn-s form-control" type="submit" value="Submit" />
                <input class="btn btn-primary btn-s form-control" type="reset" value="Reset" />
          </Col>
          </Row>
</div>
</Container>
      </form>
</div>
      </header>
    </div>
  );
}
}

export default App;
