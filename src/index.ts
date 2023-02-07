import * as http from 'http';
import {arr} from './utils/a'

console.log(arr,'arr...')
const server = http.createServer((req,resp) => {
    resp.end("Hello Node!  "+arr?.join(',')+'changed...');
    
});

server.listen(8000);
