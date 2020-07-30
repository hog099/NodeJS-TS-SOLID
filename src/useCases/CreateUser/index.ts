import { MailTrapMailProvider } from "../../providers/implementarions/MailTrapProvider";
import { PostgresUsersRepository } from "../../repositories/implementarions/PostgresUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailtrapMailProvider = new MailTrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapMailProvider
);


const createUserController = new CreateUserController(
    createUserUseCase
);

export { createUserUseCase, createUserController }
