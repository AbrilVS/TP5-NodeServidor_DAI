const hora=()=> {
    let hora=new Date()
    return hora.getHours();

}
const fecha=()=>{
    let fecha=new Date()
    return fecha.toLocaleString();
}


export default {hora, fecha}