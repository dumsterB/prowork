<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider>
      <div class="logo_img">
        <h1 style="color: white">PROWORK</h1>
      </div>
      <a-menu theme="dark" mode="inline">
        <div v-for="(item,i) of nav_links" :key="i">
          <a-menu-item @click="HandlerRoute(item)" :key="i" v-if="!item.children">
            <component :is="item.icon"></component>
            <span>{{ item.name }}</span>
          </a-menu-item>
          <a-sub-menu :key="i" v-if="item.children">
            <template #title>
            <span>
             <component :is="item.icon"></component>
            <span>{{ item.name }}</span>
            </span>
            </template>
            <a-menu-item v-for="child of item.children" @click="HandlerRoute(child)" :key="child.name">
              <component :is="item.icon"></component>
              <span> {{ child.name }}</span>
            </a-menu-item>
          </a-sub-menu>
        </div>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px" >
        <div >
        <div v-for="(item,i) of nav_links" :key="i">
        <a-breadcrumb style="margin: 16px 0" v-if="!item.children && $route.fullPath===item.url">
          <a-breadcrumb-item>{{item.name}} </a-breadcrumb-item>        </a-breadcrumb>
        </div>
          <div v-for="(item,i) of nav_links" :key="i">
            <div v-if="item.children">
              <div v-for="child of item.children" :key="child.url">
                <a-breadcrumb style="margin: 16px 0" v-if="$route.fullPath===child.url">
                  <a-breadcrumb-item>{{item.name}} </a-breadcrumb-item>
                  <a-breadcrumb-item>{{child.name}} </a-breadcrumb-item>
                </a-breadcrumb>
              </div>
            </div>
          </div>
        </div>


        <div :style="{ padding: '24px', background: '#fff', minHeight: '100%' }">
          <router-view></router-view>
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
import {useRouter} from "vue-router";

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
    const router = useRouter()
    const collapsed = ref(false)
    const nav_links = ref(
        [
          {
            name: 'Главная',
            icon: HomeOutlined,
            url: '/'
          },
          {
            name: "Локация",
            icon: CompassOutlined,
            children: [
              {
                name: 'Регионы',
                url: '/regions',
                icon: 'country'
              },
              {
                name: 'Города',
                url: '/countries',
                icon: 'region'
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
            url: '/catalog'
          },
          {
            name: 'Полезные материалы',
            icon: ProfileOutlined,
            url: '/materials',
            children: [
              {
                name: 'Блог / Статьи',
                url: '/blog',
                icon: 'Blog'
              },
              {
                name: 'FAQ',
                url: '/faq',
                icon: 'Blog'
              },
              {
                name: 'Календарь мероприятий',
                url: '/events',
                icon: 'Blog'
              },
            ],
          },
          {
            name: 'Компания PROWORK',
            icon: NumberOutlined,
            url: '/company',
            children: [
              {
                name: 'О компании',
                icon: NumberOutlined,
                url: '/company',
              },
              {
                name: 'Наши вакансии',
                icon: NumberOutlined,
                url: '/vacancies',
              },
              {
                name: 'Инвесторам',
                icon: NumberOutlined,
                url: '/investors',
              },
            ],
          },
          {
            name: 'Документы',
            url: '/documents',
            icon: FolderOutlined,
            children: [
              {
                name: 'Условия оказания услуг',
                url: '/services',
                icon: FolderOutlined,
              },
              {
                name: 'Условия использования сайтов',
                url: '/utilization',
                icon: FolderOutlined,
              },
              {
                name: 'Защита персональных данных',
                url: '/data',
                icon: FolderOutlined,
              },
              {
                name: 'Помощь',
                url: '/help',
                icon: FolderOutlined,
              },
              {
                name: 'Пользовательское соглашение',
                url: '/agreement',
                icon: FolderOutlined,
              },
            ],
          },
          {
            name: 'Реклама на сайте',
            url: '/advertising',
            icon: FontColorsOutlined,
          },
          {
            name: 'Статистика',
            url: '/statistics',
            icon: BarChartOutlined,
            children: [
              {
                name: 'Статистика соискателей',
                url: '/applicants',
                icon: BarChartOutlined,
              },
              {
                name: 'Статистика компаний',
                url: '/company',
                icon: BarChartOutlined,
              },
            ],
          },
        ],
    )
    const HandlerRoute = (value: any) => {
      router.push(value.url)
    }
    return {
       collapsed, nav_links, HandlerRoute
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

.ant-layout-sider {
  max-width: 270px !important;
  min-width: 270px !important;
  width: 270px !important;
}
</style>