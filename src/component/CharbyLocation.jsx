import React from 'react';
import axios from 'axios';


class CharbyLocation extends React.Component {
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

        const param = window.location.pathname.split('/').pop();
        axios.post('https://mostrans.getapi.my.id/api/location/char',{
            location: param
        }).then(response => {
            axios.get('https://rickandmortyapi.com/api/character/' + response.data)
                .then(response => {
                    this.setState({
                        data: response.data,
                    });
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        });
    }

    render() {
        const { data } = this.state;
        
        return (
            <div className='mb-5'>
                <div className="container mt-5">
                    <div className="row">
                        {data?.map(item => (
                            <div className="col-md-3 justify-content-center d-flex mt-5" key={item.id} >
                                <div className="card" style={{ width:250 }}>
                                    <img src={item.image} alt={item.name} className="card-img-top" />

                                    <div className="card-body">
                                        <h3 className="card-title">{item.name}</h3>
                                        <p className="card-text">Status : {item.status}</p>
                                        <div className="d-flex justify-content-center mt-3">
                                            <a href={`/character/${item.id}`} className="btn btn-primary">Lihat Detail</a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CharbyLocation;