import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";
// import "../"
import createConnection  from "../";

async function create() {
    console.log(1)
    const connection = await createConnection("ec2-52-4-104-184.compute-1.amazonaws.com");
    console.log(2)
    const id = uuidv4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USERS(id, name, password, email, "isAdmin", created_at) 
        values('${id}', 'admin', '${password}', 'admin@alvesbarbearia.com', true, 'now()')`
    );

    connection.close;
}

create().then(() => console.log("User admin created!"));
