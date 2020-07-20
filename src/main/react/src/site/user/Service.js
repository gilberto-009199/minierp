import $ from 'jquery';

class Service {
    
    
    static login(data){
        console.log(data);
        console.log(JSON.stringify(data));
        
        return $.ajax({
            type:'post',
            method:'post',
            cache: false,
            contentType: "application/json; charset=utf-8",
            url:'http://localhost:8080/api/v1/user/login',
            data: JSON.stringify(data)
            /*data: JSON.stringify({
                                    'email':'admin@mail.com',
                                    'senha':'123'
                                 })/**/
         }).then((res)=>{
             console.log(res)
             return res;

         })
    }
    static cadastrar(data){
        console.log("@Service.cadastrar");
        console.log(JSON.stringify(data));
        
        return $.ajax({
            type:'post',
            method:'post',
            cache: false,
            contentType: "application/json; charset=utf-8",
            url:'http://localhost:8080/api/v1/user/cadastrar',
            data: JSON.stringify(data)
            /*data: JSON.stringify({
                                    'email':'admin@mail.com',
                                    'senha':'123'
                                 })/**/
         }).then((res)=>{
             console.log(res)
             return res;

         })
    }

}

export default Service;