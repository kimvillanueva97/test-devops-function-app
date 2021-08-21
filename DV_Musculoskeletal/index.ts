import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import { musculoskeletal } from '../controller/musculoskeletal';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    let data : Object = (req.query.data || (req.body && req.body.data || req.headers.data) || {});

    data = (typeof data === 'object')? data : JSON.parse(data);
    
    //pipe-line commit
    let ms = {};
    if(Object.keys(data).length !== 0){
        ms = musculoskeletal(data);
    }
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: {
            ms
        }
    };

};

export default httpTrigger;