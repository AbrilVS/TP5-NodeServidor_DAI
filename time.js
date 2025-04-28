/*
const hora=()=> {
    let hora=new Date()
    let horita=hora.getHours();

    return horita

}
const fecha=()=>{
    let fecha=new Date()
    return fecha.toLocaleString();
}
*/
export default function getHora() {

    let aa={
        hora:new Date().getHours(),
        mins: new Date().getMinutes(),
        horaCompleta: `${new Date().getHours()} : ${new Date().getMinutes()}`,
        dia: new Date().getDay(),
        mes: new Date().getMonth(),
        fechaCompleta: `Mes:${new Date().getMonth()}, Dia:${new Date().getDay()}  ${new Date().getHours()}:${new Date().getMinutes()}`
        


    }

    return aa;
}