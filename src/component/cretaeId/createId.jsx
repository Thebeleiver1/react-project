import React, { Component } from 'react';
import DetailForm from './form'
import ShowId from './showId'
import '../../styles/createId.css'


class CreateId extends Component {

    state = {
        detail: {
            // cardNo: "",
            // liscenseNo: "",
            name: "",
            unitNo: "",
            address: "",
            city: "",
            postCode: "",
            dateOfBirth: "",
            expiryDate: "How Many Year",
            disable: false,
            disable1: false


        }

    }

    myRef = React.createRef()

    handleChange = e => {

        const detail = { ...this.state.detail }
        detail[e.currentTarget.name] = e.currentTarget.value

        this.handleOptionChange(e, detail)
        this.setState({ detail })



    }

    handleOptionChange = (e, obj) => {
        if ((e.currentTarget.name === "liscense") && (e.currentTarget.value === "P")) {
            obj.disable = true;
            obj.disable1 = true;
            obj.expiryDate = ""
            console.log(this.myRef.current.value)


        }
        else if ((e.currentTarget.name === "liscense") && (e.currentTarget.value === "P2")) {

            obj.disable = true;
            obj.disable1 = false;
            obj.expiryDate = ""


        }
        else if ((e.currentTarget.name === "liscense") && (e.currentTarget.value === "Full")) {
            obj.disable = false;
            obj.disable1 = false;
            obj.expiryDate = ""

        }



    }


    render() {

        return (

            <div id="container">

                <div className="detail-fom">
                    <DetailForm setRef={this.myRef} value={this.state.detail} onChange={this.handleChange} />
                </div>
                <div className="deatil-view">
                    <ShowId value={this.state.detail} />
                </div>
            </div>);
    }
}

export default CreateId;