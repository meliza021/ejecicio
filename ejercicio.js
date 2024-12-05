const A=console.log(" A[Enviado de: 1] aparecio en 12:16:24");
    

const B =console.log(" B [Enviado de: 2] aparecio en 12:16:24");
    

const c=console.log(" C[Enviado de: 4] aparecio en 12:16:29");
    

const D=console.log(" D[Enviado de: 5] aparecio en 12:16:27");


const E=console.log(" E [Enviado de: 6] aparecio en 12:16:29");
    

const F=console.log(" F[Enviado de: 3] aparecio en 12:16:31");
    

const G=console.log(" G[Enviado de: 7] aparecio en 12:16:31");
    

const H=console.log(" H[Enviado de: 8] aparecio en 12:16:34");



const getDatos = ()=> {
    return A;
}
const getDatosPromesas =()=> {
    return new  Promise ((resolve, rejec) => {
        
           
        if(A.length > 0 ){
            resolve (A);
        }else {
            rejec("error. Sin Datos");
        }
         
  
    })
};

getDatosPromesas()
 .then(A => console.table(A))
 .catch(err => console.error(err));



const Datos = ()=> {
    return B;
}
const DatosPromesas =()=> {
    return new  Promise ((resolve, rejec) => {
        setTimeout(function(){
           
        if(B.length > 0 ){
            resolve (B);
        }else {
            rejec("error. Sin Datos");
        }
         
    },1000);
    })
};

DatosPromesas()
 .then(B => console.table(B))
 .catch(err => console.error(err));








 const PDatos = ()=> {
    return c;
}
const Promesas =()=> {
    return new  Promise ((resolve, rejec) => {
        setTimeout(function(){
           
        if(c.length > 0 ){
            resolve (c);
        }else {
            rejec("error. Sin Datos");
        }
         
    },5000);
    })
};

Promesas()
 .then(c => console.table(c))
 .catch(err => console.error(err));
 






 const datos = ()=> {
    return D;
}
const promesas =()=> {
    return new  Promise ((resolve, rejec) => {
        setTimeout(function(){
           
        if(D.length > 0 ){
            resolve (D);
        }else {
            rejec("error. Sin Datos");
        }
         
    }, Math.random(2000, 5000));
    })
};

promesas()
 .then(D => console.table(D))
 .catch(err => console.error(err));






 const dato = ()=> {
    return E;
}
const promesa =()=> {
    return new  Promise ((resolve, rejec) => {
        setTimeout(function(){
           
        if(E.length > 0 ){
            resolve (E);
        }else {
            rejec("error. Sin Datos");
        }
         
    }, 8000);
    })
};

promesa()
 .then(E => console.table(E))
 .catch(err => console.error(err));



 const datoSS = ()=> {
    return F;
}
const promesaS =()=> {
    return new  Promise ((resolve, rejec) => {
        setTimeout(function(){
           
        if(F.length > 0 ){
            resolve (F);
        }else {
            rejec("error. Sin Datos");
        }
         
    }, 8000);
    })
};

promesaS()
 .then(F => console.table(F))
 .catch(err => console.error(err));
 




 const dato2 = ()=> {
    return G;
}
const promesa2 =()=> {
    return new  Promise ((resolve, rejec) => {
        setTimeout(function(){
           
        if(G.length > 0 ){
            resolve (G);
        }else {
            rejec("error. Sin Datos");
        }
         
    }, 8000);
    })
};

promesa2()
 .then(G => console.table(G))
 .catch(err => console.error(err));




 const dato3 = ()=> {
    return H;
}
const promesa3 =()=> {
    return new  Promise ((resolve, rejec) => {
        setTimeout(function(){
           
        if(H.length > 0 ){
            resolve (H);
        }else {
            rejec("error. Sin Datos");
        }
         
    }, 8000);
    })
};

promesa3()
 .then(H=> console.table(H))
 .catch(err => console.error(err));


