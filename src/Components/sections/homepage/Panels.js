import React, {Component} from 'react';


class Panels extends Component{

    constructor(props){
        super(props);

        this.state = {
            open: false,
            open1: false,
            open2: false,
            open3: false,
            open4: false
        };

        this.toggleOpen = this.toggleOpen.bind(this);
        this.toggleOpen1 = this.toggleOpen1.bind(this);
        this.toggleOpen2 = this.toggleOpen2.bind(this);
        this.toggleOpen3 = this.toggleOpen3.bind(this);
        this.toggleOpen4 = this.toggleOpen4.bind(this);
        this.toggleTransitioned = this.toggleTransitioned.bind(this);
    }

    toggleTransitioned(e){
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    toggleOpen(){
        const currentState = this.state.open;

        this.setState({
            open: !currentState
        });
    }

    toggleOpen1(){
        const currentState = this.state.open1;

        this.setState({
            open1: !currentState
        });
    }

    toggleOpen2(){
        const currentState = this.state.open2;

        this.setState({
            open2: !currentState
        });
    }

    toggleOpen3(){
        const currentState = this.state.open3;

        this.setState({
            open3: !currentState
        });
    }

    toggleOpen4(){
        const currentState = this.state.open4;

        this.setState({
            open4: !currentState
        });
    }

    toggleActive(e) {
        console.log(e.propertyName);
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }

    render() {

        return(
            <section className="gallery-panel">
                <div className="panels">
                    <div className={this.state.open ? 'open panel panel1' : 'panel panel1'} onClick={this.toggleOpen}>
                        <p>Bóg</p>
                    </div>
                    <div className={this.state.open1 ? 'open panel panel2' : 'panel panel2'} onClick={this.toggleOpen1}>
                        <p>Wiara</p>
                    </div>
                    <div className={this.state.open2 ? 'open panel panel3' : 'panel panel3'} onClick={this.toggleOpen2}>
                        <p>Kościół</p>
                    </div>
                    <div className={this.state.open3 ? 'open panel panel4' : 'panel panel4'} onClick={this.toggleOpen3}>
                        <p>Miłość</p>
                    </div>
                    <div className={this.state.open4 ? 'open panel panel5' : 'panel panel5'} onClick={this.toggleOpen4}>
                        <p>Nauka</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Panels;