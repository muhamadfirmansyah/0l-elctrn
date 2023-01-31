// adding notification. Learn more here: https://www.electronjs.org/docs/latest/tutorial/notifications

const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'Notification from the Renderer process. Click to log to console.'
const CLICK_MESSAGE = 'Notification clicked!'

const showNotificationButton = document.getElementById('show-notification-button');

showNotificationButton.addEventListener('click', () => {
    new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick = () => document.getElementById('output').innerText = CLICK_MESSAGE;
})