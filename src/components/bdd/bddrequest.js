var Connection = require('tedious').Connection;  
    var config = {  
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
    var connection = new Connection(config);  
    connection.on('connect', function(err) {    
        console.log("Connected");  
        executeStatement();  
    });  
  
    var Request = require('tedious').Request;  
    var TYPES = require('tedious').TYPES;  
  
    executeStatement = () => {  
        request = new Request("select COUNT(id) from campagne where enabled=1;", function(err) {  
        if (err) {  
            console.log(err);}
        });  
        var result = "";  
        request.on('row', function(columns) {  
            columns.forEach(function(column) {  
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log(result);  
            result ="";  
        });  
  
        request.on('done', function(rowCount, more) {  
        console.log(rowCount + ' rows returned');  
        });  
        connection.execSql(request);  
    }

export var Connection;
export function executeStatement();