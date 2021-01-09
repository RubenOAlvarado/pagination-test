import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PageDocument = Page & Document;

@Schema()
export class Page {
    @Prop()
    title: string;

    @Prop()
    subtitle: string;
}

export const PageSchema = SchemaFactory.createForClass(Page);
