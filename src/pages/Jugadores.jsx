import dataPlayers from "./data/dataplayers.json"

export const Jugadores = ()=>{
    const data = dataPlayers


    return <div className="flex flex-col items-center justify-center font-poppins">
        <h2 className="my-8 text-2xl text-center lg:text-5xl font-bold">Plantel Futbol Profesional 2023/2024</h2>
        <section className="flex flex-col items-center justify-center my-4">
                <div>
                    <h3 className="text-2xl font-semibold text-center">Arqueros</h3>
                    <div className="flex items-center justify-center flex-wrap">
                    {
                        data.arqueros.map(data=>(
                            <div className="w-80 lg:w-96 h-96 p-3 text-center flex flex-col items-center justify-center mx-6 my-5 border-2 rounded-2xl border-red-600" key={data.nombre_completo}>
                                <img className="object-contain h-52" src={data.img} alt={data.img} />
                                <h3 className="text-xl font-semibold">{data.nombre_completo}</h3>
                                <div className="flex justify-center my-1 font-medium">Numero: <p className="mx-1 font-normal">{data.numero_camiseta}</p></div>
                                <div className="flex justify-center my-1 font-medium">Fecha de nacimiento: <p className="mx-1 font-normal">{data.fecha_nacimiento}</p></div>
                                <div className="flex justify-center my-1 font-medium">Lugar de nacimiento: <p className="mx-1 font-normal">{data.lugar_nacimiento}</p></div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-center">Defensores</h3>
                    <div className="flex flex-wrap justify-center">
                    {
                        data.defensores.map(data=>(
                            <div className="w-80 lg:w-96 p-3 text-center flex flex-col items-center justify-center mx-6 my-5 border-2 rounded-2xl border-red-600" key={data.nombre_completo}>
                                <img className="object-contain h-52" src={data.img} alt={data.img} />
                                <h3 className="text-xl font-semibold">{data.nombre_completo}</h3>
                                <div className="flex justify-center my-1 font-medium">Numero: <p className="mx-1 font-normal">{data.numero_camiseta}</p></div>
                                <div className="flex justify-center my-1 font-medium">Fecha de nacimiento: <p className="mx-1 font-normal">{data.fecha_nacimiento}</p></div>
                                <div className="flex justify-center my-1 font-medium">Lugar de nacimiento: <p className="mx-1 font-normal">{data.lugar_nacimiento}</p></div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-center">Mediocampistas</h3>
                    <div className="flex flex-wrap justify-center">
                    {
                        data.mediocampistas.map(data=>(
                            <div className="w-80 lg:w-96 p-3 text-center flex flex-col items-center justify-center mx-6 my-5 border-2 rounded-2xl border-red-600" key={data.nombre_completo}>
                                <img className="object-contain h-52" src={data.img} alt={data.img} />
                                <h3 className="text-xl font-semibold">{data.nombre_completo}</h3>
                                <div className="flex justify-center my-1 font-medium">Numero: <p className="mx-1 font-normal">{data.numero_camiseta}</p></div>
                                <div className="flex justify-center my-1 font-medium">Fecha de nacimiento: <p className="mx-1 font-normal">{data.fecha_nacimiento}</p></div>
                                <div className="flex justify-center my-1 font-medium">Lugar de nacimiento: <p className="mx-1 font-normal">{data.lugar_nacimiento}</p></div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-center">Delanteros</h3>
                    <div className="flex flex-wrap justify-center">
                    {
                        data.delanteros.map(data=>(
                            <div className="w-80 lg:w-96 p-3 text-center flex flex-col items-center justify-center mx-6 my-5 border-2 rounded-2xl border-red-600" key={data.nombre_completo}>
                                <img className="object-contain h-52" src={data.img} alt={data.img} />
                                <h3 className="text-xl font-semibold">{data.nombre_completo}</h3>
                                <div className="flex justify-center my-1 font-medium">Numero: <p className="mx-1 font-normal">{data.numero_camiseta}</p></div>
                                <div className="flex justify-center my-1 font-medium">Fecha de nacimiento: <p className="mx-1 font-normal">{data.fecha_nacimiento}</p></div>
                                <div className="flex justify-center my-1 font-medium">Lugar de nacimiento: <p className="mx-1 font-normal">{data.lugar_nacimiento}</p></div>
                            </div>
                        ))
                    }
                    </div>
                </div>
        </section>
    </div>
}