class VisToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleTogVis = this.handleTogVis.bind(this);
        this.state = {
            vis: false
        };
    }
    
    handleTogVis(){
        this.setState((prevState) => {
            return {
                vis: !prevState.vis
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visbility Toggle</h1>
                <button onClick={this.handleTogVis}>
                    {this.state.vis ? 'Hide' : 'Show'}
                </button>
                {this.state.vis && (
                    <div>
                        <p> am i visible?</p>
                    </div>
                )}
            </div>
        )
    }
}


ReactDOM.render(<VisToggle />, document.getElementById('app'));