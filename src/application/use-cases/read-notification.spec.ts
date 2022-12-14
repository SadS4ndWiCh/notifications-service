import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found-error';

describe('Read notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepositories = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepositories);

    const notification = makeNotification();

    await notificationsRepositories.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepositories.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    const notificationsRepositories = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepositories);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
