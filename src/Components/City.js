import React from 'react'

function City(props){

    const {updatedCity, updatedCountry, fetchWeather} = props;


    return(
        <>
            <div className="container mt-5">
                
                <div className="row">
                    <div className="col-md-6 mx-auto main_col">
                        <h1>Weather App</h1>
                        <form onSubmit={fetchWeather}>
                        <div className="form-group">
                        <input 
                            type="text"
                            placeholder="City...."
                            className="form-control"
                            onChange={(e)=> updatedCity(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                        <input 
                            type="text"
                            placeholder="Country...."
                            className="form-control"
                            onChange={(e)=> updatedCountry(e.target.value)}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-dark mybtn">Search</button>
                        
                        </form>
                    </div>
                </div>
            </div>
            

        </>
    )
}

export default City