import { Module } from '@nestjs/common';
import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Page, PageSchema } from './entities/page.entity';
import * as mongoosePaginate from 'mongoose-paginate-v2';

@Module({
  imports:[
    MongooseModule.forFeatureAsync([
      {
        name: Page.name,
        useFactory: () => {
          const schema = PageSchema;
          schema.plugin(mongoosePaginate);
          return schema;
        } 
      }
    ]),
  ],
  controllers: [PagesController],
  providers: [PagesService]
})
export class PagesModule {}