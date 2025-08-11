import { getCustomRepository, type Repository } from "typeorm";
import { MessagesRepository } from "../repositories/MessagesRepository";
import { Message } from "../entities/Message";

interface IMessages {
  text: string;
  admin_id?: string;
  user_id: string;
}

class MessagesService {
  private messagesRepository: Repository<Message>;

  constructor() {
    this.messagesRepository = getCustomRepository(MessagesRepository);
  }

  async create({ text, admin_id, user_id }: IMessages) {
    const message = this.messagesRepository.create({
      text,
      admin_id,
      user_id,
    });

    await this.messagesRepository.save(message);

    return message;
  }

  // List Messages by User
  async listByUser(user_id: string) {
    const list = await this.messagesRepository.find({
      where: user_id,
      relations: ["user"],
    });

    return list;
  }
}

export { MessagesService };
