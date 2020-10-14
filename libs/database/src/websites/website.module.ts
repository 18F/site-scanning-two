import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Website } from './website.entity';
import { WebsiteService } from './websites.service';

@Module({
  imports: [TypeOrmModule.forFeature([Website])],
  providers: [WebsiteService],
  exports: [TypeOrmModule],
})
export class WebsiteModule {}