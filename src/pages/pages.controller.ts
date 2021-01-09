import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { Pagination } from './dto/pagination.dto';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  create(@Body() createPageDto: CreatePageDto) {
    return this.pagesService.create(createPageDto);
  }

  @Get()
  findAll() {
    return this.pagesService.findAll();
  }

  @Get('paginated')
  findPaginate(@Query('page') page:number, @Query('limit') limit:number){
    return this.pagesService.getPagesPaginated(page, limit);
  }
}
