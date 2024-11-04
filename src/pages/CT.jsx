import data from "./data/datact.json";


export const CT = ()=>{

console.log(data)

    return <div className="flex flex-col justify-center items-center font-poppins">
        <h2 className="my-8 text-5xl font-bold">Cuerpo Tecnico 2023/2024</h2>
        <section className="flex flex-wrap justify-center">
            {
                data.map(data=>(
                    <div className="w-1/4 p-3 text-center flex flex-col items-center justify-center mx-6 my-5 border-2 rounded-2xl border-red-600" key={data.name}>
                    <img className="object-contain h-52" src={data.img} alt={data.img} />
                    <h3 className="text-xl font-semibold">{data.name}</h3>
                    <div className="flex justify-center my-2 font-medium">Fecha de nacimiento: <p className="mx-1 font-normal">{data.birth}</p></div>
                    <div className="flex justify-center mb-2 font-medium">Rol: <p className="mx-1 font-normal">{data.ocuppation}</p></div>
                </div>
                ))
            }
        </section>
    </div>
}