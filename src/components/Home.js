import Hero from './Hero';

const Home = () => {
    return (
    <>
    <Hero text="Welcome to React 201" />
    <div className="container">
        <div className="row">
            <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, 
            repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
            </p>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home;