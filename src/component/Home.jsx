import ReactPaginate from 'react-paginate';
import React from 'react';
import axios from 'axios';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [], 
            perPage: 10,
            pageCount: [], 
            currentPage: [],
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {

        // Make an API call to fetch your data
        axios.get('https://rickandmortyapi.com/api/character/')
            .then(response => {
                this.setState({
                    data: response.data,
                    pageCount: Math.ceil(response.data.results.length / 10)
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    handlePageChange = ({ selected }) => {
        this.setState({
            currentPage: selected
        });
    }

    render() {
        const { data, currentPage, pageCount } = this.state;
        const startIndex = currentPage * 10;
        const endIndex = startIndex + 10;
        const paginatedData = data.results?.slice(startIndex, endIndex);
        
        return (
            <div className='mb-5'>
                <div className="container mt-5">
                    <div className="row">
                        {paginatedData?.map(item => (
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
                
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageChange}
                    containerClassName={'pagination text-center'}
                    activeClassName={'active pagination-active'}
                    forcePage={currentPage}
                />
            </div>
        );
    }
}

export default Home;