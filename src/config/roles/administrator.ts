import {createPermissionList} from './permissions.js';
import configFile from '@config/config.json';

export default {
  name: configFile.roles.administrator.name,
  slug: configFile.roles.administrator.slug,
  permissions: createPermissionList({
    'homePage.view': true,
    'initialPage.view': true,
    'dashboard.view': true,
    'users.view': true,
    'system.permissions.view': true,
    'system.report.view': true,
    'system.config.view': true,
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
    'events.mentorship.form.teacher.view': true,
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
    'events.activity.answer.view': true,
    'users.create': true,
    'users.delete': true,
    'users.edit': true,
    'system.permissions.edit': true,
    'academicReports.view': true,
    'academicReports.teacher.view': true,
    'academicReports.mentor.view': true,
    'aboutUs.view': true,
    'system.config.InitialPage.view': true,
    'system.config.InitialPage.edit': true,
    'system.config.mentorshipForm.view': true,
    'system.config.mentorshipForm.create': true,
    'system.config.mentorshipForm.edit': true,
    'system.config.courses.view': true,
    'system.config.courses.create': true,
    'system.config.courses.edit': true,
    'system.reports.userMetrics.view': true,
    'system.reports.meetingMetrics.view': true,
    'system.reports.mentorshipMetrics.view': true,
    'system.reports.activityMetrics.view': true,
  })
};
