import { Controller, Get, Body } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { Transfer } from './transfer.interface';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Get()
  async sendTransfer(@Body() transfer: Transfer) {
    if (!transfer.to) {
      return 'error: reqest body null';
    }
    return await this.transferService.sendTransfer(transfer.to);
  }
}
