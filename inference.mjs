import { spawn } from "child_process"

function inference(x, callback){
    return new Promise((resolveFunc) => {
        const pythonProcess = spawn('python',['./run_model.py', x[0], x[1], x[2], x[3], x[4], x[5], x[6], x[7]]);
        // const pythonProcess = spawn('python', ['./hello.py']);
        pythonProcess.stdout.on('data', (data) => {
            callback(data.toString())
        });
        pythonProcess.on('exit', (code) => {
            resolveFunc(code)
        })
    })

}

export default inference;