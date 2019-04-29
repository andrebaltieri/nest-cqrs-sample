import { AggregateRoot } from '@nestjs/cqrs';
import { RoomBookedEvent } from 'src/events/room-booked.event';

export class Room extends AggregateRoot {
    constructor(private readonly id: string) {
        super();
    }

    book(customerId: string) {
        // logic
        this.apply(new RoomBookedEvent(customerId, this.id));
    }
}