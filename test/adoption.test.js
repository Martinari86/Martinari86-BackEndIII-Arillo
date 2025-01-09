import supertest from "supertest";
import chai from "chai";

const expect = chai.expect;
const requester = supertest("http://localhost:8080");

describe("Route de Adopciones", ()=>{
    describe("GET /api/adoptions", () =>{
        it("Retorna un array con las adopciones", async () =>{
            const {status} = await requester.get("/api/adoptions");
            expect(status).to.equal(200);
        })
        it("Retorna 404 si la ruta no existe", async () =>{
            const {status} = await requester.get("/adoptions/noexiste");
            expect(status).to.equal(404);
        })  
        it("Retorna una adopcion existente", async () =>{
            let aid = "02020dd0dfFSA09090";
            const {status} = await requester.get(`/api/adoptions/${aid}`);
            expect(status).to.equal(200);
        })   
        it("Retorna error si la adopcion no existe", async () =>{
            let noexisteaid = "02020dd0dfFSA09090";
            const {status} = await requester.get(`/api/adoptions/${noexisteaid}`);
            expect(status).to.equal(404);
        }) 
        it("Retorna la creacion de una adopcion", async () =>{
            let uid = "02020dd0dfFSA09090";
            let pid = "dkslewklk43123213d";
            const {status} = await requester.post(`/api/adoptions/${uid}/${pid}`);
            expect(status).to.equal(200);
        }) 
        it("Retorna error la creacion de una adopcion, usuario no existe", async () =>{
            let noexisteuid = "02020dd0dfFSA09090";
            let pid = "dkslewklk43123213d";
            const {status} = await requester.post(`/api/adoptions/${noexisteuid}/${pid}`);
            expect(status).to.equal(404);
        }) 
        it("Retorna error la creacion de una adopcion, mascota no existe", async () =>{
            let uid = "02020dd0dfFSA09090";
            let noexistepid = "dkslewklk43123213d";
            const {status} = await requester.post(`/api/adoptions/${uid}/${noexistepid}`);
            expect(status).to.equal(200);
        }) 
        it("Retorna error la creacion de una adopcion, usuario y mascota no existen", async () =>{
            let noexisteuid = "02020dd0dfFSA09090";
            let noexistepid = "dkslewklk43123213d";
            const {status} = await requester.post(`/api/adoptions/${noexisteuid}/${noexistepid}`);
            expect(status).to.equal(200);
        }) 
    })
})