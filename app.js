function WelcomeFunc ({name, children}){
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {
    render(){
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>
            {this.props.children}
        </p>
    </div>
    }

}

class Clock extends React.Component {

    constructor(props){
        super(props)
        this.state = {date: new Date()}
        this.timer = null;
    }

    componentDidMount(){
        this.timer = window.setInterval(this.tick.bind(this),1000)
    }

    componentwillUnmont(){
        window.clearInterval(this.timer)
    }

    tick () {
        this.setState({date: new Date()})
    }

    render(){
        const date = new Date()
        return <div>
            Il est {date.toLocaleDateString()} {date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component {
    constructor(props){
        super(props)
        this.state = {n: props.start}
        this.timer = null
    }

    componentDidMount () {
        window.setInterval(this.Increment.bind(this), 1000);
    }

    componentwillUnmont () {
        window.clearInterval(this.timer)
    }

    Increment () {
        this.setState(function (state, props ) {
            return {n: state.n + props.step}
        })
    }

    render () {
        return <div>Valeur : {this.state.n}</div>
    }
}

Incrementer.defaultProps = {
    start: 0,
    step: 1
}

function Home (){
    return <div>
        <Welcome name = "Darothée" />
        <Welcome name = "Jean" />
        <Clock />
        <Incrementer start={10} />
        <Incrementer start={10} step={10} />
    </div>
}

ReactDOM.render(<Home />, document.querySelector('#app'))