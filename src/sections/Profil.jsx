function Profil() {
    return (
        <section id="profil" className="card flex flex-col items-center bg-indigo-600 rounded-2xl overflow-hidden shadow-lg max-w-sm gap-4 ">
            <img src="../../public/bird.jpg" alt="Oiseau" className="w-full h-40 object-cover" />
            <div className="text-center text-white">
                <p>Couilles</p>
                <p>2</p>
                <p>PIAF</p>
            </div>
        </section>
    );
}

export default Profil;