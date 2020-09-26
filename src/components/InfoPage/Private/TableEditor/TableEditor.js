import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt} from "@fortawesome/free-solid-svg-icons";
import {InfoContext} from '../../components/Context';
import TipIcon from './Private/TipIcon';
import './TableEditor.scss';



class TableEditor extends React.Component {
    static contextType =  InfoContext;
    constructor(props) {
        super(props);
        const {title,value,key,tip} = this.props.item;
        this.inputRef = React.createRef();
        this.state = {
            hideEditor: true,
            currentValue: value,
            key,
            title,
            tip,
            onChange: '',
        }
        this.toggleEditor = this.toggleEditor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.onClickEditor = this.onClickEditor.bind(this);
    }


    onClickEditor() {
        this.inputRef.current.focus();
        this.toggleEditor();
    }

    toggleEditor() {
        this.setState(prevState => ({
            hideEditor: !prevState.hideEditor
        }))
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.onChange(this.state.key, this.state.currentValue);
        this.toggleEditor();
    }

    updateDisplay(inputValue) {
        this.setState({
            currentValue: inputValue
        });
    }

    handleChange(e) {
        this.updateDisplay(e.target.value)
    }

    handleBlur() {
        this.updateDisplay(this.props.value);
        this.toggleEditor();
    }

    componentDidUpdate() {
        if (!this.state.hideEditor) {
            this.inputRef.current.focus();
        }
    }

    componentDidMount() {
        const context = this.context;
        this.setState({
            onChange: context
        })
    }

    render() {
        const { hideEditor, currentValue,title, tip } = this.state;
        let underline = "underline "
        if (!hideEditor) {
            underline += "underline--active "
        }

        return (
            <div className="tableEditor">
                <div className="tableEditor__left">
                    <div className="tableEditor__left__title">
                        {title}
                        {tip ?
                            <div className="tableEditor__left__title__info" >
                                <TipIcon/>
                            </div>
                            :
                            ""
                         }
                    </div>
                    <form onSubmit={this.handleSubmit}
                    >
                        <input ref={this.inputRef} className='tableEditor__left__input '
                            disabled={hideEditor}
                            value={currentValue}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                        />
                    </form>

                </div>
                {hideEditor ?
                    <div className="tableEditor__right">
                        <button className="tableEditor__right__btn nakedBtn" onClick={this.onClickEditor}>
                            <FontAwesomeIcon className='tableEditor__right__btn__icon' icon={faPencilAlt} />
                        </button>
                    </div>
                    :
                    ""
                }
                <div className={underline + 'underline__green'} />
            </div>
        )
    }
}



export default TableEditor;