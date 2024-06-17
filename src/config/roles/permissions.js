const { groupPermissions } = require('../../utils/array');

const PERMISSIONS = [
  //home Page
  {
    name: 'Visualizar Pagina Principal',
    slug: 'homePage.view',
  },
  //Initial Page
  {
    name: 'Visualizar Pagina Inicial',
    slug: 'initialPage.view',
  },
  // Dashboard
  {
    name: 'Visualizar Dashboard',
    slug: 'dashboard.view',
  },
  {
    name: 'Visualizar Usuário',
    slug: 'users.view',
  },
  {
    name: 'Visualizar Permissões',
    slug: 'system.permissions.view',
  },
  {
    name: 'Visualizar Relatórios',
    slug: 'system.report.view',
  },
  {
    name: 'Visualizar Configurações do Sistema',
    slug: 'system.config.view',
  },
  // Profile Page
  {
    name: 'Visualizar Perfil',
    slug: 'profile.view',
  },
  {
    name: 'Editar Perfil',
    slug: 'profile.edit',
  },
  // Chat Page
  {
    name: 'Visualizar Chat',
    slug: 'chat.view',
  },
  // Contacts Page
  {
    name: 'Visualizar Contatos',
    slug: 'contacts.view',
  },

  //Events
  //Calendar Page
  {
    name: 'Calendário',
    slug: 'events.calendar.view',
  },
  {
    name: 'Editar Calendário',
    slug: 'events.calendar.edit',
  },
  // Event Page
  {
    name: 'Visualizar Evento',
    slug: 'events.view',
  },
  {
    name: 'Criar Evento',
    slug: 'events.create',
  },
  {
    name: 'Criar Reunião',
    slug: 'events.meeting.create',
  },
  {
    name: 'Criar Mentoria',
    slug: 'events.mentorship.create',
  },
  {
    name: 'Ver / Responder Formulário Mentor',
    slug: 'events.mentorship.form.mentor.view',
  },
  {
    name: 'Ver / Responder Formulário Professor',
    slug: 'events.mentorship.form.teacher.view',
  },
  {
    name: 'Visualizar Lembrete',
    slug: 'events.reminder.view',
  },
  {
    name: 'Criar Lembrete',
    slug: 'events.reminder.create',
  },
  {
    name: 'Editar Lembrete',
    slug: 'events.reminder.edit',
  },
  {
    name: 'Deletar Lembrete',
    slug: 'events.reminder.delete',
  },
  {
    name: 'Editar Mentoria',
    slug: 'events.mentorship.edit',
  },
  {
    name: 'Deletar Mentoria',
    slug: 'events.mentorship.delete',
  },
  {
    name: 'Editar Reunião',
    slug: 'events.meeting.edit',
  },
  {
    name: 'Deletar Reunião',
    slug: 'events.meeting.delete',
  },

  // Activities
  {
    name: 'Visualizar Atividades',
    slug: 'events.activity.view',
  },
  {
    name: 'Criar Atividade',
    slug: 'events.activity.create',
  },
  {
    name: 'Editar Atividade',
    slug: 'events.activity.edit',
  },
  {
    name: 'Deletar Atividade',
    slug: 'events.activity.delete',
  },
  {
    name: 'Visualizar Respostas',
    slug: 'events.activity.answer.view',
  },
  // Users Page
  {
    name: 'Adicionar Usuário',
    slug: 'users.create',
  },
  {
    name: 'Deletar Usuário',
    slug: 'users.delete',
  },
  {
    name: 'Editar Usuário',
    slug: 'users.edit',
  },
  // Permissions Page
  {
    name: 'Editar Permissão',
    slug: 'system.permissions.edit',
  },
  {
    name: 'Editar Menu de Login',
    slug: 'loginMenu.edit',
  },
  // Academic Reports Page
  {
    name: 'Visualizar Relatórios Acadêmicos',
    slug: 'academicReports.view',
  },
  {
    name: 'Visualizar Relatório Professor',
    slug: 'academicReports.teacher.view',
  },
  {
    name: 'Visualizar Relatório Mentor',
    slug: 'academicReports.mentor.view',
  },
  // About Us Page
  {
    name: 'Visualizar Sobre',
    slug: 'aboutUs.view',
  },

  // System Configuration Page
  {
    name: 'Visualizar Configuração Página Inicial',
    slug: 'system.config.InitialPage.view',
  },
  {
    name: 'Editar Página Inicial',
    slug: 'system.config.InitialPage.edit',
  },
  {
    name: 'Visualizar Configuração Formulários de Mentoria',
    slug: 'system.config.mentorshipForm.view',
  },
  {
    name: 'Criar Formulários de Mentoria',
    slug: 'system.config.mentorshipForm.create',
  },
  {
    name: 'Editar Configuração Formulários de Mentoria',
    slug: 'system.config.mentorshipForm.edit',
  },
  {
    name: 'Visualizar Configuração Cursos',
    slug: 'system.config.courses.view',
  },
  {
    name: 'Criar Cursos',
    slug: 'system.config.courses.create',
  },
  {
    name: 'Editar Cursos',
    slug: 'system.config.courses.edit',
  },
  // System Reports Page
  {
    name: 'Visualizar Métricas de Usuários',
    slug: 'system.reports.userMetrics.view',
  },
  {
    name: 'Visualizar Métricas de Reuniões',
    slug: 'system.reports.meetingMetrics.view',
  },
  {
    name: 'Visualizar Métricas de Mentoria',
    slug: 'system.reports.mentorshipMetrics.view',
  },
  {
    name: 'Visualizar Métricas de Atividades',
    slug: 'system.reports.activityMetrics.view',
  },
  {
    name: 'Visualizar Desenvolvedores',
    slug: 'system.reports.developers.view',
  },
  {
    name: 'Visualizar Métricas de Requisições',
    slug: 'system.reports.requestsMetrics.view',
  },
  {
    name: 'Visualizar Métricas do Github',
    slug: 'system.reports.githubMetrics.view',
  },
  {
    name: 'Visualizar Métricas da Railway',
    slug: 'system.reports.railwayMetrics.view',
  },
  {
    name: 'Visualizar Logs do Sistema',
    slug: 'system.reports.logs.view',
  },
];

const GROUPS_NAMES = {
  dashboard: 'Dashboard',
  users: 'Usuários',
  permission: 'Permissões',
  reports: 'Relatórios',
  system: 'Sistema',
  loginMenu: 'Menu Login',
  homePage: 'Pagina Principal',
  calendar: 'Calendario',
  activity: 'Atividades',
  chat: 'Chat',
  profile: 'Perfil',
};

const GROUPED_PERMISSIONS = groupPermissions(PERMISSIONS).map((group) => {
  group.name = GROUPS_NAMES[group.name];

  return group;
});

const createPermissionList = (permissionMap) => {
  return Object.keys(permissionMap)
    .map((slug) => {
      const allowed = permissionMap[slug];
      const permission = PERMISSIONS.find((perm) => perm.slug === slug);

      if (permission) {
        permission.allowed = allowed;

        return permission;
      }
    })
    .filter(Boolean);
};

export { PERMISSIONS, GROUPS_NAMES, GROUPED_PERMISSIONS, createPermissionList };
