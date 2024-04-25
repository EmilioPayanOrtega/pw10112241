let express = require ('express');
let mysql = require ('mysql');
let cors = require ('cors');

let app = express();
app.use(express.json())
app.use(cors());

//Conexion a Mysql 
let conexion = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'pwdata',
})

//Nos conectamos a MySQL
conexion.connect(function(error){
    if (error){
        throw error;
    }else{
        console.log('Conectando a la base de datos')
    }
});

//Rutas de acceso
app.get("/",function(req,res){
    res.send("Ruta de inicio");
}
)

//Seleccionamos todos los clientes
app.get('/api/clientes',(req,res)=>{
    conexion.query('SELECT * FROM clientes',(error,filas)=>{
        if(error){
            throw error;
        }else{
            res.send(filas);
        }
    });
})

//Encender el servidor
let puerto = 3000;
app.listen(puerto,function(){
    console.log('Servidor escuchando puerto' + puerto)
})