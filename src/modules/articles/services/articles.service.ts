import { Injectable } from '@nestjs/common';

import { CommentsService } from '../../comments/services/comments.service';
import { UsersService } from '../../users/services/users.service';
import { CreateArticleDto } from '../models/dto/req/create-article.dto';
import { UpdateArticleDto } from '../models/dto/req/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    private readonly usersService: UsersService,
    private readonly commentsService: CommentsService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(dto: CreateArticleDto) {
    this.usersService.checkAbilityToEditArticle('userId', 'articleId');
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateUserDto: UpdateArticleDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    this.commentsService.deleteAllCommentsForArticle('articleId');
    return `This action removes a #${id} user`;
  }
}
