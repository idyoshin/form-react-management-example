import React, {useState} from 'react'

import { FormControlWrapper } from './FormControlWrapper';

import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css'


export const MainForm = (props) => {

    console.log("Starting rendering");
    

    const {data, setData} = props;

    const inputHandler = (event) => {
        setData({
            ...data, 

            [event.target.name] : event.target.value
        })
    }

    return (
        <form className="col-md-12 col-sm-12 col-xs-12 form-horizontal">

            <FormControlWrapper label="ФИО">
                <input type="text" 
                        name="fio"
                        value={data.fio}
                        onChange={inputHandler}
                        className="form-control" 
                        placeholder="ФИО" 
                        title="Только Кириллица" 
                        required /> 
            </FormControlWrapper>


            <FormControlWrapper label="Выберите пол">
                <select value={data.sex}
                        name="sex"
                        onChange={inputHandler}
                        className="form-control" >
                    <option value="">Выберите пол</option>
                    <option value="MALE">Мужской</option>
                    <option value="FEMALE">Женский</option>
                </select>
            </FormControlWrapper>
        


            <div classNam="form-actions">


                <Link to="/view">View</Link>
            </div>
        </form>
    )
}