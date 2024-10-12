import app from './App';
import { Server } from 'http'


const port = 5022;
let server: Server;


function main() {
    server = app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    })
}

main();


process.on('unhandledRejection', () => {
    console.log(`Unhanlde Rejection found 😈`);
    if (server) {
        server.close(() => {
            process.exit(1);
        })
    }
    process.exit(1);
})
process.on('uncaughtException', () => {
    console.log(`UncaughtException found 😈`);
    process.exit(1);
})