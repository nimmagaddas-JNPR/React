'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Question = function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question() {
    _classCallCheck(this, Question);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Question.prototype.render = function render() {
    return this.props.count != 8 ? React.createElement(
      'h1',
      { style: { color: 'navy' } },
      ' ',
      React.createElement(
        'h1',
        { style: { color: 'purple' } },
        'QUIZ'
      ),
      'What is ',
      this.props.name
    ) : React.createElement(
      'h1',
      null,
      'Thank you'
    );
  };

  return Question;
}(React.Component);

var Options = function (_React$Component2) {
  _inherits(Options, _React$Component2);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Options.prototype.render = function render() {
    var _this3 = this;

    return this.props.count != 8 ? React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { style: { padding: '10px 120px' }, onClick: function onClick() {
            _this3.props.clickHandler(_this3.props.count, _this3.props.id);
          } },
        this.props.name
      )
    ) : React.createElement('h1', null);
  };

  return Options;
}(React.Component);

function Restart(props) {
  return React.createElement(
    'button',
    { className: 'btn-primary', style: { backgroundColor: 'orange', padding: '10px 120px', fontSize: '20px' }, onClick: props.restart },
    props.name
  );
}

var Result = function (_React$Component3) {
  _inherits(Result, _React$Component3);

  function Result() {
    _classCallCheck(this, Result);

    return _possibleConstructorReturn(this, _React$Component3.apply(this, arguments));
  }

  Result.prototype.render = function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h4',
        { style: { backgroundColor: 'aliceblue' } },
        this.props.name,
        ':',
        this.props.value
      )
    );
  };

  return Result;
}(React.Component);

var App = function (_React$Component4) {
  _inherits(App, _React$Component4);

  function App(props) {
    _classCallCheck(this, App);

    var _this5 = _possibleConstructorReturn(this, _React$Component4.call(this, props));

    _this5.state = {
      ques: ["4-2", "2+2", "4+5", "California", "6%2", "Carrot", "10+10", "1+1", "Apple"],
      ops: [["77", "2", "55", "66"], ["55", "00", "11", "4"], ["48", "33", "9", "66"], ["city", "state", "street", "district"], ["64", "0", "11", "55"], ["Veg", "thing", "name", "fruit"], ["1", "3", "20", "6"], ["2", "3", "34", "78"], ["Veg", "thing", "fruit", "name"]],
      correct: 0,
      incorrect: 0,
      count: 0,
      ans: ["1", "3", "2", "2", "1", "0", "2", "0", "2"]

    };
    _this5.clickHandler = _this5.clickHandler.bind(_this5);
    _this5.restartHandler = _this5.restartHandler.bind(_this5);
    return _this5;
  }

  App.prototype.restartHandler = function restartHandler() {
    this.setState({ correct: 0, incorrect: 0, count: 0 });
  };

  App.prototype.clickHandler = function clickHandler(count, id) {
    var _this6 = this;

    if (id == this.state.ans[this.state.count]) {
      this.setState(function (prevState, props) {
        return { correct: prevState.correct + 1 };
      });
    } else {
      this.setState(function (prevState, props) {
        return { incorrect: prevState.incorrect + 1 };
      });
    }

    this.setState(function (prevState, props) {
      return { count: prevState.count + 1 };
    });

    this.setState(function (prevState, props) {
      if (_this6.state.incorrect + _this6.state.correct == 8) {
        return { res: res + 1 };
      }
    });
  };

  App.prototype.render = function render() {
    return React.createElement(
      'center',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'row' },
          React.createElement(
            'div',
            { className: 'col-sm-8' },
            React.createElement(Question, { name: this.state.ques[this.state.count], clickHandler: this.clickHandler, count: this.state.count }),
            React.createElement(Options, { id: 0, name: this.state.ops[this.state.count][0], clickHandler: this.clickHandler, count: this.state.count }),
            React.createElement(Options, { id: 1, name: this.state.ops[this.state.count][1], clickHandler: this.clickHandler, count: this.state.count }),
            React.createElement(Options, { id: 2, name: this.state.ops[this.state.count][2], clickHandler: this.clickHandler, count: this.state.count }),
            React.createElement(Options, { id: 3, name: this.state.ops[this.state.count][3], clickHandler: this.clickHandler, count: this.state.count })
          ),
          React.createElement(
            'div',
            { className: 'col-sm-4' },
            React.createElement(Result, { name: 'Correct', value: this.state.correct }),
            React.createElement(Result, { name: 'InCorrect', value: this.state.incorrect })
          )
        ),
        React.createElement(Restart, { name: 'Restart', restart: this.restartHandler })
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));