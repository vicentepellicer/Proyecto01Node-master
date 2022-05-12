//Modulos de enrutaddo
const fs=require('fs');
const HTML_CONTENT_TYPE="text/html";
const CSS_CONTENT_TYPE="text/css";
const PNG_CONTENT_TYPE="image/png";

exports.init = function(req,res){
    res.statusCode = 200;

    //Path
    const path=req.url;
    console.log(path);

    //Enrutado
    if(path==="/"){
        res.setHeader('Content-Type', HTML_CONTENT_TYPE);
        const index=fs.readFile(`${__dirname}/../public/index.html`, (err, data) => {
            if(err){
                console.log("Error en la carga del index.html");
                res.end("Error en la carga del index.html");
            }else{
                res.end(data);
            }
          });
    }else if (path.match("\.css$")){
        res.setHeader('Content-Type', CSS_CONTENT_TYPE);
        const css=fs.readFile(`${__dirname}/../public/`+path, (err, data) => {
            if(err){
                console.log("Error en la carga del index.html");
                res.end("Error en la carga de "+path);
            }else{
                res.end(data);
            }
          });
    }else if (path.match("\.png$")){
    res.setHeader('Content-Type', PNG_CONTENT_TYPE);
    const css=fs.readFile(`${__dirname}/../public/`+path, (err, data) => {
        if(err){
            console.log("Error en la carga del index.html");
            res.end("Error en la carga de "+path);
        }else{
            res.end(data);
        }
      });
    }else{
        res.setHeader('Content-Type', HTML_CONTENT_TYPE);
        res.end("OTRA CUALQUIERA");
    }


    
}