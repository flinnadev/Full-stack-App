import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicks: 0,
    };
  }

  handleClick = () => {
    // alert('click');
    // this.state.clicks += 1;

    // this.setState({
    //   clicks: this.state.clicks + 1
    // });

    // this.setState({
    //   clicks: this.state.clicks + 1
    // });

    this.setState((state) => {
      return {
        clicks: state.clicks + 1,
      };
    });

    // this.setState((state) => {
    //   return {
    //     clicks: state.clicks + 1,
    //   };
    // });
  };

  handleReset = () => {
    this.setState({
      clicks: 0,
    });
  };

  componentDidMount() {
    console.log("запускається на першому рендері");

    this.intervalId = setInterval(() => {
      console.log("fake click");
      this.setState((state) => {
        return {
          clicks: state.clicks + 1,
        };
      });
    }, 2000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("запускається на усіх наступних ререндерах після першого");

    if (Math.random() > 0.5) {
      this.setState({
        clicks: this.state.clicks + 1,
      });
    }
  }

  componentWillUnmount() {
    console.log("запускається перед розмонтуванням компонента");

    clearInterval(this.intervalId);
  }

  render() {
    const {
      task: { title },
    } = this.props;

    const { clicks } = this.state;

    // this.props.task.title = 'Not task name'; // Не можна мутувати свої пропси

    // this.state.clicks = 100;

    return (
      <div>
        <h2>Class component</h2>
        <p>{title}</p>
        <p>Clicks: {this.state.clicks}</p>
        <button onClick={this.handleClick}>Click me</button>
        <button onClick={this.handleReset}>Reset clicks</button>
      </div>
    );
  }
}

export default ClassComponent;
