import React from 'react';


export const MainView = (props) => {

    return (
        <>
            <div className="row">

                <div className="col-md-6 text-right">
                    FIO:
                </div>
                <div className="col-md-6">
                    {props.data.fio}
                </div>
            </div>


            <div className="row">

                <div className="col-md-6 text-right">
                    SEX:
                </div>
                <div className="col-md-6">
                    {props.data.sex}
                </div>
            </div>
        </>
    )
}