import React from 'react';
import axios from 'axios';

class DetailCharacter extends React.Component {
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
        // Get id from url
        const id = window.location.pathname.split('/').pop();
        // Make an API call to fetch your data
        axios.get('https://rickandmortyapi.com/api/character/' + id)
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

    postLocation = () => {
        const location_name = document.getElementById('location_name').value;
        const id_character = document.querySelector('input[name="id_character"]').value;

        axios.post('https://mostrans.getapi.my.id/api/location/add', {
            location: location_name,
            id_char: id_character
        })
        .then(response => {
            if (response.data.message === 'Character ID already exists')
            {
                alert('Error: Character ini sudah memiliki lokasi yang ditambahkan!');
            }
            else {
                alert('Success: Lokasi berhasil ditambahkan!');
            }
            document.getElementById('location_name').value = '';
            document.querySelector('input[name="id_character"]').value = '';
            document.querySelector('button[data-bs-dismiss="modal"]').click();
        })
        .catch(error => {
            alert('Error: Character ini sudah memiliki lokasi yang ditambahkan!');
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div className="col-md-12 d-flex justify-content-center align-content-center mt-3">
                <div className="card" style={{ width:250 }}>
                    <img src={data.image} alt={data.name} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{data.name}</h5>
                        <p className="text">Status : {data.status}</p>
                        <p className="text">Spesies : {data.species}</p>
                        <p className="card-text">Jenis Kelamin: {data.gender}</p>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#locationModal">
                                Tambah Lokasi
                            </button>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="locationModal" tabIndex="-1" role="dialog" aria-labelledby="locationModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="locationModalLabel"> Tambah Lokasi</h5>
                            </div>
                            <div className="modal-body">
                                <label htmlFor="AddLocation">Lokasi:</label>
                                <input type="text" className="form-control" name="location_name" id="location_name" />
                                <input type="hidden" name="id_character" value={data.id || ''} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                <button type="button" className="btn btn-primary" onClick={this.postLocation}>Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailCharacter;