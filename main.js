const app= new Vue({
    el: '#app',
    data: {
        titulo: 'Hola mundo con Vue',
        frutas: [
            {nombre:'Manzana', cantidad:10},
            {nombre:'Pera', cantidad:0},
            {nombre:'Platano' , cantidad:11},
            {nombre:'fresa' , cantidad:7},
            {nombre:'calabaza' , cantidad:12}
        ],
        nuevaFruta:''
, total
    },
    methods:{
        agregarFruta () {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad:0
            });
            this.nuevaFruta ='';
        }
    },
    computed: {
        sumarFrutas(){

        }
    }
});