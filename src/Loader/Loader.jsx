import loader from '../assets/images/loader.svg';

const Loader = ()=> {
    return (
        <div className="loader">
            <img src={loader} alt="loading"/>
        </div>
    )
}

export default Loader;