import MostMuscularImg from '../static/most_muscular.png';

function Home() {

    return (

        <div className="bg-[url('/src/static/most_muscular.png')]
         h-[90vh] bg-[center] bg-cover text-white">
            <div className="grid grid-rows-5 grid-cols-1 h-full font-sans">
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <h1 className="m-0 px-3 text-4xl">Descubre un método de coaching personalizado.</h1>
                    <h3 className="p-3">Enfoque basado en la ciencia y adaptado a ti.</h3>
                    <div className="p-3 grid ">
                        <button className="bg-gradient-to-t from-success to-success-500 rounded-lg p-8 font-bold text-white">Aplica para Coaching 1:1</button>
                    </div>

                </div>
            </div>
        </div>
        
    )
}

export default Home;