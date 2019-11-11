import React from "react";
import CustomerActions from "../../actions/CustomerActions";
import PropTypes from 'prop-types'

/**
 * *Component with input fields for creating a customer record in the CRM
 * @param modal boolean / if true this component renders with a submit button for quick create inside a modal
 */
export class CustomerCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //values from input values
            ssn: "",
            firstname: "",
            lastname: "",
            bday: "",
            email: "",
            street1: "",
            street2: "",
            city: "",
            state: "",
            zip: ""
        };

        //field change methods
        this.ssnFieldChange = this.ssnFieldChange.bind(this);
        this.firstNameFieldChange = this.firstNameFieldChange.bind(this);
        this.lastNameFieldChange = this.lastNameFieldChange.bind(this);
        this.bdayFieldChange = this.bdayFieldChange.bind(this);
        this.emailFieldChange = this.emailFieldChange.bind(this);
        this.street1FieldChange = this.street1FieldChange.bind(this);
        this.street2FieldChange = this.street2FieldChange.bind(this);
        this.cityFieldChange = this.cityFieldChange.bind(this);
        this.stateFieldChange = this.stateFieldChange.bind(this);
        this.zipFieldChange = this.zipFieldChange.bind(this);
        this.startCreation = this.startCreation.bind(this); //the submit action
    }

    //*the field change methods are bound to the class
    //*when the field's value changes the event triggers an event
    //*the event is passed as a param and the targets value is stored in the component's state
    firstNameFieldChange(e) {
        this.setState({ firstname: capitalize(e.target.value) });
    }
    lastNameFieldChange(e) {
        this.setState({ lastname: capitalize(e.target.value) });
    }
    bdayFieldChange(e) {
        this.setState({ bday: e.target.value });
    }
    ssnFieldChange(e) {
        this.setState({ ssn: e.target.value });
    }
    emailFieldChange(e) {
        this.setState({ email: e.target.value.toLowerCase() });
    }
    street1FieldChange(e) {
        this.setState({ street1: e.target.value.toUpperCase() });
    }
    street2FieldChange(e) {
        this.setState({ street2: e.target.value.toUpperCase() });
    }
    cityFieldChange(e) {
        this.setState({ city: e.target.value.toUpperCase() });
    }
    stateFieldChange(e) {
        this.setState({ state: e.target.value.toUpperCase() });
    }
    zipFieldChange(e) {
        this.setState({ zip: e.target.value });
    }
    /**
     * submits the values provided to create a new record
     */
    startCreation() {
        CustomerActions.createCustomer(this.state); //**! Place Action Method Here and pass the state of this component */
        this.props.modalClose();
    }

    render() {
        let display = ( //display's the form
            <div className="">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        onChange={this.firstNameFieldChange}
                        className="form-control"
                        placeholder="Enter first name.."
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            First Name
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        onChange={this.lastNameFieldChange}
                        className="form-control"
                        placeholder="Enter last name.."
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            Last Name
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="date"
                        onChange={this.bdayFieldChange}
                        className="form-control"
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            Birthdate
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        onChange={this.ssnFieldChange}
                        className="form-control"
                        placeholder="Enter Social Security Number"
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            Social Security Number
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="email"
                        onChange={this.emailFieldChange}
                        className="form-control"
                        placeholder="Enter email address.."
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            Email
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        onChange={this.street1FieldChange}
                        className="form-control"
                        placeholder="Enter line 1 of street address.."
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            Street 1
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        onChange={this.street2FieldChange}
                        className="form-control"
                        placeholder="Enter line 2 of street address.."
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            Street 2
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        onChange={this.cityFieldChange}
                        className="form-control"
                        placeholder="Enter city of residence.."
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            City
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        onChange={this.stateFieldChange}
                        className="form-control"
                        maxLength="2"
                        placeholder="Enter state abbreviation.."
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            State
            </span>
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        onChange={this.zipFieldChange}
                        className="form-control"
                        placeholder="Enter zip code.."
                    />
                    <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                            Zip Code
            </span>
                    </div>
                </div>
                <hr />
            </div>
        );

        let button = "";//to render a button
        if (this.props.modal === true) {//if this form is in a quick create modal, display the submit button
            button = (
                <div>
                    <button
                        onClick={this.startCreation} //triggers the create action
                        className="btn btn-block btn-primary btn-lg"
                    >
                        SUBMIT
          </button>
                    <hr />
                </div>
            );
        }

        return (
            <div className="">
                {display}
                {button}
            </div>
        );
    }
}

/**
 * *Formats names and labels to capitalize the first letter while lowering the others / also takes multi word strings into consideration
 * @param name the string to be formatted
 */
const capitalize = name => {
    if (typeof name !== "string") {//check the type of the value to make sure string methods can be applied 
        return "";
    } else {
        let lowercased = name.toLowerCase()//lowercase the entire string
        let capped = [];//array of capitalized words
        let forMultiWordName = lowercased.split(" ");//will create an array of lowercased words, if its only one word the array will only contain that one word
        forMultiWordName.map(element => {//will capitalize the first letter of each word in the array and add the word to the capped array
            capped.push(element.charAt(0).toUpperCase() + element.slice(1));
        });
        let newName = "";//the new name
        capped.forEach(element => {//concatenate the elements, seperating them by a space
            newName += `${element} `;
        });

        return newName.trim();//delete the space at the end of the string
    }
};


CustomerCreator.propTypes = {
    modal: PropTypes.bool.isRequired,
    modalClose: PropTypes.func
};
