import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count notification', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepositories = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepositories,
    );

    await notificationsRepositories.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepositories.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepositories.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
