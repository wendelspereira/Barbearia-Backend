// import { v4 as uuidv4 } from "uuid";
// import { hash } from "bcrypt";
// import connection  from "../";

// async function create() {
//     const id = uuidv4();
//     const password = await hash("admin", 8);
//     await (
//         `INSERT INTO USERS(id, name, password, email, "isAdmin", created_at) 
//         values('${id}', 'admin', '${password}', 'admin@alvesbarbearia.com', true, 'now()')`
//     );

//     connection.close;
// }

// create().then(() => console.log("User admin created!"));
