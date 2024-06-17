import {createPermissionList} from './permissions.js';
import configFile from '@config/config.json';

export default {
  name: configFile.roles.member.name,
  slug: configFile.roles.member.slug,
  permissions: createPermissionList({
    'homePage.view': true,
    'initialPage.view': true,
    'profile.view': true,
    'profile.edit': true,
    'chat.view': true,
    'events.calendar.view': true,
    'events.calendar.edit': true,
    'events.view': true,
    'events.create': true,
    'events.meeting.create': true,
    'events.mentorship.create': true,
    'events.mentorship.form.mentor.view': true,
    'events.reminder.view': true,
    'events.reminder.create': true,
    'events.reminder.edit': true,
    'events.reminder.delete': true,
    'events.mentorship.edit': true,
    'events.mentorship.delete': true,
    'events.meeting.edit': true,
    'events.meeting.delete': true,
    'events.activity.view': true,
    'events.activity.create': true,
    'events.activity.edit': true,
    'events.activity.delete': true,
    'contacts.view': true,
    'events.activity.answer.view': true,
    'academicReports.view': true,
    'academicReports.mentor.view': true,
    'aboutUs.view': true,
  })
};
