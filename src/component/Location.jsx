import React from 'react';
import axios from 'axios';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], 
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get('https://mostrans.getapi.my.id/api/location/data')
            .then(response => {
                this.setState({
                    data: response.data,
                    pageCount: Math.ceil(response.data.length / 10) 
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        const { data } = this.state;

        return (
            <>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        {data.map((item, index) => (
                            <div className="col-12 col-md-6 col-lg-4 mb-3" key={index}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{item.location_name}</h5>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a href={`/location/${item.location_name}`} className="btn btn-primary">Lihat Character</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Location;