import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PaginateModel, PaginateResult } from 'mongoose';
import { CreatePageDto } from './dto/create-page.dto';
import { Pagination } from './dto/pagination.dto';
import { Page, PageDocument } from './entities/page.entity';

@Injectable()
export class PagesService {
  constructor(@InjectModel(Page.name) private pageModel: PaginateModel<PageDocument>){}

  private readonly logger = new Logger(PagesService.name);

  async create(createPageDto: CreatePageDto):Promise<Page> {
    try {
      this.logger.debug('Creating new page');
      const newPage = new this.pageModel(createPageDto);
      return newPage.save();
    } catch (e) {
      this.logger.error(`Error creating page: ${e}`);
      throw new InternalServerErrorException('Error creating page');
    }
  }

  async findAll():Promise<Array<Page>> {
    try {
      this.logger.debug('Looking all pages');
      const pages = await this.pageModel.find().exec();
      return pages;
    } catch (e) {
      this.logger.error(`Error looking pages: ${e}`);
      throw new InternalServerErrorException('Error looking pages');
    }
  }

  async getPagesPaginated(page: number, limit: number):Promise<PaginateResult<PageDocument>>{
    try {
      this.logger.debug('pagination fro pages');
      const paginatedPages = await this.pageModel.paginate({}, {page, limit});
      return paginatedPages;
    } catch (e) {
      this.logger.error(`Error looking pages: ${e}`);
      throw new InternalServerErrorException('Error looking pages');
    }
  }
}
