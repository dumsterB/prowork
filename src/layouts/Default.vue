<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider  >
      <div class="logo_img">
        <img height="50" src="../assets/logo.png" alt="">
      </div>
      <a-menu theme="dark" mode="inline">
        <div v-for="(item,i) of nav_links" :key="i">
          <a-menu-item  :key="i" v-if="!item.children" >
            <component :is="item.icon"></component>
            <span>{{item.name}}</span>
          </a-menu-item>
          <a-sub-menu :key="i" v-if="item.children">
            <template #title>
            <span>
             <component :is="item.icon"></component>
            <span>{{item.name}}</span>
            </span>
            </template>
            <a-menu-item v-for="child of item.children" :key="child.name">{{child.name}}</a-menu-item>
          </a-sub-menu>
        </div>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>User</a-breadcrumb-item>
          <a-breadcrumb-item>Bill</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '100%' }">
          Bill is a cat.
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Prowork ©2022 Created by Dumster
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import {
  PieChartOutlined,
  DesktopOutlined,
  HomeOutlined,
  CompassOutlined,
  BarChartOutlined,
  UserOutlined,
  FontColorsOutlined,
  NumberOutlined,
  FolderOutlined,
  TeamOutlined,
  ProfileOutlined,
  FileOutlined,
  FileTextOutlined
} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';

export default defineComponent({
  components: {
    PieChartOutlined,
    FontColorsOutlined,
    DesktopOutlined,
    UserOutlined,
    BarChartOutlined,
    FolderOutlined,
    NumberOutlined,
    ProfileOutlined,
    CompassOutlined,
    FileTextOutlined,
    HomeOutlined,
    TeamOutlined,
    FileOutlined,
  },
  setup() {
    const collapsed = ref(false)
    const selectedKeys = ref(['1'])
    const nav_links = ref(
       [
      {
        name: 'Главная',
        icon: HomeOutlined,
        url:'/'
      },
      {
        name: "Локация",
        icon:CompassOutlined,
        children: [
          {
            name: 'Регионы',
            url: '/regions',
            icon:'country'
          },
          {
            name: 'Города',
            url: '/countries',
            icon:'region'
          }
        ]
      },
      {
        name: 'Професии и специализации',
        icon: 'UserOutlined',
        url: '/occupations'
      },
      {
        name: 'Каталог компаний',
        icon: FileTextOutlined,
        url:'/catalog'
      },
      {
        name: 'Полезные материалы',
        icon:ProfileOutlined,
        url:'/materials',
        children: [
          {
            name: 'Блог / Статьи',
            file: 'png',
            link: 'Blog'
          },
          {
            name: 'FAQ',
            file: 'html',
            link: 'FAQ'
          },
          {
            name: 'Календарь мероприятий',
            file: 'html',
            link: 'CalendarEvents'
          },
        ],
      },
      {
        name: 'Компания PROWORK',
        icon:NumberOutlined,
        url:'/company',
        children: [
          {
            name: 'О компании',
            file: 'png',
            link: 'About'
          },
          {
            name: 'Наши вакансии',
            file: 'html',
            link: 'Vacancies'
          },
          {
            name: 'Инвесторам',
            file: 'html',
            link: 'Investors'
          },
        ],
      },
      {
        name: 'Документы',
        url:'/documents',
        icon:FolderOutlined,
        children: [
          {
            name: 'Условия оказания услуг',
            file: 'png',
            link: 'Services'
          },
          {
            name: 'Условия использования сайтов',
            file: 'html',
            link: 'Utilization'
          },
          {
            name: 'Защита персональных данных',
            file: 'html',
            link: 'Data'
          },
          {
            name: 'Помощь',
            file: 'html',
            link: 'Help'
          },
          {
            name: 'Пользовательское соглашение',
            file: 'html',
            link: 'Agreement'
          },
        ],
      },
      {
        name: 'Реклама на сайте',
        url: '/advertising',
        icon:FontColorsOutlined ,
      },
      {
        name: 'Статистика',
        url:'/statistics',
        icon:BarChartOutlined,
        children: [
          {
            name: 'Статистика соискателей',
            file: 'png',
            link: 'Applicants'
          },
          {
            name: 'Статистика компаний',
            file: 'html',
            link: 'Company'
          },
        ],
      },
    ],
    )

    return {
      selectedKeys, collapsed,nav_links
    }
  }
});
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}

.logo_img {
  display: flex;
  justify-content: center;
  padding: 5px;
}
.ant-layout-sider{
  max-width: 270px!important;
  min-width: 270px!important;
  width: 270px!important;
}
</style>