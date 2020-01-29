export const Connection = require('tedious').Connection;  
const config = {  
    server: 'xlstatlog.database.windows.net',
    authentication: {
        type: 'default',
        options: {
            userName: 'xlstat',
            password: 'addinsoft123!'
        }
    },
    options: {
        encrypt: true,
        database: 'xlstat_releaseNote_Copy'
    }
}; 

const Request = require('tedious').Request;  
const TYPES = require('tedious').TYPES;

export const executeStatement = () => {  
    request = new Request("select COUNT(id) from campagne where enabled=1;", function(err) {  
    if (err) {  
        console.log(err);}
    });  
    let result = "";  
    request.on('row', function(columns) {  
        columns.forEach(function(column) {  
            if (column.value === null) {  
            console.log('NULL');  
            } else {  
                result += column.value + " ";  
            }  
        });  
        console.log(result);  
        result = "";  
    });  

    request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
    });  
    connection.execSql(request);  
}

const connection = new Connection(config);  
connection.on('connect', function(err) {    
    console.log("Connected");  
    executeStatement();  
});  