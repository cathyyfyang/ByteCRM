import React, { Component } from 'react';
import Modal from '../../Modal';
import Basic from './components/Basic';
import Activities from '../../Activities';
import Navbar from "../../Navbar";
import { ThemeProvider} from '@material-ui/core/styles';
import { ContactContext } from '../ContactContext';
import {checkbox} from '../../Style/Theme/MatUITheme';
import './ContactMain.scss';

class ContactMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Xaxis: 300,
            Yaxis: 50,
            visible: false,
            currentModal: "",
            theme:checkbox
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.testContext = this.testContext.bind(this);
    }

    openModal(selectedModal) {
        this.setState({
            visible: true,
            currentModal: selectedModal,

        });
        console.log("open the modal " + this.state.visible)
    }

    testContext() {
        console.log('receive context');
    }

    closeModal() {
        this.setState({
            visible: false,
        });
        console.log("close the modal " + this.state.visible)
    }

    render() {
        const { visible, currentModal,theme } = this.state
        return (
            <div>
                <ContactContext.Provider value={this.openModal}>
                    <header>
                        <Navbar />
                    </header>
                    <ThemeProvider theme={theme}>
                        <div className="Main">
                            <Basic openModal={this.openModal}
                            />
                            <div className="activities">
                                <Activities />
                            </div>
                            <div className="Company">
                                <p>Company component</p>
                            </div>
                            <Modal Xaxis={this.state.Xaxis}
                                Yaxis={this.state.Yaxis}
                                visible={visible}
                                currentModal={currentModal}
                                closeModal={this.closeModal}
                            />
                        </div>
                    </ThemeProvider>
                </ContactContext.Provider>
            </div>

        )
    }

}


export default ContactMain;