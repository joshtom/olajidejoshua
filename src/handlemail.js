import { Component } from 'react'


    class Mail extends Component {
        constructor(props) {
            super(props);
            this.sayAlert = this.sayAlert.bind(this);
        }

        sayAlert() {
            alert('This is my hello');
        }
    }

    export default Mail