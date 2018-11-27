

export function print(){ 
    // ...
}

// export namespace print {
    
//     export function privateMessage(message){
//          // ...
//         }
//     export const defaultProps = {
//         name : "Christian"
//     }   
// }

print.privateMessage = function(message){}
print.defaultProps = {name:"Christian"};

print.privateMessage(print.defaultProps.name);



