import React from  'react' ;


export const FormControlWrapper = (props) => {
    return (
        <div className="form-group row">
            <label className="col-form-label text-right col-md-3 col-sm-6 col-xs-12 text-left-xs"> 
                {props.label} :
            </label>
            <div className="col-md-9 col-sm-6 col-xs-12">
                {props.children} 
            </div>
        </div>

    )
}