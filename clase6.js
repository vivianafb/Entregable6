const fs = require("fs/promises");
const archivo = 'archivo.txt';


class Archivo{
    constructor(id,title,price,thumbnail){
        this.id = id;
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
    }

    read(){
        fs.readFile(archivo, 'utf-8')
        .then((fileData) => {
            console.log(fileData);
            return fileData;
        }) 
        .catch((err) => {
            console.log("error", err);
        });
    }

    async save(title,price,thumbnail){
        try{
            let producto = [];
            let id = producto.length +1;
            producto.push({title,price,thumbnail,id});
            await fs.appendFile(archivo,JSON.stringify(producto,null,'\t') , (err,salida) =>{});
            console.log('Guardado');
   
        }catch(err){
            console.log("error", err);
        }
        
    }

    async delete(){
        try{
            await fs.unlink(archivo,(err,salida)=>{
                if (err) console.log('Error Borrado', err);
                console.log('DONE');
            })
        }catch(err){

        }
    }
}

const productos = new Archivo();

productos.save('Libro','12.000','url');
productos.save('Celular','300.000','url');
productos.save('Teclado','20.000','url');
productos.read();
productos.delete();
