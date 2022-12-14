import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../http/dtos/create-notification-body';

import { PrismaService } from '../database/prisma/prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;
    await this.prisma.notification.create({
      data: {
        content,
        category,
        recipientId,
      },
    });
  }
}
