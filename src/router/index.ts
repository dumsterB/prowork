import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import TheHome from '../pages/Index/Home.vue'
import TheRegions from '../pages/Locations/Regions.vue'
import TheCountries from '../pages/Locations/TheCountries.vue'
import TheBlogs from '../pages/BenefitMaterials/Blog.vue'
import TheFaq from '../pages/BenefitMaterials/FAQ.vue'
import TheEvents from '../pages/BenefitMaterials/СalendarEvents.vue'
import TheAdvertising from '../pages/Advertising/Advertising.vue'
import TheCatalogCompany from '../pages/CatalogCompany/CatalogCompany.vue'
import TheOccupations from '../pages/ProfessionAndSpecializations/Occupations.vue'
import TheUtilization  from '../pages/Documents/Utilization.vue'
import TheServices from '../pages/Documents/Services.vue'
import TheHelp from '../pages/Documents/Help.vue'
import TheAgreement from '../pages/Documents/Agreement.vue'
import TheData from '../pages/Documents/Data.vue'
import TheAbout from '../pages/CompanyPROWORK/About.vue'
import TheInvestors from '../pages/CompanyPROWORK/Investors.vue'
import TheVacancies from '../pages/CompanyPROWORK/Vacancies.vue'
import TheSignUp from  '../pages/Auth/SignUp.vue'
import TheApplicants from '../pages/Statistics/ApplicantsStatistic.vue'
import TheCompany from '../pages/Statistics/CompanyStatistic.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: TheHome,
    },
    {
        path: '/regions',
        name: 'Regions',
        component:TheRegions,
    },
    {
        path: '/countries',
        name: 'TheCountries',
        component: TheCountries,
    },
    {
        path: '/blog',
        name: 'Blog',
        component:TheBlogs
    },
    {
        path: '/faq',
        name: 'FAQ',
        component:TheFaq,
    },
    {
        path: '/events',
        name: 'Events',
        component: TheEvents,
    },
    {
        path:'/advertising',
        name:"Advertising",
        component:TheAdvertising,
    },
    {
        path:'/catalog',
        name:"CatalogCompany",
        component:TheCatalogCompany,
    },
    {
        path:'/occupations',
        name:"Occupations",
        component:TheOccupations,
    },
    {
        path:'/utilization',
        name:"Utilization",
        component:TheUtilization,
    },
    {
        path:'/services',
        name:"Services",
        component: TheServices,
    },
    {
        path:'/help',
        name:"Help",
        component:TheHelp,
    },
    {
        path:'/agreement',
        name:"Agreement",
        component:TheAgreement,
    },
    {
        path:'/data',
        name:'Data',
        component:TheData,
    },
    {
        path:'/about',
        name:"About",
        component:TheAbout,
    },
    {
        path:'/investors',
        name:"Investors",
        component:TheInvestors,
    },
    {
        path:'/applicants',
        name:"Applicants",
        component:TheApplicants,
    },
    {
        path:'/company_statistic',
        name:"Company",
        component:TheCompany,
    },
    {
        path:'/vacancies',
        name:"Vacancies",
        component:TheVacancies,
    },
    {
        path:'/login',
        name:"SignIn",
        component:TheSignUp,
        meta:{
            layout:'AuthLayout'
        }
    },
    {
        path: '/:catchAll(.*)*',
        component:Error,
        name:"Error",
        meta:{
            layout:'ErrorLayout'
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
/*const DEFAULT_TITLE = 'Some Default Title';
router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});*/

export default router
